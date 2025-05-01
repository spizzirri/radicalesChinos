// radical_data.js
// Contiene el array con los 214 radicales chinos Kangxi, basados en el informe proporcionado.

const radicalsData = [
    { id: 1, radical: "一", variants: [], pinyin: "yī", meaning: "Uno", examples: "丁 万 上 下" },
    { id: 2, radical: "丨", variants: [], pinyin: "shù/gǔn", meaning: "Línea", examples: "个 中 丰 串 临" },
    { id: 3, radical: "丶", variants: [], pinyin: "diǎn/zhǔ", meaning: "Punto", examples: "丸 义 丹 为 主" },
    { id: 4, radical: "丿", variants: ["乀", "⺄", "乁"], pinyin: "piě", meaning: "Cortada, Barra", examples: "乂 乃 久 乇 乎" }, // Incluyendo 乁 como variante listada
    { id: 5, radical: "乙", variants: ["乚", "乛"], pinyin: "yǐ", meaning: "Dos, Segundo", examples: "九 乞 乩 乱" },
    { id: 6, radical: "亅", variants: [], pinyin: "gōu/jué", meaning: "Gancho", examples: "了 争 事" },
    { id: 7, radical: "二", variants: [], pinyin: "èr", meaning: "Dos", examples: "亍 于 云 五 亚" },
    { id: 8, radical: "亠", variants: [], pinyin: "tóu", meaning: "Tapa", examples: "亡 亢 交 产 京" },
    { id: 9, radical: "人", variants: ["亻"], pinyin: "rén", meaning: "Persona", examples: "你 他 仕 仙 例" },
    { id: 10, radical: "儿", variants: [], pinyin: "ér/rén", meaning: "Piernas, Patas", examples: "兀 元 兄 先 克" }, // Combinando pinyin
    { id: 11, radical: "入", variants: [], pinyin: "rù", meaning: "Entrar, Entrar en", examples: "內 全 氽" },
    { id: 12, radical: "八", variants: ["丷"], pinyin: "bā", meaning: "Ocho", examples: "兮 公 兰 关 兴" },
    { id: 13, radical: "冂", variants: [], pinyin: "jiǒng", meaning: "Caja bocabajo, Caja Abajo", examples: "内 冋 再 冏 最" },
    { id: 14, radical: "冖", variants: [], pinyin: "mì", meaning: "Cubierta, Tapa", examples: "写 军 农" },
    { id: 15, radical: "冫", variants: [], pinyin: "bīng", meaning: "Hielo", examples: "冰 况 冼 凊" },
    { id: 16, radical: "几", variants: [], pinyin: "jī/jǐ", meaning: "Tabla, Mesa", examples: "凡 凤" }, // Combinando pinyin
    { id: 17, radical: "凵", variants: [], pinyin: "qiǎn", meaning: "Caja abierta", examples: "凶 凸 凹 出 击" },
    { id: 18, radical: "刀", variants: ["⺈", "刂", "刁"], pinyin: "dāo", meaning: "Cuchillo", examples: "刅 分 切 划 刚" }, // Incluyendo 刁 como variante listada
    { id: 19, radical: "力", variants: [], pinyin: "lì", meaning: "Poder, Potencia", examples: "劝 办 加 务 动" },
    { id: 20, radical: "勹", variants: [], pinyin: "bāo", meaning: "Envolver", examples: "勺 勾 匀 包" },
    { id: 21, radical: "匕", variants: [], pinyin: "bǐ", meaning: "Cucharón, Cuchara/Daga", examples: "化 北 匙" },
    { id: 22, radical: "匚", variants: [], pinyin: "fāng/xǐ", meaning: "Caja abierta a la derecha, Caja abierta derecha", examples: "匛 匤 匡 匢 匜" },
    { id: 23, radical: "匸", variants: [], pinyin: "xǐ", meaning: "Escondite, Caja oculta", examples: "匹 区 医 匼" }, // Notado en fuente como raro/obsoleto
    { id: 24, radical: "十", variants: [], pinyin: "shí", meaning: "Diez", examples: "千 升 午 半" },
    { id: 25, radical: "卜", variants: [], pinyin: "bǔ", meaning: "Adivinación", examples: "卟 占 卡 卢 卤" },
    { id: 26, radical: "卩", variants: ["㔾"], pinyin: "jié", meaning: "Sello, Sello/Junta", examples: "卫 卬 卯 印 却" },
    { id: 27, radical: "厂", variants: [], pinyin: "hǎn", meaning: "Precipicio, Acantilado/Casa", examples: "厄 厅 历 厉" },
    { id: 28, radical: "厶", variants: [], pinyin: "sī/mǒu", meaning: "Privado", examples: "去 县 参" }, // Combinando pinyin si/mǒu/sī -> sī/mǒu
    { id: 29, radical: "又", variants: [], pinyin: "yòu", meaning: "Otra vez, De nuevo", examples: "叉 友 双 发 受" },
    { id: 30, radical: "口", variants: [], pinyin: "kǒu", meaning: "Boca", examples: "吃 叹 品 吵 叫" },
    { id: 31, radical: "囗", variants: [], pinyin: "wéi", meaning: "Cercado, Recinto", examples: "围 团 国 囚 困" },
    { id: 32, radical: "土", variants: [], pinyin: "tǔ", meaning: "Tierra", examples: "在 地 城 地 型" },
    { id: 33, radical: "士", variants: [], pinyin: "shì", meaning: "Escolar, Erudito", examples: "壮 仕 壬 声 志" },
    { id: 34, radical: "夂", variants: [], pinyin: "zhī/zhǐ", meaning: "Ir", examples: "处 复 备 冬" }, // Combinando pinyin
    { id: 35, radical: "夊", variants: [], pinyin: "suī", meaning: "Ir despacio", examples: "夌 复 変" },
    { id: 36, radical: "夕", variants: [], pinyin: "xī", meaning: "Noche", examples: "外 多 夜 夠" },
    { id: 37, radical: "大", variants: [], pinyin: "dà", meaning: "Grande", examples: "天 太 夫 央 头" },
    { id: 38, radical: "女", variants: [], pinyin: "nǚ", meaning: "Mujer", examples: "妈 好 始 姓 安" },
    { id: 39, radical: "子", variants: [], pinyin: "zǐ", meaning: "Niño", examples: "孔 字 季 学 孩" },
    { id: 40, radical: "宀", variants: [], pinyin: "mián", meaning: "Techo", examples: "宁 它 安 定 容" },
    { id: 41, radical: "寸", variants: [], pinyin: "cùn", meaning: "Pulgada", examples: "对 寺 寻 寿 导" },
    { id: 42, radical: "小", variants: ["⺍", "⺌"], pinyin: "xiǎo", meaning: "Pequeño", examples: "少 尔 尚 尝" },
    { id: 43, radical: "尢", variants: [], pinyin: "yóu/wāng", meaning: "Cojo", examples: "尤 尧 就 尴 尬" }, // Combinando pinyin
    { id: 44, radical: "尸", variants: [], pinyin: "shī", meaning: "Cuerpo, Cadáver", examples: "尼 尽 局 居 层" },
    { id: 45, radical: "屮", variants: [], pinyin: "chè", meaning: "Brote", examples: "屯 屰" },
    { id: 46, radical: "山", variants: [], pinyin: "shān", meaning: "Montaña", examples: "岀 峰 岁 岛 岳" },
    { id: 47, radical: "巛", variants: ["川"], pinyin: "chuān", meaning: "Río", examples: "州 巡 巢" },
    { id: 48, radical: "工", variants: [], pinyin: "gōng", meaning: "Trabajo, Trabajar", examples: "左 巧 巩 巫" },
    { id: 49, radical: "己", variants: [], pinyin: "jǐ", meaning: "Uno mismo", examples: "纪 记 忌 改" },
    { id: 50, radical: "巾", variants: [], pinyin: "jīn", meaning: "Toalla", examples: "巿 币 市 师" },
    { id: 51, radical: "干", variants: [], pinyin: "gān/gàn", meaning: "Seco, Secar/Hacer", examples: "平 年 并 幸" },
    { id: 52, radical: "幺", variants: ["么"], pinyin: "yāo", meaning: "Hilo, El más joven", examples: "幻 幼 幽" },
    { id: 53, radical: "广", variants: [], pinyin: "guǎng", meaning: "Refugio", examples: "座 庄 床 店" },
    { id: 54, radical: "廴", variants: [], pinyin: "yǐn", meaning: "Paso, Zancada", examples: "延 廷 建" },
    { id: 55, radical: "廾", variants: [], pinyin: "gǒng", meaning: "Manos juntas, Manos unidas", examples: "开 异 弃 弄" },
    { id: 56, radical: "弋", variants: [], pinyin: "yì", meaning: "Disparar con un arco, Tiro con arco", examples: "式 弑" },
    { id: 57, radical: "弓", variants: [], pinyin: "gōng", meaning: "Flecha, Arco", examples: "弟 引 张 弘 弯" },
    { id: 58, radical: "彐", variants: ["彑"], pinyin: "jì", meaning: "Hocico", examples: "归 当 录 彖" },
    { id: 59, radical: "彡", variants: [], pinyin: "shān", meaning: "Cabello, Barba", examples: "形 彦 彩 影" },
    { id: 60, radical: "彳", variants: [], pinyin: "chì", meaning: "Paso", examples: "行 徐 律 很 往" },
    { id: 61, radical: "心", variants: ["忄", "⺗"], pinyin: "xīn", meaning: "Corazón", examples: "必 忆 忘 忙 快" },
    { id: 62, radical: "戈", variants: [], pinyin: "gē", meaning: "Lanza", examples: "我 成 戒 战 或" },
    { id: 63, radical: "戶", variants: ["户", "戸"], pinyin: "hù", meaning: "Puerta", examples: "房 所 扁 扇 扉" }, //戸 es variante japonesa, 户 es simplificada
    { id: 64, radical: "手", variants: ["扌", "龵"], pinyin: "shǒu", meaning: "Mano", examples: "扔 扬 扛 扱 抱" },
    { id: 65, radical: "支", variants: [], pinyin: "zhī", meaning: "Rama", examples: "攰 攱 攲" },
    { id: 66, radical: "攴", variants: ["攵"], pinyin: "pū", meaning: "Tocar, Rap/Beat", examples: "收 改 政 故 敌" },
    { id: 67, radical: "文", variants: [], pinyin: "wén", meaning: "Manuscrito, Guión", examples: "齐 斌 斑 斓 斋" },
    { id: 68, radical: "斗", variants: [], pinyin: "dǒu", meaning: "Pañal, Recipiente", examples: "料 斛 斟 斜" }, //斗 también significa 'luchar', pero como radical es recipiente
    { id: 69, radical: "斤", variants: [], pinyin: "jīn", meaning: "Hacha", examples: "斧 断 斯 新 斩" },
    { id: 70, radical: "方", variants: [], pinyin: "fāng", meaning: "Cuadrado", examples: "施 旁 旋 旅 旗" },
    { id: 71, radical: "无", variants: ["旡"], pinyin: "wú/jì", meaning: "No, No/Chupar algo comido", examples: "既" }, // Raro como radical
    { id: 72, radical: "日", variants: [], pinyin: "rì", meaning: "Sol", examples: "时 早 明 是 晩" },
    { id: 73, radical: "曰", variants: [], pinyin: "yuē", meaning: "Decir", examples: "曲 更 曾" },
    { id: 74, radical: "月", variants: [], pinyin: "yuè", meaning: "Luna", examples: "服 朋 青 朝 明" }, // Puede ser carne (肉) a la izquierda
    { id: 75, radical: "木", variants: ["朩"], pinyin: "mù", meaning: "Árbol", examples: "森 林 相 根 本" },
    { id: 76, radical: "欠", variants: [], pinyin: "qiàn", meaning: "Falta de, Falta/Bostezar", examples: "次 欢 欣 歆 欲" },
    { id: 77, radical: "止", variants: [], pinyin: "zhǐ", meaning: "Parar", examples: "正 此 步 武 歧" },
    { id: 78, radical: "歹", variants: ["歺"], pinyin: "dǎi", meaning: "Muerte", examples: "死 歾 殃 殉 殆" },
    { id: 79, radical: "殳", variants: [], pinyin: "shū", meaning: "Weapon, Arma", examples: "段 殷 殴" },
    { id: 80, radical: "毋", variants: ["母"], pinyin: "wú/mǔ", meaning: "Madre, no", examples: "每 毒" }, // 母 listado como variante
    { id: 81, radical: "比", variants: [], pinyin: "bǐ", meaning: "Comparar, Compara", examples: "毕 庇 毙" },
    { id: 82, radical: "毛", variants: [], pinyin: "máo", meaning: "Pelo", examples: "毫 毡 笔 毯 毫" }, // Ejemplo '毫' repetido en fuente
    { id: 83, radical: "氏", variants: [], pinyin: "shì", meaning: "Clan", examples: "民 氓" },
    { id: 84, radical: "气", variants: [], pinyin: "qì", meaning: "Vapor", examples: "氲 氧 氢" },
    { id: 85, radical: "水", variants: ["氵", "氺"], pinyin: "shuǐ", meaning: "Agua", examples: "海 河 湖 江 洗" },
    { id: 86, radical: "火", variants: ["灬"], pinyin: "huǒ", meaning: "Fuego", examples: "灯 炎 热 点 然" },
    { id: 87, radical: "爪", variants: ["爫"], pinyin: "zhǎo/zhuǎ", meaning: "Garra", examples: "爬 爱" }, // Combinando pinyin
    { id: 88, radical: "父", variants: [], pinyin: "fù", meaning: "Padre", examples: "爷 爸" },
    { id: 89, radical: "爻", variants: [], pinyin: "yáo", meaning: "Líneas en un trigrama, Líneas de un trigrama", examples: "爼 爽" },
    { id: 90, radical: "爿", variants: ["丬"], pinyin: "qiáng", meaning: "Medio tronco de árbol, Mitad de un tronco de árbol", examples: "牀" }, // Variante 丬 es común
    { id: 91, radical: "片", variants: [], pinyin: "piàn", meaning: "Rebanar, Rebanada", examples: "版 牌" }, // pinyin qiáng también existe pero menos común para este radical
    { id: 92, radical: "牙", variants: [], pinyin: "yá", meaning: "Diente", examples: "" }, // Fuente no provee ejemplos
    { id: 93, radical: "牛", variants: ["牜", "⺧"], pinyin: "niú", meaning: "Vaca", examples: "牟 牤 牧 物 牲" },
    { id: 94, radical: "犬", variants: ["犭"], pinyin: "quǎn", meaning: "Perro", examples: "犮 犯 犷 狂 狗" },
    { id: 95, radical: "玄", variants: [], pinyin: "xuán", meaning: "Profundo, Oscuro, misterioso", examples: "率 玆" },
    { id: 96, radical: "玉", variants: ["王", "玊"], pinyin: "yù", meaning: "Jade", examples: "珍 现 琴 莹 玺" }, // Variante 王 común a la izquierda, no confundir con rey 王 (wáng)
    { id: 97, radical: "瓜", variants: [], pinyin: "guā", meaning: "Melón", examples: "瓢 瓣" },
    { id: 98, radical: "瓦", variants: [], pinyin: "wǎ", meaning: "Teja", examples: "瓶 瓷 瓮" },
    { id: 99, radical: "甘", variants: [], pinyin: "gān", meaning: "Dulce", examples: "甚 甜 某" },
    { id: 100, radical: "生", variants: [], pinyin: "shēng", meaning: "Vida", examples: "甠 甡 甥" },
    { id: 101, radical: "用", variants: [], pinyin: "yòng", meaning: "Uso, Utiliza", examples: "甬 甭 甫" },
    { id: 102, radical: "田", variants: [], pinyin: "tián", meaning: "Campo", examples: "男 甸 画 畅 界" },
    { id: 103, radical: "疋", variants: ["⺪"], pinyin: "pǐ", meaning: "Paño, Pie", examples: "胥 疍 疏 疎" }, // 𤴔 es una forma rara, ⺪ es variante gráfica
    { id: 104, radical: "疒", variants: [], pinyin: "bìng/nè", meaning: "Enfermo, Enfermedad", examples: "病 疔 疤 疫 疯" }, // Usualmente pinyin 'bìng'
    { id: 105, radical: "癶", variants: [], pinyin: "bō", meaning: "Pasos, Pisada desequilibrada", examples: "癷 癸 登" },
    { id: 106, radical: "白", variants: [], pinyin: "bái", meaning: "Blanco", examples: "百 的 皇 皁 皓" },
    { id: 107, radical: "皮", variants: [], pinyin: "pí", meaning: "Piel", examples: "皱 皲" },
    { id: 108, radical: "皿", variants: [], pinyin: "mǐn", meaning: "Plato", examples: "盂 益 盆 监 盈" },
    { id: 109, radical: "目", variants: ["⺫"], pinyin: "mù", meaning: "Ojo", examples: "盯 相 盲 看 眠" },
    { id: 110, radical: "矛", variants: [], pinyin: "máo", meaning: "Lanza", examples: "矜 䂊" },
    { id: 111, radical: "矢", variants: [], pinyin: "shǐ", meaning: "Flecha", examples: "矣 知 矩 矫 矬" },
    { id: 112, radical: "石", variants: [], pinyin: "shí", meaning: "Piedra", examples: "码 破 硌 硏 硬" },
    { id: 113, radical: "示", variants: ["礻"], pinyin: "shì", meaning: "Espíritu, Mostrar", examples: "礼 社 视 禁 祭" },
    { id: 114, radical: "禸", variants: ["⽱"], pinyin: "róu", meaning: "Camino, Frotar", examples: "禹 禺 离" }, // Radical raro
    { id: 115, radical: "禾", variants: [], pinyin: "hé", meaning: "Grano", examples: "秀 秋 种 秒 租" },
    { id: 116, radical: "穴", variants: [], pinyin: "xuè", meaning: "Cueva", examples: "穷 究 空 穿 突" },
    { id: 117, radical: "立", variants: [], pinyin: "lì", meaning: "Estar parado, Stand", examples: "站 竞 章 竖 端" },
    { id: 118, radical: "竹", variants: ["⺮", "ケ"], pinyin: "zhú", meaning: "Bambú", examples: "笑 笛 第 竿 等" }, // ケ es más una forma japonesa/simplificada
    { id: 119, radical: "米", variants: [], pinyin: "mǐ", meaning: "Arroz", examples: "粮 类 粉 粤 籽" },
    { id: 120, radical: "糸", variants: ["糹", "纟"], pinyin: "sī", meaning: "Seda", examples: "红 纪 组 系 紧" }, // 纟 es la forma simplificada común
    { id: 121, radical: "缶", variants: [], pinyin: "fǒu", meaning: "Jarro, Jarra", examples: "缺 缸 罂" },
    { id: 122, radical: "网", variants: ["罓", "⺳", "罒"], pinyin: "wǎng", meaning: "Red", examples: "罗 罚 罢 罪" }, // 罒 es la forma común en la parte superior
    { id: 123, radical: "羊", variants: ["⺶", "⺷"], pinyin: "yáng", meaning: "Borrego, Oveja", examples: "美 着 羞 群 羚" }, // Variantes comunes en la parte superior
    { id: 124, radical: "羽", variants: [], pinyin: "yǔ", meaning: "Pluma", examples: "翠 翁 耀 翔" },
    { id: 125, radical: "老", variants: ["耂"], pinyin: "lǎo", meaning: "Viejo", examples: "者 耄 者 考" }, // Ejemplo '者' repetido en fuente
    { id: 126, radical: "而", variants: [], pinyin: "ér", meaning: "Y", examples: "耍 耐" },
    { id: 127, radical: "耒", variants: [], pinyin: "lěi", meaning: "Arar, Pluma", examples: "耔 耗 耕 耘" },
    { id: 128, radical: "耳", variants: [], pinyin: "ěr", meaning: "Oreja", examples: "聊 聆 聒 联 耿" },
    { id: 129, radical: "聿", variants: ["⺺", "⺻"], pinyin: "yù", meaning: "Cepillo", examples: "肃 肆 肄 肇" }, // Radical raro
    { id: 130, radical: "肉", variants: ["⺼", "月"], pinyin: "ròu", meaning: "Carne", examples: "肖 肘 肚 腐" }, // Variante 月 (cuando significa carne, usualmente a la izq.)
    { id: 131, radical: "臣", variants: [], pinyin: "chén", meaning: "Ministro", examples: "卧 藏" },
    { id: 132, radical: "自", variants: [], pinyin: "zì", meaning: "Uno mismo", examples: "臬 臭" },
    { id: 133, radical: "至", variants: [], pinyin: "zhì", meaning: "Llegar", examples: "致 臻" },
    { id: 134, radical: "臼", variants: [], pinyin: "jiù", meaning: "Mortero", examples: "臾 舀 舂" },
    { id: 135, radical: "舌", variants: [], pinyin: "shé", meaning: "Lengua", examples: "舍 舐 舔" },
    { id: 136, radical: "舛", variants: [], pinyin: "chuǎn", meaning: "Contrario, Opuesto", examples: "舜" }, // Raro
    { id: 137, radical: "舟", variants: [], pinyin: "zhōu", meaning: "Barco", examples: "航 船 般 舱 舫" },
    { id: 138, radical: "艮", variants: [], pinyin: "gèn", meaning: "Montaña, Quietud", examples: "良 艰 根 跟" },
    { id: 139, radical: "色", variants: [], pinyin: "sè", meaning: "Color", examples: "艳" },
    { id: 140, radical: "艸", variants: ["艹", "⺿"], pinyin: "cǎo", meaning: "Pasto, Hierba", examples: "花 菜 茶 茬 草" }, // 艹 es la forma común en la parte superior
    { id: 141, radical: "虍", variants: [], pinyin: "hū/hǔ", meaning: "Tigre, Rayas en un tigre", examples: "虏 虎 虐 虔 虑" },
    { id: 142, radical: "虫", variants: [], pinyin: "chóng", meaning: "Insecto", examples: "蛇 蚊 蛋 蚤 蚀" },
    { id: 143, radical: "血", variants: [], pinyin: "xuě", meaning: "Sangre", examples: "恤 衅" },
    { id: 144, radical: "行", variants: [], pinyin: "xíng", meaning: "Caminar, Ir/Hacer", examples: "衍 衔 街" },
    { id: 145, radical: "衣", variants: ["⻂", "衤"], pinyin: "yī", meaning: "Ropa", examples: "表 袋 袓 衷 袄" }, // 衤 es la forma común a la izquierda
    { id: 146, radical: "襾", variants: ["西", "覀"], pinyin: "yà/xī", meaning: "Oeste, Tapa", examples: "要 覆 覃" }, // 覀 es la forma común en la parte superior
    { id: 147, radical: "見", variants: ["见"], pinyin: "jiàn", meaning: "Ver", examples: "观 规 觉 览" }, // 見 es tradicional, 见 es simplificado
    { id: 148, radical: "角", variants: ["⻇"], pinyin: "jiǎo", meaning: "Cuerno", examples: "解 触" },
    { id: 149, radical: "言", variants: ["讠"], pinyin: "yán", meaning: "Hablar", examples: "计 讨 记 讲 识" }, // 讠 es la forma simplificada común a la izquierda
    { id: 150, radical: "谷", variants: [], pinyin: "gǔ", meaning: "Valle", examples: "豁" },
    { id: 151, radical: "豆", variants: [], pinyin: "dòu", meaning: "Frijol, Alubia", examples: "豌 豉" },
    { id: 152, radical: "豕", variants: [], pinyin: "shǐ", meaning: "Cerdo", examples: "豚 豪 象" },
    { id: 153, radical: "豸", variants: [], pinyin: "zhì", meaning: "Tejón", examples: "豹 豺 貌" },
    { id: 154, radical: "貝", variants: ["贝"], pinyin: "bèi", meaning: "Caparazón, Concha", examples: "贞 负 贡 责 财" }, // 貝 es tradicional, 贝 es simplificado
    { id: 155, radical: "赤", variants: [], pinyin: "chì", meaning: "Rojo", examples: "赦 赫" },
    { id: 156, radical: "走", variants: [], pinyin: "zǒu", meaning: "Caminar, Camina", examples: "赶 起 超 越" },
    { id: 157, radical: "足", variants: ["⻊"], pinyin: "zú", meaning: "Pie", examples: "跃 跑 路 跳" }, // ⻊ es la forma común a la izquierda
    { id: 158, radical: "身", variants: [], pinyin: "shēn", meaning: "Cuerpo", examples: "躬 躺 躲" },
    { id: 159, radical: "車", variants: ["车"], pinyin: "chē", meaning: "Carro, Coche", examples: "轧 轨 软 轮 轻" }, // 車 es tradicional, 车 es simplificado
    { id: 160, radical: "辛", variants: [], pinyin: "xīn", meaning: "Amargo", examples: "辜 辣 辞 辟" },
    { id: 161, radical: "辰", variants: [], pinyin: "chén", meaning: "Mañana", examples: "晨 辱 振 震" },
    { id: 162, radical: "辵", variants: ["辶", "⻍", "⻎"], pinyin: "chuò", meaning: "Caminar, Paseo", examples: "边 达 过 运 远" }, // 辶 es la forma común
    { id: 163, radical: "邑", variants: ["阝"], pinyin: "yì", meaning: "Ciudad", examples: "那 邦 邮 郊 邕" }, // Variante 阝 (siempre a la derecha)
    { id: 164, radical: "酉", variants: [], pinyin: "yǒu", meaning: "Vino, Vaso de vino", examples: "酒 酱 酷" },
    { id: 165, radical: "釆", variants: [], pinyin: "biàn", meaning: "Distinguir", examples: "采 釉 释" },
    { id: 166, radical: "里", variants: [], pinyin: "lǐ", meaning: "Pueblo, Pueblo/Unidad de distancia", examples: "重 野 量" },
    { id: 167, radical: "金", variants: ["钅", "釒"], pinyin: "jīn", meaning: "Metal, Oro", examples: "银 钉 钟 钥 鉴" }, // 钅 es la forma simplificada común a la izquierda
    { id: 168, radical: "長", variants: ["镸", "长"], pinyin: "cháng", meaning: "Largo", examples: "张 帐 账" }, // 長 es tradicional, 长 es simplificado
    { id: 169, radical: "門", variants: ["门"], pinyin: "mén", meaning: "Puerta", examples: "间 闪 闯 闭 闹" }, // 門 es tradicional, 门 es simplificado
    { id: 170, radical: "阜", variants: ["阝"], pinyin: "fù", meaning: "Montículo", examples: "陡 陆 防 际 队" }, // Variante 阝 (siempre a la izquierda)
    { id: 171, radical: "隶", variants: [], pinyin: "lì", meaning: "Esclavo", examples: "" }, // Raro como radical independiente
    { id: 172, radical: "隹", variants: [], pinyin: "zhuī", meaning: "Pájaro de cola corta", examples: "难 雀 集 雇" },
    { id: 173, radical: "雨", variants: ["⻗"], pinyin: "yǔ", meaning: "Lluvia", examples: "雪 零 雷 雾" }, // Variante ⻗ común en la parte superior
    { id: 174, radical: "靑", variants: ["青"], pinyin: "qīng", meaning: "Azul, Azul/Verde", examples: "靓 靖 静" }, // 青 es la forma más común
    { id: 175, radical: "非", variants: [], pinyin: "fēi", meaning: "Incorrecto, Equivocado", examples: "靠 靡" },
    { id: 176, radical: "面", variants: ["靣"], pinyin: "miàn", meaning: "Cara", examples: "靥 腼" },
    { id: 177, radical: "革", variants: [], pinyin: "gé", meaning: "Piel, Cuero sin curtir", examples: "靴 鞋" },
    { id: 178, radical: "韋", variants: ["韦"], pinyin: "wěi", meaning: "Piel suave, Cuero curtido", examples: "韧 韩 韫" }, // 韋 es tradicional, 韦 es simplificado
    { id: 179, radical: "韭", variants: [], pinyin: "jiǔ", meaning: "Puerro", examples: "瀣" },
    { id: 180, radical: "音", variants: [], pinyin: "yīn", meaning: "Sonido", examples: "章 竟 歆 韵" },
    { id: 181, radical: "頁", variants: ["页"], pinyin: "yè", meaning: "Página, Hoja", examples: "顶 项 须 顺" }, // 頁 es tradicional, 页 es simplificado
    { id: 182, radical: "風", variants: ["风"], pinyin: "fēng", meaning: "Viento", examples: "飒 飓 飘" }, // 風 es tradicional, 风 es simplificado
    { id: 183, radical: "飛", variants: ["飞"], pinyin: "fēi", meaning: "Volar, Vuela", examples: "" }, // 飛 es tradicional, 飞 es simplificado. Pocos ejemplos donde es radical principal
    { id: 184, radical: "食", variants: ["飠", "饣"], pinyin: "shí", meaning: "Comer", examples: "饥 饮 饱 饰 餐" }, // 饣 es la forma simplificada común a la izquierda
    { id: 185, radical: "首", variants: [], pinyin: "shǒu", meaning: "Cabeza", examples: "馗" },
    { id: 186, radical: "香", variants: [], pinyin: "xiāng", meaning: "Fragante, Fragancia", examples: "馥 馨" },
    { id: 187, radical: "馬", variants: ["马"], pinyin: "mǎ", meaning: "Caballo", examples: "驰 驹 骂 骇 驳" }, // 馬 es tradicional, 马 es simplificado
    { id: 188, radical: "骨", variants: [], pinyin: "gǔ", meaning: "Hueso", examples: "骸 骷 骰" },
    { id: 189, radical: "高", variants: ["髙"], pinyin: "gāo", meaning: "Alto", examples: "髚" }, // 髙 es una variante gráfica
    { id: 190, radical: "髟", variants: [], pinyin: "biāo", meaning: "Pelo largo, Pelo", examples: "髦 鬃 鬓" },
    { id: 191, radical: "鬥", variants: ["斗"], pinyin: "dòu", meaning: "Pelea, Lucha", examples: "鬧 鬦" }, // 鬥 es tradicional, 斗 es simplificado (no confundir con radical 68 斗 dǒu)
    { id: 192, radical: "鬯", variants: [], pinyin: "chàng", meaning: "Vino sacrificial", examples: "" }, // Raro
    { id: 193, radical: "鬲", variants: [], pinyin: "lì", meaning: "Caldero", examples: "鬳 鬴 鬵 鬷" }, // Raro
    { id: 194, radical: "鬼", variants: [], pinyin: "guǐ", meaning: "Fantasma, Demonio", examples: "魂 魄 魅" },
    { id: 195, radical: "魚", variants: ["鱼"], pinyin: "yú", meaning: "Pescado, Pez/Pescado", examples: "鲜 鲈 鲑" }, // 魚 es tradicional, 鱼 es simplificado
    { id: 196, radical: "鳥", variants: ["鸟"], pinyin: "niǎo", meaning: "Pájaro", examples: "鸡 鸦 鸭" }, // 鳥 es tradicional, 鸟 es simplificado
    { id: 197, radical: "鹵", variants: ["卤"], pinyin: "lǔ", meaning: "Salado, Salmuera", examples: "" }, // 鹵 es tradicional, 卤 es simplificado. Raro como radical
    { id: 198, radical: "鹿", variants: [], pinyin: "lù", meaning: "Venado, Ciervo", examples: "麒 麓 麋" },
    { id: 199, radical: "麥", variants: ["麦"], pinyin: "mài", meaning: "Trigo", examples: "麸" }, // 麥 es tradicional, 麦 es simplificado
    { id: 200, radical: "麻", variants: [], pinyin: "má", meaning: "Cáñamo", examples: "麾 磨 魔" },
    { id: 201, radical: "黄", variants: [], pinyin: "huáng", meaning: "Amarillo", examples: "横 磺 簧" }, // 黃 tradicional tiene la misma forma simplificada
    { id: 202, radical: "黍", variants: [], pinyin: "shǔ", meaning: "Mijo", examples: "黎 黏" }, // Raro
    { id: 203, radical: "黑", variants: [], pinyin: "hēi", meaning: "Negro", examples: "墨 黔 默 黛" },
    { id: 204, radical: "黹", variants: [], pinyin: "zhǐ", meaning: "Bordado", examples: "" }, // Raro
    { id: 205, radical: "黽", variants: ["黾"], pinyin: "mǐn/měng", meaning: "Rana", examples: "鼋" }, // 黽 es tradicional, 黾 es simplificado. Raro
    { id: 206, radical: "鼎", variants: [], pinyin: "dǐng", meaning: "Tripié, Trípode sacrificial", examples: "" }, // Raro como radical
    { id: 207, radical: "鼓", variants: [], pinyin: "gǔ", meaning: "Tambor", examples: "" }, // Raro como radical
    { id: 208, radical: "鼠", variants: [], pinyin: "shǔ", meaning: "Rata", examples: "" }, // Raro como radical
    { id: 209, radical: "鼻", variants: [], pinyin: "bí", meaning: "Nariz", examples: "鼾 齁" },
    { id: 210, radical: "齊", variants: ["斉", "齐"], pinyin: "qí", meaning: "Parejo, Uniforme", examples: "挤 剂 济" }, // 齊 es tradicional, 齐 es simplificado, 斉 es variante
    { id: 211, radical: "齒", variants: ["齿"], pinyin: "chǐ", meaning: "Diente", examples: "龄 龅" }, // 齒 es tradicional, 齿 es simplificado
    { id: 212, radical: "龍", variants: ["龙"], pinyin: "lóng", meaning: "Dragón", examples: "龚 笼 珑" }, // 龍 es tradicional, 龙 es simplificado
    { id: 213, radical: "龜", variants: ["龟"], pinyin: "guī", meaning: "Tortuga", examples: "" }, // 龜 es tradicional, 龟 es simplificado. Raro como radical
    { id: 214, radical: "龠", variants: [], pinyin: "yuè", meaning: "Flauta", examples: "" } // Raro
];

// Puedes copiar este contenido y guardarlo como 'radical_data.js'
// Asegúrate de cargarlo en tu HTML *antes* del script principal ('script.js')
// <script src="radical_data.js"></script>
// <script src="script.js"></script>