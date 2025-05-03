document.addEventListener('DOMContentLoaded', () => {
    const radicalListContainer = document.getElementById('radical-list-container');
    const writingModal = document.getElementById('writing-modal');
    const quizModal = document.getElementById('quiz-modal');
    const quizConfigModal = document.getElementById('quiz-config-modal');
    const studyModal = document.getElementById('study-modal');
    const studyConfigModal = document.getElementById('study-config-modal');
    const closeWritingBtn = document.getElementById('close-writing-modal');
    const closeQuizBtn = document.getElementById('close-quiz-modal');
    const closeQuizConfigBtn = document.getElementById('close-quiz-config-modal');
    const closeStudyBtn = document.getElementById('close-study-modal');
    const closeStudyConfigBtn = document.getElementById('close-study-config-modal');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const startStudyBtn = document.getElementById('start-study-btn');
    const startQuizSessionBtn = document.getElementById('start-quiz-session');
    const startStudySessionBtn = document.getElementById('start-study-session');
    const studyCard = document.getElementById('study-card');
    const studyProgress = document.getElementById('study-progress');
    const quizCountInput = document.getElementById('quiz-count');

    // Variables para el modo de estudio
    let studyRadicals = [];
    let currentStudyIndex = 0;
    let learnedRadicals = new Set(JSON.parse(localStorage.getItem('learnedRadicals') || '[]'));
    let notLearnedRadicals = new Set(JSON.parse(localStorage.getItem('notLearnedRadicals') || '[]'));

    // --- RENDER RADICALS ---
    function renderRadicals() {
        radicalListContainer.innerHTML = ''; // Clear loading message
        radicalsData.forEach(rad => {
            const card = document.createElement('div');
            card.className = 'radical-card';
            card.innerHTML = `
                <div class="radical-char">${rad.radical} ${rad.variants.length > 0 ? `<span style="font-size: 1.5rem; color: grey;">(${rad.variants.join(', ')})</span>` : ''}</div>
                <p><strong>Pinyin:</strong> ${rad.pinyin}</p>
                <p><strong>Significado:</strong> ${rad.meaning}</p>
                <p><strong>Ejemplos:</strong> ${rad.examples || 'N/A'}</p>
                <div class="buttons">
                    <button class="pronounce-btn" data-char="${rad.radical}" title="Escuchar pronunciación">🔊</button>
                    <button class="write-btn" data-radical='${JSON.stringify(rad)}' title="Practicar escritura">✍️</button>
                </div>
            `;
            radicalListContainer.appendChild(card);
        });
    }

    // --- EVENT LISTENERS ---
    radicalListContainer.addEventListener('click', (e) => {
        // Pronunciation Button
        if (e.target.classList.contains('pronounce-btn')) {
            const charToSpeak = e.target.dataset.char;
            speak(charToSpeak);
        }
        // Writing Practice Button
        if (e.target.classList.contains('write-btn')) {
            const radicalData = JSON.parse(e.target.dataset.radical);
            openWritingPractice(radicalData);
        }
    });

    // Modal Close Buttons
    closeWritingBtn.onclick = () => {
        writingModal.style.display = 'none';
        // Limpiar el área de Hanzi Writer y controles
        const existingControls = document.querySelector('.writing-controls');
        if (existingControls) {
            existingControls.remove();
        }
        hanziWriterTarget.innerHTML = '';
        if (currentWriter) {
            currentWriter = null;
        }
    };

    // Event listener para cerrar el modal al hacer clic fuera
    window.onclick = (event) => {
        if (event.target == writingModal) {
            writingModal.style.display = 'none';
            // Limpiar el área de Hanzi Writer y controles
            const existingControls = document.querySelector('.writing-controls');
            if (existingControls) {
                existingControls.remove();
            }
            hanziWriterTarget.innerHTML = '';
            if (currentWriter) {
                currentWriter = null;
            }
        }
        if (event.target == quizModal) quizModal.style.display = 'none';
        if (event.target == quizConfigModal) quizConfigModal.style.display = 'none';
        if (event.target == studyModal) studyModal.style.display = 'none';
        if (event.target == studyConfigModal) studyConfigModal.style.display = 'none';
    };

    // Event Listeners para el modo de estudio
    startStudyBtn.onclick = () => studyConfigModal.style.display = 'block';
    startStudySessionBtn.onclick = () => {
        const count = parseInt(document.getElementById('study-count').value);
        if (count > 0 && count <= radicalsData.length) {
            // Seleccionar radicales aleatorios
            const shuffled = radicalsData.sort(() => 0.5 - Math.random());
            studyRadicals = shuffled.slice(0, count);
            currentStudyIndex = 0;
            
            // Cerrar modal de configuración y abrir modal de estudio
            studyConfigModal.style.display = 'none';
            studyModal.style.display = 'block';
            
            // Mostrar el primer radical
            showNextRadical();
        } else {
            alert(`Por favor, introduce un número entre 1 y ${radicalsData.length}.`);
        }
    };

    // Event Listeners para los botones de estudio
    document.querySelector('.pronounce-study-btn').onclick = () => {
        const currentRadical = studyRadicals[currentStudyIndex];
        speak(currentRadical.radical);
    };

    document.querySelector('.learned-btn').onclick = () => {
        const currentRadical = studyRadicals[currentStudyIndex];
        learnedRadicals.add(currentRadical.radical);
        notLearnedRadicals.delete(currentRadical.radical);
        saveProgress();
        currentStudyIndex++;
        showNextRadical();
    };

    document.querySelector('.not-learned-btn').onclick = () => {
        const currentRadical = studyRadicals[currentStudyIndex];
        notLearnedRadicals.add(currentRadical.radical);
        learnedRadicals.delete(currentRadical.radical);
        saveProgress();
        currentStudyIndex++;
        showNextRadical();
    };

    // Función para guardar el progreso en localStorage
    function saveProgress() {
        localStorage.setItem('learnedRadicals', JSON.stringify([...learnedRadicals]));
        localStorage.setItem('notLearnedRadicals', JSON.stringify([...notLearnedRadicals]));
    }

    // Función para mostrar el siguiente radical en el modo de estudio
    function showNextRadical() {
        if (currentStudyIndex >= studyRadicals.length) {
            // Sesión completada
            studyModal.style.display = 'none';
            studyProgress.textContent = '¡Sesión de estudio completada!';
            return;
        }

        const currentRadical = studyRadicals[currentStudyIndex];
        document.querySelector('.radical-char-study').textContent = currentRadical.radical;
        document.querySelector('.radical-pinyin').textContent = currentRadical.pinyin;
        document.querySelector('.radical-meaning').textContent = currentRadical.meaning;
        studyProgress.textContent = `Radical ${currentStudyIndex + 1} de ${studyRadicals.length}`;
    }

    // --- PRONUNCIATION ---
    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Tu navegador no soporta la síntesis de voz.');
        }
    }

    // --- WRITING PRACTICE ---
    const practiceCanvas = document.getElementById('practice-canvas');
    const ctx = practiceCanvas.getContext('2d');
    const clearCanvasBtn = document.getElementById('clear-canvas-btn');
    const writingRadicalInfo = document.getElementById('writing-radical-info');
    const hanziWriterTarget = document.getElementById('hanzi-writer-target');
    let isDrawing = false;
    let currentWriter = null;

    function openWritingPractice(radicalData) {
        writingRadicalInfo.textContent = `Practicando: ${radicalData.radical} (${radicalData.pinyin}) - ${radicalData.meaning}`;
        writingModal.style.display = 'block';

        // Limpiar el área de Hanzi Writer y controles anteriores
        const existingControls = document.querySelector('.writing-controls');
        if (existingControls) {
            existingControls.remove();
        }
        hanziWriterTarget.innerHTML = '';

        // Configurar Hanzi Writer
        const writer = HanziWriter.create('hanzi-writer-target', radicalData.radical, {
            width: 200,
            height: 200,
            padding: 5,
            showOutline: true,
            showCharacter: false,
            strokeAnimationSpeed: 1,
            delayBetweenStrokes: 200,
            delayBetweenLoops: 1000,
            strokeColor: '#333',
            radicalColor: '#333',
            outlineColor: '#ddd',
            drawingColor: '#333',
            drawingWidth: 3,
            showHintAfterMisses: 3,
            highlightColor: '#4CAF50',
            highlightCompleteColor: '#4CAF50',
            highlightOnComplete: true,
            fadeOnComplete: true,
            fadeOnCompleteDuration: 1000,
            leniency: 0.5, // Ajusta la tolerancia para la validación de trazos
            strokeFadeDuration: 400,
            strokeHighlightSpeed: 200,
            strokeHighlightDuration: 200,
            strokeHighlightColor: '#4CAF50',
            strokeHighlightEndColor: '#4CAF50',
            strokeHighlightWidth: 3,
            strokeHighlightOpacity: 0.5,
            strokeHighlightFadeDuration: 200,
            strokeHighlightFadeDelay: 200,
            strokeHighlightFadeOpacity: 0.5,
            strokeHighlightFadeWidth: 3,
            strokeHighlightFadeColor: '#4CAF50',
            strokeHighlightFadeEndColor: '#4CAF50',
            strokeHighlightFadeStartColor: '#4CAF50',
            strokeHighlightFadeEndOpacity: 0.5,
            strokeHighlightFadeStartOpacity: 0.5,
            strokeHighlightFadeEndWidth: 3,
            strokeHighlightFadeStartWidth: 3,
            strokeHighlightFadeEndDuration: 200,
            strokeHighlightFadeStartDuration: 200,
            strokeHighlightFadeEndDelay: 200,
            strokeHighlightFadeStartDelay: 200,
            strokeHighlightFadeEndSpeed: 200,
            strokeHighlightFadeStartSpeed: 200,
            strokeHighlightFadeEndEasing: 'easeInOut',
            strokeHighlightFadeStartEasing: 'easeInOut',
            strokeHighlightFadeEndTiming: 'linear',
            strokeHighlightFadeStartTiming: 'linear',
            strokeHighlightFadeEndRepeat: 1,
            strokeHighlightFadeStartRepeat: 1,
            strokeHighlightFadeEndYoyo: false,
            strokeHighlightFadeStartYoyo: false,
            strokeHighlightFadeEndReverse: false,
            strokeHighlightFadeStartReverse: false,
            strokeHighlightFadeEndMirror: false,
            strokeHighlightFadeStartMirror: false,
            strokeHighlightFadeEndAlternate: false,
            strokeHighlightFadeStartAlternate: false,
            strokeHighlightFadeEndAlternateDelay: 200,
            strokeHighlightFadeStartAlternateDelay: 200,
            strokeHighlightFadeEndAlternateDuration: 200,
            strokeHighlightFadeStartAlternateDuration: 200,
            strokeHighlightFadeEndAlternateEasing: 'easeInOut',
            strokeHighlightFadeStartAlternateEasing: 'easeInOut',
            strokeHighlightFadeEndAlternateTiming: 'linear',
            strokeHighlightFadeStartAlternateTiming: 'linear',
            strokeHighlightFadeEndAlternateRepeat: 1,
            strokeHighlightFadeStartAlternateRepeat: 1,
            strokeHighlightFadeEndAlternateYoyo: false,
            strokeHighlightFadeStartAlternateYoyo: false,
            strokeHighlightFadeEndAlternateReverse: false,
            strokeHighlightFadeStartAlternateReverse: false,
            strokeHighlightFadeEndAlternateMirror: false,
            strokeHighlightFadeStartAlternateMirror: false,
            strokeHighlightFadeEndAlternateAlternate: false,
            strokeHighlightFadeStartAlternateAlternate: false,
            strokeHighlightFadeEndAlternateAlternateDelay: 200,
            strokeHighlightFadeStartAlternateAlternateDelay: 200,
            strokeHighlightFadeEndAlternateAlternateDuration: 200,
            strokeHighlightFadeStartAlternateAlternateDuration: 200,
            strokeHighlightFadeEndAlternateAlternateEasing: 'easeInOut',
            strokeHighlightFadeStartAlternateAlternateEasing: 'easeInOut',
            strokeHighlightFadeEndAlternateAlternateTiming: 'linear',
            strokeHighlightFadeStartAlternateAlternateTiming: 'linear',
            strokeHighlightFadeEndAlternateAlternateRepeat: 1,
            strokeHighlightFadeStartAlternateAlternateRepeat: 1,
            strokeHighlightFadeEndAlternateAlternateYoyo: false,
            strokeHighlightFadeStartAlternateAlternateYoyo: false,
            strokeHighlightFadeEndAlternateAlternateReverse: false,
            strokeHighlightFadeStartAlternateAlternateReverse: false,
            strokeHighlightFadeEndAlternateAlternateMirror: false,
            strokeHighlightFadeStartAlternateAlternateMirror: false,
            strokeHighlightFadeEndAlternateAlternateAlternate: false,
            strokeHighlightFadeStartAlternateAlternateAlternate: false
        });

        // Mostrar el área de Hanzi Writer y ocultar el canvas
        hanziWriterTarget.style.display = 'block';
        practiceCanvas.style.display = 'none';
        clearCanvasBtn.style.display = 'none';

        // Agregar botones de control
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'writing-controls';
        controlsDiv.innerHTML = `
            <button class="show-strokes-btn">Mostrar Trazos</button>
            <button class="hide-strokes-btn">Ocultar Trazos</button>
            <button class="animate-strokes-btn">Animar Trazos</button>
            <button class="clear-strokes-btn">Borrar Trazos</button>
            <button class="start-quiz-btn">Iniciar Práctica</button>
        `;
        hanziWriterTarget.parentNode.insertBefore(controlsDiv, hanziWriterTarget.nextSibling);

        // Event listeners para los botones
        controlsDiv.querySelector('.show-strokes-btn').onclick = () => {
            writer.showOutline();
            writer.showCharacter();
        };
        controlsDiv.querySelector('.hide-strokes-btn').onclick = () => {
            writer.hideOutline();
            writer.hideCharacter();
        };
        controlsDiv.querySelector('.animate-strokes-btn').onclick = () => {
            writer.animateCharacter();
        };
        controlsDiv.querySelector('.clear-strokes-btn').onclick = () => {
            writer.reset();
        };
        controlsDiv.querySelector('.start-quiz-btn').onclick = () => {
            writer.quiz({
                onComplete: (summaryData) => {
                    console.log('¡Completado!', summaryData);
                    // Mostrar mensaje de éxito
                    const feedback = document.createElement('div');
                    feedback.className = 'quiz-feedback';
                    feedback.textContent = '¡Excelente! Has completado el carácter correctamente.';
                    feedback.style.color = '#4CAF50';
                    feedback.style.marginTop = '10px';
                    hanziWriterTarget.parentNode.insertBefore(feedback, controlsDiv);
                    
                    // Ocultar el feedback después de 3 segundos
                    setTimeout(() => {
                        feedback.remove();
                    }, 3000);
                },
                onMistake: (strokeData) => {
                    console.log('Error en el trazo', strokeData);
                    // Mostrar mensaje de error
                    const feedback = document.createElement('div');
                    feedback.className = 'quiz-feedback';
                    feedback.textContent = 'Intenta de nuevo. Recuerda el orden de los trazos.';
                    feedback.style.color = '#f44336';
                    feedback.style.marginTop = '10px';
                    hanziWriterTarget.parentNode.insertBefore(feedback, controlsDiv);
                    
                    // Ocultar el feedback después de 2 segundos
                    setTimeout(() => {
                        feedback.remove();
                    }, 2000);
                }
            });
        };

        // Guardar la referencia al writer actual
        currentWriter = writer;
    }

    // Funciones para el canvas básico
    function startDrawing(e) { isDrawing = true; draw(e); }
    function stopDrawing() { isDrawing = false; ctx.beginPath(); }
    function draw(e) {
        if (!isDrawing) return;
        const rect = practiceCanvas.getBoundingClientRect();
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#333';

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function drawPlaceholder(character) {
        ctx.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
        ctx.font = 'bold 100px sans-serif';
        ctx.fillStyle = '#ddd';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(character, practiceCanvas.width / 2, practiceCanvas.height / 2);
        ctx.font = '14px sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText('Dibuja encima', practiceCanvas.width / 2, practiceCanvas.height - 20);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
    }

    // Event Listeners para el canvas
    practiceCanvas.addEventListener('mousedown', startDrawing);
    practiceCanvas.addEventListener('mouseup', stopDrawing);
    practiceCanvas.addEventListener('mouseout', stopDrawing);
    practiceCanvas.addEventListener('mousemove', draw);
    clearCanvasBtn.addEventListener('click', clearCanvas);

    // --- QUIZ LOGIC ---
    const quizArea = document.getElementById('quiz-area');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizAnswerInput = document.getElementById('quiz-answer');
    const quizSubmitBtn = document.getElementById('submit-quiz-answer');
    const quizFeedbackEl = document.getElementById('quiz-feedback');
    const quizNextBtn = document.getElementById('next-quiz-question');
    const quizResultsEl = document.getElementById('quiz-results');
    const quizScoreEl = document.getElementById('quiz-score');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    let quizRadicals = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentQuestionData = {};

    function startQuiz(numQuestions) {
        score = 0;
        currentQuestionIndex = 0;
        const shuffled = radicalsData.sort(() => 0.5 - Math.random());
        quizRadicals = shuffled.slice(0, numQuestions);

        quizResultsEl.style.display = 'none';
        quizArea.style.display = 'block';
        quizFeedbackEl.textContent = '';
        quizNextBtn.style.display = 'none';
        quizSubmitBtn.style.display = 'inline-block';
        quizAnswerInput.disabled = false;

        showNextQuestion();
        quizModal.style.display = 'block';
    }

    function showNextQuestion() {
        if (currentQuestionIndex >= quizRadicals.length) {
            showQuizResults();
            return;
        }

        currentQuestionData = quizRadicals[currentQuestionIndex];
        const questionType = Math.random() < 0.5 ? 'meaning' : 'pinyin';

        let questionText = '';
        if (questionType === 'meaning') {
            questionText = `¿Cuál es el <strong>significado</strong> de <span class="radical-char-quiz">${currentQuestionData.radical}</span>?`;
            currentQuestionData.correctAnswer = currentQuestionData.meaning.toLowerCase();
            currentQuestionData.answerType = 'meaning';
        } else {
            questionText = `¿Cuál es el <strong>Pinyin</strong> de <span class="radical-char-quiz">${currentQuestionData.radical}</span> (${currentQuestionData.meaning})?`;
            currentQuestionData.correctAnswer = currentQuestionData.pinyin.split('/')[0].toLowerCase();
            currentQuestionData.answerType = 'pinyin';
        }

        quizQuestionEl.innerHTML = `Pregunta ${currentQuestionIndex + 1}/${quizRadicals.length}:<br>${questionText}`;
        quizAnswerInput.value = '';
        quizFeedbackEl.textContent = '';
        quizAnswerInput.focus();
        quizSubmitBtn.style.display = 'inline-block';
        quizNextBtn.style.display = 'none';
        quizAnswerInput.disabled = false;

        generateMultipleChoice();
    }

    function generateMultipleChoice() {
        let optionsContainer = document.getElementById('quiz-options');
        if (!optionsContainer) {
            optionsContainer = document.createElement('div');
            optionsContainer.id = 'quiz-options';
            optionsContainer.className = 'quiz-options';
            quizQuestionEl.parentNode.insertBefore(optionsContainer, quizAnswerInput);
        }

        optionsContainer.innerHTML = '';

        let options = [];
        if (currentQuestionData.answerType === 'pinyin') {
            const otherRadicals = radicalsData
                .filter(r => r.radical !== currentQuestionData.radical)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2);
            
            options = [
                currentQuestionData.pinyin.split('/')[0],
                ...otherRadicals.map(r => r.pinyin.split('/')[0])
            ];
        } else {
            const otherRadicals = radicalsData
                .filter(r => r.radical !== currentQuestionData.radical)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2);
            
            options = [
                currentQuestionData.meaning,
                ...otherRadicals.map(r => r.meaning)
            ];
        }

        options = options.sort(() => 0.5 - Math.random());

        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = option;
            button.onclick = () => handleOptionClick(button, option);
            optionsContainer.appendChild(button);
        });
    }

    function handleOptionClick(button, selectedOption) {
        const isCorrect = selectedOption.toLowerCase() === currentQuestionData.correctAnswer.toLowerCase();
        
        if (isCorrect) {
            button.classList.add('correct');
            score++;
            quizFeedbackEl.textContent = '¡Correcto!';
            quizFeedbackEl.className = 'correct';
            disableAllOptions();
            showNextQuestionAfterDelay();
        } else {
            button.classList.add('incorrect');
            button.disabled = true;
            
            const incorrectOptions = document.querySelectorAll('.quiz-option.incorrect');
            if (incorrectOptions.length === 1) {
                quizFeedbackEl.textContent = 'Incorrecto. Intenta con otra opción.';
                quizFeedbackEl.className = 'incorrect';
            } else {
                quizFeedbackEl.textContent = `Incorrecto. La respuesta era: ${currentQuestionData.correctAnswer}`;
                quizFeedbackEl.className = 'incorrect';
                disableAllOptions();
                showNextQuestionAfterDelay();
            }
        }
    }

    function disableAllOptions() {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.disabled = true;
            if (option.textContent.toLowerCase() === currentQuestionData.correctAnswer.toLowerCase()) {
                option.classList.add('correct');
            }
        });
    }

    function showNextQuestionAfterDelay() {
        setTimeout(() => {
            currentQuestionIndex++;
            showNextQuestion();
        }, 1500);
    }

    function showQuizResults() {
        quizArea.style.display = 'none';
        quizResultsEl.style.display = 'block';
        quizScoreEl.textContent = `Resultado Final: ${score} de ${quizRadicals.length} correctas (${Math.round((score / quizRadicals.length) * 100)}%).`;
    }

    // Event listeners for Quiz
    quizSubmitBtn.onclick = () => {
        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        checkAnswer(userAnswer);
    };
    
    quizAnswerInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const userAnswer = quizAnswerInput.value.trim().toLowerCase();
            checkAnswer(userAnswer);
        }
    });

    function checkAnswer(userAnswer) {
        let isCorrect = false;

        const correctAnswers = currentQuestionData.correctAnswer.split('/').map(ans => ans.trim());
        if (correctAnswers.includes(userAnswer)) {
            isCorrect = true;
        }
        if (currentQuestionData.answerType === 'meaning') {
            const meaningParts = currentQuestionData.meaning.toLowerCase().split(/,|\//).map(p => p.trim());
            if (meaningParts.includes(userAnswer)) {
                isCorrect = true;
            }
        }

        quizAnswerInput.disabled = true;
        quizSubmitBtn.style.display = 'none';
        quizNextBtn.style.display = 'inline-block';

        if (isCorrect) {
            score++;
            quizFeedbackEl.textContent = '¡Correcto!';
            quizFeedbackEl.className = 'correct';
        } else {
            quizFeedbackEl.textContent = `Incorrecto. La respuesta era: ${currentQuestionData.correctAnswer}`;
            quizFeedbackEl.className = 'incorrect';
        }
    }

    quizNextBtn.onclick = () => {
        currentQuestionIndex++;
        showNextQuestion();
    };

    restartQuizBtn.onclick = () => {
        quizModal.style.display = 'none';
    };

    // Event Listeners para el quiz
    startQuizBtn.onclick = () => quizConfigModal.style.display = 'block';
    startQuizSessionBtn.onclick = () => {
        const count = parseInt(quizCountInput.value);
        if (count > 0 && count <= radicalsData.length) {
            quizConfigModal.style.display = 'none';
            startQuiz(count);
        } else {
            alert(`Por favor, introduce un número entre 1 y ${radicalsData.length}.`);
        }
    };

    // --- INITIALIZATION ---
    renderRadicals();

}); // End DOMContentLoaded