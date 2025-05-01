document.addEventListener('DOMContentLoaded', () => {
    const radicalListContainer = document.getElementById('radical-list-container');
    const writingModal = document.getElementById('writing-modal');
    const quizModal = document.getElementById('quiz-modal');
    const closeWritingBtn = document.getElementById('close-writing-modal');
    const closeQuizBtn = document.getElementById('close-quiz-modal');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizCountInput = document.getElementById('quiz-count');

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
    closeWritingBtn.onclick = () => writingModal.style.display = 'none';
    closeQuizBtn.onclick = () => quizModal.style.display = 'none';
    window.onclick = (event) => { // Close if clicked outside modal
        if (event.target == writingModal) writingModal.style.display = 'none';
        if (event.target == quizModal) quizModal.style.display = 'none';
    };

    // Quiz Start Button
    startQuizBtn.onclick = () => {
        const count = parseInt(quizCountInput.value);
        if (count > 0 && count <= radicalsData.length) {
            startQuiz(count);
        } else {
            alert(`Por favor, introduce un número entre 1 y ${radicalsData.length}.`);
        }
    };

    // --- PRONUNCIATION ---
    function speak(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN'; // Set language to Chinese
            // Opcional: buscar y seleccionar una voz específica si está disponible
            // const voices = window.speechSynthesis.getVoices();
            // utterance.voice = voices.find(voice => voice.lang === 'zh-CN');
            window.speechSynthesis.cancel(); // Cancel previous speech
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
    const hanziWriterTarget = document.getElementById('hanzi-writer-target'); // Div para Hanzi Writer
    let isDrawing = false;
    let currentWriter = null; // Variable para la instancia de Hanzi Writer

    function openWritingPractice(radicalData) {
        writingRadicalInfo.textContent = `Practicando: ${radicalData.radical} (${radicalData.pinyin}) - ${radicalData.meaning}`;
        writingModal.style.display = 'block';
        clearCanvas(); // Clear previous drawings

        // --- Integración con Hanzi Writer (SI SE USA) ---
        // Descomenta esta sección y asegúrate de haber cargado la librería Hanzi Writer

        /*
        hanziWriterTarget.innerHTML = ''; // Clear previous character
        if (currentWriter) {
             // No hay un método destroy directo fácil, reemplazar el target funciona
        }
        if (typeof HanziWriter !== 'undefined') {
            hanziWriterTarget.style.display = 'block'; // Muestra el div de HanziWriter
            practiceCanvas.style.display = 'none';   // Oculta el canvas básico
            clearCanvasBtn.style.display = 'none'; // Oculta el botón de borrar canvas

            currentWriter = HanziWriter.create(hanziWriterTarget, radicalData.radical, {
                width: 200,
                height: 200,
                padding: 5,
                showOutline: true,
                showCharacter: true,
                strokeAnimationSpeed: 1,
                delayBetweenStrokes: 200,
                // Añade botones de control si quieres (animar, quitar, etc.)
                 showControls: true, // Muestra botones básicos de Hanzi Writer
                 radicalColor: '#168F16' // Color para el radical si es parte de un caracter más complejo
            });
             // Añade botones personalizados si es necesario
             // const animateButton = document.createElement('button');
             // animateButton.textContent = 'Animar Trazos';
             // animateButton.onclick = () => currentWriter.animateCharacter();
             // hanziWriterTarget.parentNode.insertBefore(animateButton, hanziWriterTarget.nextSibling);

        } else {
             console.warn("Hanzi Writer library not loaded. Showing basic canvas.");
             hanziWriterTarget.style.display = 'none'; // Oculta el div
             practiceCanvas.style.display = 'block';  // Muestra el canvas
             clearCanvasBtn.style.display = 'inline-block'; // Muestra el botón
             drawPlaceholder(radicalData.radical); // Dibuja el placeholder en el canvas básico
        }
        */

        // --- SI NO SE USA Hanzi Writer (Mostrar canvas básico) ---
         hanziWriterTarget.style.display = 'none';
         practiceCanvas.style.display = 'block';
         clearCanvasBtn.style.display = 'inline-block';
         drawPlaceholder(radicalData.radical);
        // --- Fin sección sin Hanzi Writer ---
    }

    // Funciones para el canvas básico (si no usas Hanzi Writer)
    function startDrawing(e) { isDrawing = true; draw(e); }
    function stopDrawing() { isDrawing = false; ctx.beginPath(); }
    function draw(e) {
        if (!isDrawing) return;
        const rect = practiceCanvas.getBoundingClientRect();
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#333';

        // Ajustar coordenadas al canvas (considerando offset y scroll)
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
     function drawPlaceholder(character) {
        ctx.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
        ctx.font = 'bold 100px sans-serif'; // Letra grande para el caracter
        ctx.fillStyle = '#ddd'; // Color gris claro para el fondo
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(character, practiceCanvas.width / 2, practiceCanvas.height / 2);
         // Añadir texto de ayuda
        ctx.font = '14px sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText('Dibuja encima', practiceCanvas.width / 2, practiceCanvas.height - 20);
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
         // Redibujar placeholder si aplica (necesitaría saber el caracter actual)
        // Si usas el placeholder, llama a drawPlaceholder() de nuevo aquí con el caracter activo.
    }

    // Event Listeners para el canvas básico
    practiceCanvas.addEventListener('mousedown', startDrawing);
    practiceCanvas.addEventListener('mouseup', stopDrawing);
    practiceCanvas.addEventListener('mouseout', stopDrawing); // Stop drawing if mouse leaves canvas
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
        // Select N random unique radicals
        const shuffled = radicalsData.sort(() => 0.5 - Math.random());
        quizRadicals = shuffled.slice(0, numQuestions);

        quizResultsEl.style.display = 'none'; // Hide results
        quizArea.style.display = 'block';    // Show questions area
        quizFeedbackEl.textContent = '';
        quizNextBtn.style.display = 'none';
        quizSubmitBtn.style.display = 'inline-block';
        quizAnswerInput.disabled = false;

        showNextQuestion();
        quizModal.style.display = 'block'; // Show the quiz modal
    }

    function showNextQuestion() {
        if (currentQuestionIndex >= quizRadicals.length) {
            showQuizResults();
            return;
        }

        currentQuestionData = quizRadicals[currentQuestionIndex];
        const questionType = Math.random() < 0.5 ? 'meaning' : 'pinyin'; // 50% chance for each type

        let questionText = '';
        if (questionType === 'meaning') {
            questionText = `¿Cuál es el significado de <span class="radical-char-quiz">${currentQuestionData.radical}</span>?`;
            currentQuestionData.correctAnswer = currentQuestionData.meaning.toLowerCase();
            currentQuestionData.answerType = 'meaning';
        } else {
            questionText = `¿Cuál es el Pinyin de <span class="radical-char-quiz">${currentQuestionData.radical}</span>?`;
            // Pinyin puede tener múltiples, tomar el primero o el más común
            currentQuestionData.correctAnswer = currentQuestionData.pinyin.split('/')[0].toLowerCase();
             currentQuestionData.answerType = 'pinyin';
        }

        quizQuestionEl.innerHTML = `Pregunta ${currentQuestionIndex + 1}/${quizRadicals.length}: ${questionText}`;
        quizAnswerInput.value = '';
        quizFeedbackEl.textContent = '';
        quizAnswerInput.focus();
        quizSubmitBtn.style.display = 'inline-block';
        quizNextBtn.style.display = 'none';
        quizAnswerInput.disabled = false;
    }

    function checkAnswer() {
        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        let isCorrect = false;

        // Allow for some flexibility in answers (e.g., multiple meanings/pinyin)
        const correctAnswers = currentQuestionData.correctAnswer.split('/').map(ans => ans.trim());
        if (correctAnswers.includes(userAnswer)) {
             isCorrect = true;
        }
        // Acepta también significados separados por coma si los hubiera
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

    function showQuizResults() {
        quizArea.style.display = 'none';
        quizResultsEl.style.display = 'block';
        quizScoreEl.textContent = `Resultado Final: ${score} de ${quizRadicals.length} correctas (${Math.round((score / quizRadicals.length) * 100)}%).`;
    }

    // Event listeners for Quiz
    quizSubmitBtn.onclick = checkAnswer;
    quizAnswerInput.addEventListener('keypress', function (e) { // Allow Enter key to submit
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    quizNextBtn.onclick = () => {
        currentQuestionIndex++;
        showNextQuestion();
    };
    restartQuizBtn.onclick = () => {
        quizModal.style.display = 'none'; // Close modal or restart directly
        // Or call startQuiz again if you want immediate restart
        // const count = parseInt(quizCountInput.value);
        // startQuiz(count);
    };


    // --- INITIALIZATION ---
    renderRadicals();

}); // End DOMContentLoaded