"use strict";

/*
  Данные приложения:
  - Список предметов
  - Герой и эмодзи для каждого предмета
  - Наборы фраз для стилизованных ответов "AI-наставника"
*/
const subjects = [
  {
    id: "math",
    name: "Математика",
    emoji: "➗",
    hero: "Математик-маг",
    heroEmoji: "🧙‍♂️",
    heroDescription:
      "Шаг за шагом раскрывает задачи: от «что дано» до ответа — без сухой зубрёжки формул.",
  },
  {
    id: "russian",
    name: "Русский язык",
    emoji: "📚",
    hero: "Хранитель Слова",
    heroEmoji: "🛡️",
    heroDescription:
      "Правила и орфография как квест: корни, окончания и ясные фразы без страха перед ошибкой.",
  },
  {
    id: "english",
    name: "Английский язык",
    emoji: "🇬🇧",
    hero: "Путешественник по языкам",
    heroEmoji: "🧭",
    heroDescription:
      "Слова и короткие диалоги через мини-миссии: говорить увереннее, а не зубрить списки.",
  },
  {
    id: "history",
    name: "История",
    emoji: "🏺",
    hero: "Проводник во времени",
    heroEmoji: "⏳",
    heroDescription:
      "События складываются в цепочку кто — где — когда и зачем, чтобы даты не «плавали».",
  },
  {
    id: "biology",
    name: "Биология",
    emoji: "🧬",
    hero: "Исследователь Жизни",
    heroEmoji: "🔬",
    heroDescription:
      "Клетки, органы и природа — с образами из жизни, чтобы тема стала понятной, а не абстрактной.",
  },
  {
    id: "geography",
    name: "География",
    emoji: "🗺️",
    hero: "Картограф Приключений",
    heroEmoji: "🧭",
    heroDescription:
      "Карты, климат и страны слоями: сравниваем, находим закономерности, без бесконечных списков.",
  },
];

const heroGreetings = {
  math:
    "Привет, я Математик-маг 🧙‍♂️ — рядом, чтобы не спешить и не терять нить. Готовый ответ сразу не выдам: разложим задачу вместе.",
  russian:
    "Я Хранитель Слова 🛡️ — помогу поймать правило без зубрёжки наизусть. Ошибка не приговор: её можно разобрать спокойно.",
  english:
    "Путешественник по языкам 🧭 на связи. Скажу коротко и по-человечески — и чуть потренируем фразу, без стыда за «не так».",
  history:
    "Проводник во времени ⏳ здесь. Даты запоминаются, когда есть история: развернём событие в цепочку «кто — что — почему».",
  biology:
    "Исследователь Жизни 🔬 на месте. Сложные слова разберём на знакомых картинках — как в настоящей лаборатории.",
  geography:
    "Картограф 🗺️ с тобой. Карта перестанет «плавать», если смотреть слой за слоем — я подскажу, с какого начать.",
};

/*
  Короткие ответы в стиле героя (магия, свитки, путешествия, время, лаборатория, карта).
*/
const heroVoices = {
  math: {
    templates: [
      "Давай без спешки: что в условии уже дано, а что нужно найти? Назови двумя короткими фразами — дальше подскажу следующий шаг.",
      "Представь, что в выражении есть «сильные» места: скобки, степени, дроби. С чего логичнее начать разбор — с края или из середины?",
      "Если задача кажется громоздкой, что можно упростить или переписать по-другому, не меняя смысл? Один маленький ход — и станет легче.",
      "Какой вопрос ты бы сам задал себе, если бы объяснял другу? Сформулируй — я помогу отполировать формулировку.",
      "Где именно затык: в цифрах, в словах условия или в том, какой ход сделать первым? Отметь одно словом — развернём дальше.",
    ],
    buffs: [
      "Супер, мысль цепляется за логику — так и держим.",
      "Вижу прогресс: ты сам задаёшь направление.",
      "Почти головоломка сложилась — остался один аккуратный шаг.",
    ],
  },
  russian: {
    templates: [
      "Прочитай фразу вслух, медленно: где ухо «спотыкается»? Это подсказка, где искать корень или окончание.",
      "Выбери одно «колючее» слово из текста — разберём его по частям: корень, приставка, суффикс, что меняется?",
      "Если сомневаешься между двумя вариантами, что общего у правил и чем они отличаются? Одной фразой — без идеального ответа.",
      "Какое правило ты уже знаешь похожее? Сравним: чем эта ситуация похожа и чем другая?",
      "Сформулируй вопрос к самому себе: «Что я хочу проверить в этом предложении?» — и ответь одним словом.",
    ],
    buffs: [
      "Ты цепляешься за смысл слова — это главное.",
      "Звучит аккуратнее уже сейчас, чем в начале.",
      "Ошибка почти поймана — осталось чуть-чуть дожать.",
    ],
  },
  english: {
    templates: [
      "Сначала смысл по-русски одной строкой, потом одна английская фраза — даже короткая. Не гонись за идеалом.",
      "Какую мысль хочешь сказать? Выбери 3–5 слов-опор на английском — я помогу связать их в живую мини-реплику.",
      "Если правило путается, какой пример из жизни его иллюстрирует? Один — и станет спокойнее.",
      "Что ты уже можешь сказать уверенно по теме? Начнём с этого и добавим один новый кирпичик.",
      "Прочитай свою фразу вслух: где «ломается» произношение или порядок слов? Отметь — подправим вместе.",
    ],
    buffs: [
      "Фраза звучит живее — это плюс к уверенности.",
      "Слово село на место — запоминание через смысл работает.",
      "Ты не боишься пробовать форму — так и учатся.",
    ],
  },
  history: {
    templates: [
      "Сожми событие в три слова: кто, что сделал, какой эффект. Потом развернём подробнее, если захочешь.",
      "Если путаются даты, что случилось раньше и что позже в одной цепочке? Нарисуй словами «до — после».",
      "Представь, что ты рассказываешь другу за перекусом: в чём суть эпохи или битвы одним предложением?",
      "Какая причина привела к событию, и что из него выросло? Два коротких звена — и картинка прояснится.",
      "Какой вопрос тебе самому хочется задать истории? Запиши — ответ поищем шагами, без заучивания дат стеной.",
    ],
    buffs: [
      "Связь «причина — следствие» у тебя уже читается.",
      "Ты держишь нить времени — это крутая навыка.",
      "Факт превращается в историю, а не в сухую строчку.",
    ],
  },
  biology: {
    templates: [
      "Кто в этой теме главный герой: клетка, орган, процесс или среда? Одно слово — и пойдём от него.",
      "Приведи пример из жизни, кухни, спорта или питомца, который похож на то, что в учебнике. Аналогии — суперсила.",
      "Что здесь «входит», а что «выходит» или «превращается»? Схема словами — и станет понятнее.",
      "Если термин страшный, как бы ты объяснил его младшему брату или сестре? Одно простое предложение.",
      "Какой один вопрос ты задашь природе про эту тему? Ответ искать будем маленькими шагами.",
    ],
    buffs: [
      "Наблюдательность растёт — это настоящий научный навык.",
      "Ты соединяешь абстракцию с жизнью — так и запоминается.",
      "Гипотеза звучит здраво, давай проверим следующим шагом.",
    ],
  },
  geography: {
    templates: [
      "С чего удобнее смотреть на регион: климат, реки, соседи или рельеф? Выбери один слой — развернём его.",
      "Сравни два места одним предложением: чем похожи и чем отличаются? Без оценок «лучше — хуже».",
      "Если бы ты ставил «пин» на карте, что бы подписал одним ярким фактом?",
      "Какой вопрос про карту крутится в голове чаще всего? Сформулируй — разберём по шагам.",
      "Что здесь главное для людей: где живут, чем дышит экономика или чем отличается природа? Выбери нить.",
    ],
    buffs: [
      "Картина в голове складывается — так держать.",
      "Сравнение получилось точным — это сильный приём.",
      "Ты смотришь на карту как на историю, а не на зебру.",
    ],
  },
};

const DAILY_MISSIONS = {
  math: [
    "Сегодняшний мини-квест: одну задачу разобрать в три спокойных шага — без гонки на ответ.",
    "Поймай в условии «якорь»: что дано и что ищут. Напиши двумя короткими фразами.",
    "Представь, что объясняешь задачу другу в переписке: какой первый вопрос ты ему задашь?",
  ],
  russian: [
    "Выбери одно предложение и прочитай вслух: где звучит «не так» — там и подсказка.",
    "Одно слово из домашки разобрать по частям: что за корень и что за окончание?",
    "Сформулируй правило своими словами в одной строке — проверим, не потерялся ли смысл.",
  ],
  english: [
    "Три слова по теме на английском + одна короткая фраза, зачем они тебе сегодня.",
    "Мини-диалог из двух реплик: что сказал бы ты, а что ответил друг?",
    "Одно новое слово — и одно предложение, где оно уместно. Без идеального произношения.",
  ],
  history: [
    "Одно событие: кто, что сделал и что из этого выросло — тремя короткими кусками.",
    "Придумай «заголовок новости» к событию из параграфа — смешно или серьёзно, как хочешь.",
    "Цепочка из двух звеньев: что было причиной и что стало следствием?",
  ],
  biology: [
    "Один «вау»-факт из темы и один бытовой пример, который его поясняет.",
    "Кто здесь главный герой: клетка, орган или процесс? Обоснуй одним предложением.",
    "Объясни соседу за партой на пальцах: что происходит в теме своими словами.",
  ],
  geography: [
    "Мысленно отметь регион и назови один климатический факт и один про людей или природу.",
    "Сравни два места: чем похожи и чем отличаются — без справочника, своими словами.",
    "Найди «соседа» на карте: кто рядом с кем и зачем это важно для темы урока?",
  ],
};

const QUEST_FLARES = [
  "Щёлк — чекпоинт сохранён!",
  "Опыт капает… кап… кап!",
  "Лут сундука: уверенность +1!",
  "Квестовая цепь не рвётся — ты в теме!",
  "Бафф «Упорство» активирован!",
  "Счётчик смелости растёт!",
  "Ты только что заработал +1 к уровню знаний 🚀",
  "Почти получилось — и это уже движение вперёд 👍",
  "Маленькая победа: мозг запомнил паттерн.",
  "Так держать — следующий шаг будет легче.",
  "Я рядом: спрашивай, пока не станет ясно.",
];

const QUICK_PHRASES = ["Объясни проще", "Дай пример", "Дай задание"];

const MENTOR_EMOTIONS = {
  happy: { emoji: "😊", label: "Молодец, так держать!" },
  thinking: { emoji: "🤔", label: "Думаю вместе с тобой…" },
  cheer: { emoji: "👏", label: "Отличный ход!" },
  hint: { emoji: "💡", label: "Лови подсказку!" },
  medal: { emoji: "😄", label: "Медаль — супер!" },
};

const AI_QUOTES_TODAY = [
  "Сегодня мы не ищем лёгкий путь. Мы ищем понятный.",
  "Ошибки — это подсказки, а не наказание.",
  "Я не буду делать домашку за тебя. Но помогу её понять.",
  "Каждый правильный ответ делает тебя сильнее.",
  "Ты можешь больше, чем думаешь.",
  "Сомневаться — нормально. Главное — не останавливаться на сомнении.",
  "Один маленький шаг сегодня важнее идеального ответа завтра.",
  "Вопрос — это не слабость. Это ключ к пониманию.",
  "Учиться можно в своём темпе — быстрее не значит лучше.",
  "Сегодняшняя задача: не угадать, а разобраться.",
  "Если что-то непонятно — это начало квеста, а не тупик.",
  "Твоя смекалка растёт каждый раз, когда ты пробуешь сам.",
  "Правило запоминается, когда ты его проговариваешь своими словами.",
  "Сложное становится простым — по кусочкам, шаг за шагом.",
  "Я рядом, чтобы подсветить путь. Идти по нему — твоя суперсила.",
  "Не бойся ошибиться: ошибка показывает, куда смотреть дальше.",
  "Сегодня хороший день, чтобы понять то, что вчера казалось «невозможным».",
  "Умный ученик не тот, кто всё знает. А тот, кто не сдаётся.",
  "Домашка — не битва. Это тренировка для твоего мозга.",
  "Каждый ответ, который ты нашёл сам, — настоящий трофей.",
  "Спроси «почему?» один раз — и тема станет интереснее.",
  "Ты уже молодец: ты здесь и готов учиться.",
  "Понимание важнее скорости. Спешка — друг ошибок.",
  "Сегодня можно начать с самого простого вопроса.",
  "Твоя цель — не идеальная пятёрка, а уверенность в теме.",
  "Даже короткая сессия — шаг вперёд. Шаги складываются в путь.",
  "Если застрял — скажи об этом. Вместе найдём следующий ход.",
  "Учёба как игра: проигрыш — это подсказка, как пройти уровень.",
  "Сегодня AI верит в тебя. Попробуй поверить тоже.",
  "Главное — не сравнивать себя с другими, а сравнивать с собой вчерашним.",
];

const LESSON_MOTIVATIONS = [
  "Ты не сдаёшься — это редкий и ценный навык.",
  "Каждый вопрос открывает следующую дверь. Ты их уже открыл несколько.",
  "Мозг как мышца: сегодня ты её аккуратно нагрузил — так и растёт сила.",
  "Урок закончился, а любопытство можно унести с собой.",
  "Ты шёл своим темпом — это честнее, чем «угадать ответ».",
  "Заметил, как ты формулируешь мысль всё яснее? Это прогресс, не магия.",
  "Ошибка — не провал, а точка на карте: «здесь разберёмся в следующий раз».",
  "Отлично поработал: возьми с собой один инсайт из сессии — этого достаточно.",
];

/*
  Состояние приложения.
  Здесь храним текущий выбор пользователя и прогресс.
*/
const state = {
  selectedSubject: null,
  selectedMode: null,
  studentName: "",
  studentGrade: "",
  learningGoal: "",
  xp: 0,
  level: 1,
  medalAwarded: false,
  hasGreetedInChat: false,
  lastPlayDate: "",
  streakDays: 0,
  dailyGoalCount: 0,
  totalMessages: 0,
  achievements: [],
  sessionMessages: 0,
  sessionXpGained: 0,
  sessionHistory: [],
  weakTopics: {},
  mentorEmotion: "happy",
};

const STORAGE_KEY = "ai-school-quest-progress-v1";

const lessonModes = [
  { id: "quest", name: "Квест", emoji: "🗺️", subtitle: "Миссии и шаги, как в игре" },
  { id: "test", name: "Тест", emoji: "✅", subtitle: "Варианты ответа и «почему я так думаю»" },
  { id: "simple", name: "Объясни простыми словами", emoji: "🧩", subtitle: "Коротко, на пальцах, с примером" },
  { id: "homework", name: "Помощь с домашкой", emoji: "📘", subtitle: "Подсказки вопросами, без списывания" },
];

// Получаем ссылки на DOM-элементы, с которыми будем работать.
const screens = {
  start: document.getElementById("screen-start"),
  onboarding: document.getElementById("screen-onboarding"),
  subject: document.getElementById("screen-subject"),
  hero: document.getElementById("screen-hero"),
  mode: document.getElementById("screen-mode"),
  chat: document.getElementById("screen-chat"),
  lessonSummary: document.getElementById("screen-lesson-summary"),
};

const demoLessonBtn = document.getElementById("demo-lesson-btn");
const parentPreviewBtn = document.getElementById("parent-preview-btn");
const aiQuoteText = document.getElementById("ai-quote-text");
const onboardingForm = document.getElementById("onboarding-form");
const studentNameInput = document.getElementById("student-name-input");
const studentGradeInput = document.getElementById("student-grade-input");
const learningGoalSelect = document.getElementById("learning-goal-select");
const subjectGrid = document.getElementById("subject-grid");
const heroGrid = document.getElementById("hero-grid");
const modeGrid = document.getElementById("mode-grid");
const backToSubjectBtn = document.getElementById("back-to-subject-btn");
const backToHeroBtn = document.getElementById("back-to-hero-btn");
const changeHeroBtn = document.getElementById("change-hero-btn");
const changeSubjectBtn = document.getElementById("change-subject-btn");
const changeModeBtn = document.getElementById("change-mode-btn");
const parentModeBtn = document.getElementById("parent-mode-btn");
const softResetBtn = document.getElementById("soft-reset-btn");
const resetProgressBtn = document.getElementById("reset-progress-btn");

const chatStudent = document.getElementById("chat-student");
const chatSubject = document.getElementById("chat-subject");
const chatHero = document.getElementById("chat-hero");
const mentorMoodEmoji = document.getElementById("mentor-mood-emoji");
const mentorMoodLabel = document.getElementById("mentor-mood-label");
const demoMentorMood = document.getElementById("demo-mentor-mood");
const chatMode = document.getElementById("chat-mode");
const messages = document.getElementById("messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

const levelValue = document.getElementById("level-value");
const xpValue = document.getElementById("xp-value");
const medalValue = document.getElementById("medal-value");
const xpBarFill = document.getElementById("xp-bar-fill");
const streakValue = document.getElementById("streak-value");
const dailyGoalValue = document.getElementById("daily-goal-value");
const dailyTaskText = document.getElementById("daily-task-text");
const achievementText = document.getElementById("achievement-text");
const parentReport = document.getElementById("parent-report");
const startParentDashboard = document.getElementById("start-parent-dashboard");
const parentModalDashboard = document.getElementById("parent-modal-dashboard");
const ctaAiMentorBtn = document.getElementById("cta-ai-mentor-btn");
const ctaDemoBtn = document.getElementById("cta-demo-btn");
const offerCard = document.getElementById("offer-card");
const parentModal = document.getElementById("parent-modal");
const closeParentModalBtn = document.getElementById("close-parent-modal-btn");
const parentStudentName = document.getElementById("parent-student-name");
const endLessonBtn = document.getElementById("end-lesson-btn");
const lessonContinueBtn = document.getElementById("lesson-continue-btn");
const lessonXpEarned = document.getElementById("lesson-xp-earned");
const lessonMedalText = document.getElementById("lesson-medal-text");
const lessonMessagesCount = document.getElementById("lesson-messages-count");
const lessonSummaryMotivation = document.getElementById("lesson-summary-motivation");

function showScreen(screenKey) {
  const next = screens[screenKey];
  if (!next) {
    console.error("Неизвестный экран:", screenKey);
    return;
  }
  document.querySelectorAll(".screen").forEach((el) => {
    el.classList.remove("screen--active");
  });
  next.classList.add("screen--active");
}

/*
  Вспомогательная функция для получения сегодняшней даты в формате YYYY-MM-DD.
*/
function getTodayString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dailyMissionSeed() {
  const t = getTodayString().replace(/-/g, "");
  return parseInt(t, 10) || 1;
}

function getDailyMissionLine() {
  const sid = state.selectedSubject ? state.selectedSubject.id : "math";
  const pool = DAILY_MISSIONS[sid] || DAILY_MISSIONS.math;
  const i = dailyMissionSeed() % pool.length;
  return pool[i];
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pulseXpBar() {
  if (!xpBarFill) {
    return;
  }
  xpBarFill.classList.remove("xp-bar__fill--bump");
  void xpBarFill.offsetWidth;
  xpBarFill.classList.add("xp-bar__fill--bump");
  window.setTimeout(() => {
    xpBarFill.classList.remove("xp-bar__fill--bump");
  }, 700);
}

function showStepReward(subjectId) {
  const sid = subjectId || "math";
  const voice = heroVoices[sid] || heroVoices.math;
  const buff = pickRandom(voice.buffs);
  const flare = pickRandom(QUEST_FLARES);
  addMessage("system", `⭐ ${flare} ${buff}`);
}

/*
  Вычисляем разницу в днях между двумя датами формата YYYY-MM-DD.
  Это нужно для расчёта "серии дней" (streak).
*/
function getDayDiff(prevDateString, nextDateString) {
  if (!prevDateString || !nextDateString) {
    return NaN;
  }

  const prev = new Date(`${prevDateString}T00:00:00`);
  const next = new Date(`${nextDateString}T00:00:00`);
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((next - prev) / msPerDay);
}

/*
  Сохраняем прогресс в localStorage, чтобы данные не пропадали
  после перезагрузки страницы.
*/
function saveProgress() {
  const subjectId = state.selectedSubject ? state.selectedSubject.id : "";
  const modeId = state.selectedMode ? state.selectedMode.id : "";
  const safeData = {
    subjectId,
    modeId,
    studentName: state.studentName,
    studentGrade: state.studentGrade,
    learningGoal: state.learningGoal,
    xp: state.xp,
    level: state.level,
    medalAwarded: state.medalAwarded,
    lastPlayDate: state.lastPlayDate,
    streakDays: state.streakDays,
    dailyGoalCount: state.dailyGoalCount,
    totalMessages: state.totalMessages,
    achievements: state.achievements,
    sessionHistory: state.sessionHistory,
    weakTopics: state.weakTopics,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(safeData));
}

/*
  Восстанавливаем сохранённый прогресс.
  Если данных нет или они повреждены — просто используем стартовые значения.
*/
function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    const savedSubject = subjects.find((subject) => subject.id === parsed.subjectId) || null;
    const savedMode = lessonModes.find((mode) => mode.id === parsed.modeId) || null;

    state.selectedSubject = savedSubject;
    state.selectedMode = savedMode;
    state.studentName = parsed.studentName || "";
    state.studentGrade = parsed.studentGrade || "";
    state.learningGoal = parsed.learningGoal || "";
    state.xp = Number(parsed.xp) || 0;
    state.level = Number(parsed.level) || 1;
    state.medalAwarded = Boolean(parsed.medalAwarded);
    state.lastPlayDate = parsed.lastPlayDate || "";
    state.streakDays = Number(parsed.streakDays) || 0;
    state.dailyGoalCount = Number(parsed.dailyGoalCount) || 0;
    state.totalMessages = Number(parsed.totalMessages) || 0;
    state.achievements = Array.isArray(parsed.achievements) ? parsed.achievements : [];
    state.sessionHistory = Array.isArray(parsed.sessionHistory) ? parsed.sessionHistory : [];
    state.weakTopics = parsed.weakTopics && typeof parsed.weakTopics === "object" ? parsed.weakTopics : {};
  } catch (error) {
    console.error("Не удалось загрузить прогресс из localStorage:", error);
  }
}

/*
  Подсчёт аналитики: обновляем счётчик "слабых тем" по предмету.
*/
function trackWeakTopic() {
  if (!state.selectedSubject) {
    return;
  }

  const key = state.selectedSubject.name;
  const current = Number(state.weakTopics[key]) || 0;
  state.weakTopics[key] = current + 1;
}

/*
  При запуске нового чата фиксируем статистику предыдущей сессии
  и начинаем новую.
*/
function finalizePreviousSession() {
  if (!state.selectedSubject || state.sessionMessages === 0) {
    return;
  }

  const entry = {
    date: getTodayString(),
    subject: state.selectedSubject.name,
    mode: state.selectedMode ? state.selectedMode.name : "Без режима",
    messages: state.sessionMessages,
    xp: state.sessionXpGained,
  };

  state.sessionHistory.push(entry);
  if (state.sessionHistory.length > 8) {
    state.sessionHistory = state.sessionHistory.slice(-8);
  }
}

/*
  Генерируем недельный план из текущей цели обучения.
*/
function buildWeeklyPlan() {
  const subjectName = state.selectedSubject ? state.selectedSubject.name : "выбранный предмет";
  const goal = state.learningGoal || "Подтянуть знания";

  return [
    `День 1: спокойная разминка по «${subjectName}» — 10–12 минут, без гонки.`,
    `День 2: коротко объяснить себе правило и придумать 3 маленьких примера (${goal.toLowerCase()}).`,
    "День 3: поговорить вслух: вопрос — ответ — проверка, где чуть промахнулся.",
    "День 4: вернуться к двум местам, где было трудно, и пересказать их своими словами.",
    "День 5: мини-проверка на 5 вопросов — можно даже вслух одному воображаемому другу.",
    "День 6: разобрать типичную ошибку: что сработало не так и как сделать иначе в следующий раз.",
    "День 7: короткий итог недели — что стало понятнее и что взять в следующую «карту квеста».",
  ];
}

function getParentDashboardHTML() {
  return `
    <header class="parent-dash__header">
      <div class="parent-dash__head-text">
        <h3 id="parent-dash-title" class="parent-dash__title">Для родителей</h3>
        <p class="parent-dash__lead" data-dash="lead">—</p>
      </div>
      <span class="parent-dash__badge">Dashboard</span>
    </header>
    <div class="parent-dash__grid">
      <article class="parent-dash__card">
        <div class="parent-dash__card-top">
          <span class="parent-dash__icon" aria-hidden="true">⭐</span>
          <h4 class="parent-dash__card-title">Уровень ребёнка</h4>
        </div>
        <p class="parent-dash__value" data-dash="level">1</p>
        <div class="parent-dash__bar" data-dash-bar="level" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Прогресс до следующего уровня">
          <div class="parent-dash__fill parent-dash__fill--level"></div>
        </div>
        <p class="parent-dash__hint">до следующего уровня</p>
      </article>
      <article class="parent-dash__card">
        <div class="parent-dash__card-top">
          <span class="parent-dash__icon" aria-hidden="true">🔥</span>
          <h4 class="parent-dash__card-title">Серия дней</h4>
        </div>
        <p class="parent-dash__value" data-dash="streak">0</p>
        <div class="parent-dash__bar" data-dash-bar="streak" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Серия дней">
          <div class="parent-dash__fill parent-dash__fill--streak"></div>
        </div>
        <p class="parent-dash__hint">цель — 7 дней подряд</p>
      </article>
      <article class="parent-dash__card">
        <div class="parent-dash__card-top">
          <span class="parent-dash__icon" aria-hidden="true">🏆</span>
          <h4 class="parent-dash__card-title">Получено медалей</h4>
        </div>
        <p class="parent-dash__value" data-dash="medals">0</p>
        <div class="parent-dash__bar" data-dash-bar="medals" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Медали и значки">
          <div class="parent-dash__fill parent-dash__fill--medals"></div>
        </div>
        <p class="parent-dash__hint">медали за упорство</p>
      </article>
      <article class="parent-dash__card">
        <div class="parent-dash__card-top">
          <span class="parent-dash__icon" aria-hidden="true">📈</span>
          <h4 class="parent-dash__card-title">Рост знаний</h4>
        </div>
        <p class="parent-dash__value" data-dash="growth">0%</p>
        <div class="parent-dash__bar" data-dash-bar="growth" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Рост знаний">
          <div class="parent-dash__fill parent-dash__fill--growth"></div>
        </div>
        <p class="parent-dash__hint">динамика XP и диалога</p>
      </article>
      <article class="parent-dash__card parent-dash__card--wide">
        <div class="parent-dash__card-top">
          <span class="parent-dash__icon" aria-hidden="true">📚</span>
          <h4 class="parent-dash__card-title">Любимый предмет</h4>
        </div>
        <p class="parent-dash__value parent-dash__value--subject" data-dash="subject">—</p>
        <div class="parent-dash__bar" data-dash-bar="subject" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Активность по предмету">
          <div class="parent-dash__fill parent-dash__fill--subject"></div>
        </div>
        <p class="parent-dash__hint">где больше всего вопросов</p>
      </article>
    </div>
    <div class="parent-dash__split">
      <div class="parent-dash__insight parent-dash__insight--good">
        <h4 class="parent-dash__insight-title"><span aria-hidden="true">💪</span> Что улучшилось</h4>
        <ul class="parent-dash__list" data-dash="improved-list"></ul>
      </div>
      <div class="parent-dash__insight parent-dash__insight--repeat">
        <h4 class="parent-dash__insight-title"><span aria-hidden="true">📌</span> Что повторить</h4>
        <p class="parent-dash__repeat-text" data-dash="repeat">—</p>
        <div class="parent-dash__bar parent-dash__bar--repeat" data-dash-bar="repeat" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Зона для повторения">
          <div class="parent-dash__fill parent-dash__fill--repeat"></div>
        </div>
      </div>
    </div>
    <div class="parent-dash__plan">
      <h4 class="parent-dash__plan-title">План на 7 дней</h4>
      <ol class="parent-dash__plan-list" data-dash="plan-list"></ol>
    </div>
  `;
}

function mountParentDashboards() {
  const html = getParentDashboardHTML();
  [parentReport, parentModalDashboard, startParentDashboard].forEach((root) => {
    if (!root) {
      return;
    }
    root.classList.add("parent-dash");
    if (root === startParentDashboard) {
      root.classList.add("parent-dash--preview");
    }
    root.innerHTML = html;
  });
}

function computeParentDashboardMetrics() {
  const level = Math.floor(state.xp / 50) + 1;
  const levelPercent = ((state.xp % 50) / 50) * 100;
  const streak = state.streakDays;
  const streakPercent = Math.min(100, (streak / 7) * 100);

  let medalCount = state.medalAwarded ? 1 : 0;
  medalCount += Math.min(4, state.achievements.length);
  const medalPercent = Math.min(100, (medalCount / 5) * 100);

  const growthPercent = Math.min(
    100,
    Math.round(state.xp * 1.1 + state.totalMessages * 1.8 + state.sessionHistory.length * 6)
  );

  const subjectCounts = {};
  state.sessionHistory.forEach((entry) => {
    subjectCounts[entry.subject] = (subjectCounts[entry.subject] || 0) + (Number(entry.messages) || 1);
  });
  if (state.selectedSubject && state.sessionMessages > 0) {
    const name = state.selectedSubject.name;
    subjectCounts[name] = (subjectCounts[name] || 0) + state.sessionMessages;
  }

  let favoriteSubject = "Пока не выбран";
  let subjectPercent = 8;
  const sortedSubjects = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1]);
  if (sortedSubjects.length) {
    favoriteSubject = sortedSubjects[0][0];
    const total = sortedSubjects.reduce((sum, [, count]) => sum + count, 0) || 1;
    subjectPercent = Math.round((sortedSubjects[0][1] / total) * 100);
  } else if (state.selectedSubject) {
    favoriteSubject = state.selectedSubject.name;
    subjectPercent = state.sessionMessages > 0 ? 45 : 18;
  }

  const repeatEntries = Object.entries(state.weakTopics).sort((a, b) => b[1] - a[1]);
  const repeatText = repeatEntries.length
    ? `Спокойно повторить: ${repeatEntries
        .slice(0, 2)
        .map(([name]) => name)
        .join(", ")} — там чаще просили подсказку.`
    : state.selectedSubject
      ? `Закрепить базу по «${state.selectedSubject.name}»: два спокойных примера без таймера.`
      : "Начните демо-урок — появятся подсказки, что повторить.";

  const repeatPercent = repeatEntries.length
    ? Math.min(100, Math.round((repeatEntries[0][1] / Math.max(state.totalMessages, 1)) * 200))
    : 12;

  const child = state.studentName || "Ребёнок";
  const grade = state.studentGrade || "5 класс";
  const subj = state.selectedSubject ? state.selectedSubject.name : "предмет не выбран";
  const lead = `${child} (${grade}) · ${subj} · ${state.totalMessages} сообщ. в чате`;

  return {
    level,
    levelPercent,
    streak,
    streakPercent,
    medalCount,
    medalPercent,
    growthPercent,
    favoriteSubject,
    subjectPercent,
    repeatText,
    repeatPercent,
    improved: buildParentStrengthBullets(),
    lead,
    plan: buildWeeklyPlan(),
  };
}

function renderParentDashboard(root) {
  if (!root) {
    return;
  }

  const m = computeParentDashboardMetrics();

  const setText = (key, value) => {
    const el = root.querySelector(`[data-dash="${key}"]`);
    if (el) {
      el.textContent = value;
    }
  };

  const setBar = (key, percent) => {
    const wrap = root.querySelector(`[data-dash-bar="${key}"]`);
    const fill = wrap ? wrap.querySelector(".parent-dash__fill") : null;
    const safe = Math.max(0, Math.min(100, percent));
    if (fill) {
      fill.style.width = `${safe}%`;
    }
    if (wrap) {
      wrap.setAttribute("aria-valuenow", String(Math.round(safe)));
    }
  };

  setText("lead", m.lead);
  setText("level", String(m.level));
  setText("streak", String(m.streak));
  setText("medals", String(m.medalCount));
  setText("growth", `${m.growthPercent}%`);
  setText("subject", m.favoriteSubject);
  setText("repeat", m.repeatText);

  setBar("level", m.levelPercent);
  setBar("streak", m.streakPercent);
  setBar("medals", m.medalPercent);
  setBar("growth", m.growthPercent);
  setBar("subject", m.subjectPercent);
  setBar("repeat", m.repeatPercent);

  const improvedList = root.querySelector('[data-dash="improved-list"]');
  if (improvedList) {
    improvedList.innerHTML = "";
    m.improved.forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      improvedList.append(li);
    });
  }

  const planList = root.querySelector('[data-dash="plan-list"]');
  if (planList) {
    planList.innerHTML = "";
    m.plan.forEach((item) => {
      const li = document.createElement("li");
      const match = item.match(/^День \d+:/);
      if (match) {
        const strong = document.createElement("strong");
        strong.textContent = match[0];
        li.append(strong, ` ${item.slice(match[0].length).trim()}`);
      } else {
        li.textContent = item;
      }
      planList.append(li);
    });
  }
}

/*
  Обновляем контент модального окна родительского режима.
*/
function updateParentModal() {
  if (parentStudentName) {
    parentStudentName.textContent = `${state.studentName || "Ученик"} (${state.studentGrade || "5 класс"})`;
  }
  renderParentDashboard(parentModalDashboard);
}

function openParentModal() {
  if (!parentModal) {
    return;
  }
  updateParentModal();
  parentModal.classList.remove("parent-modal--hidden");
  parentModal.setAttribute("aria-hidden", "false");
}

/*
  Проверяем новую игровую сессию дня:
  - если новый календарный день, сбрасываем цель дня (0/3)
  - серия дней растёт, если заходы идут день за днём
*/
function syncDailySession() {
  const today = getTodayString();
  if (!state.lastPlayDate) {
    state.lastPlayDate = today;
    state.streakDays = 1;
    return;
  }

  const dayDiff = getDayDiff(state.lastPlayDate, today);
  if (dayDiff === 0) {
    return;
  }

  if (dayDiff === 1) {
    state.streakDays += 1;
  } else {
    state.streakDays = 1;
  }

  state.dailyGoalCount = 0;
  state.lastPlayDate = today;
}

/*
  Рендерим карточки режимов урока.
*/
function renderModeCards() {
  if (!modeGrid) {
    return;
  }
  modeGrid.innerHTML = "";

  lessonModes.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-card";
    button.innerHTML = `
      <div class="choice-card__emoji">${mode.emoji}</div>
      <div class="choice-card__title">${mode.name}</div>
      <div class="choice-card__subtitle">${mode.subtitle}</div>
    `;

    button.addEventListener("click", () => {
      state.selectedMode = mode;
      if (state.selectedSubject) {
        startChat(state.selectedSubject);
      }
    });

    modeGrid.append(button);
  });
}

/*
  Полный сброс прогресса для демо:
  - очищаем localStorage
  - возвращаем состояние к стартовым значениям
  - обновляем интерфейс и возвращаем на стартовый экран
*/
function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);

  state.selectedSubject = null;
  state.selectedMode = null;
  state.studentName = "";
  state.studentGrade = "";
  state.learningGoal = "";
  state.xp = 0;
  state.level = 1;
  state.medalAwarded = false;
  state.hasGreetedInChat = false;
  state.lastPlayDate = getTodayString();
  state.streakDays = 1;
  state.dailyGoalCount = 0;
  state.totalMessages = 0;
  state.achievements = [];
  state.sessionMessages = 0;
  state.sessionXpGained = 0;
  state.sessionHistory = [];
  state.weakTopics = {};

  if (chatStudent) {
    chatStudent.textContent = "—";
  }
  if (chatSubject) {
    chatSubject.textContent = "—";
  }
  if (chatHero) {
    chatHero.textContent = "—";
  }
  if (chatMode) {
    chatMode.textContent = "—";
  }
  if (medalValue) {
    medalValue.textContent = "Пока нет";
  }
  if (messages) {
    messages.innerHTML = "";
  }
  if (chatInput) {
    chatInput.value = "";
  }
  if (parentReport) {
    parentReport.classList.add("parent-report--hidden");
  }
  if (offerCard) {
    offerCard.classList.add("offer-card--hidden");
  }
  if (parentModal) {
    parentModal.classList.add("parent-modal--hidden");
  }

  if (studentNameInput) {
    studentNameInput.value = "";
  }
  if (studentGradeInput) {
    studentGradeInput.value = "";
  }
  if (learningGoalSelect) {
    learningGoalSelect.value = "";
  }

  updateProgressUI();
  updateQuestUI();
  saveProgress();
  showScreen("start");
}

/*
  Мягкий сброс:
  - очищаем текущую сессию (XP/медаль/цель дня/чат)
  - сохраняем долгосрочный прогресс (достижения, серия дней)
  - остаёмся в текущем чате
*/
function softResetSession() {
  state.xp = 0;
  state.level = 1;
  state.medalAwarded = false;
  state.hasGreetedInChat = false;
  state.dailyGoalCount = 0;
  state.sessionMessages = 0;
  state.sessionXpGained = 0;

  if (medalValue) {
    medalValue.textContent = "Пока нет";
  }
  if (messages) {
    messages.innerHTML = "";
  }
  if (chatInput) {
    chatInput.value = "";
  }
  if (parentReport) {
    parentReport.classList.add("parent-report--hidden");
  }

  updateProgressUI();
  updateQuestUI();
  saveProgress();
  setMentorEmotion("happy");

  addMessage("system", "Сессию обнулили, но серия дней и значки остались — можно начать чистый лист без стресса.");
}

/*
  Создаём карточки предметов динамически.
  Такой подход удобен: предметы можно менять только в одном массиве.
*/
function renderSubjectCards() {
  if (!subjectGrid) {
    return;
  }
  subjectGrid.innerHTML = "";

  subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-card";
    button.innerHTML = `
      <div class="choice-card__emoji">${subject.emoji}</div>
      <div class="choice-card__title">${subject.name}</div>
      <div class="choice-card__subtitle">Нажми, чтобы выбрать</div>
    `;

    button.addEventListener("click", () => {
      state.selectedSubject = subject;
      renderHeroGallery();
      showScreen("hero");
    });

    subjectGrid.append(button);
  });
}

/*
  Экран героя: сетка карточек наставников по всем предметам.
  Карта, выбранная на шаге «предмет», подсвечивается как текущая.
*/
function renderHeroGallery() {
  if (!heroGrid) {
    return;
  }
  heroGrid.innerHTML = "";
  heroGrid.className = "mentor-grid";

  subjects.forEach((subject) => {
    const isCurrent = state.selectedSubject && state.selectedSubject.id === subject.id;
    const article = document.createElement("article");
    article.className = `mentor-card${isCurrent ? " mentor-card--current" : ""}`;
    article.dataset.mentor = subject.id;

    article.innerHTML = `
      <div class="mentor-card__accent" aria-hidden="true"></div>
      ${isCurrent ? '<p class="mentor-card__hint">Твой выбор на прошлом шаге</p>' : ""}
      <div class="mentor-card__top">
        <span class="mentor-card__avatar" aria-hidden="true">${subject.heroEmoji}</span>
        <div class="mentor-card__headlines">
          <p class="mentor-card__subject-line"><span class="mentor-card__subject-emoji">${subject.emoji}</span> ${subject.name}</p>
          <h3 class="mentor-card__hero-name">${subject.hero}</h3>
        </div>
      </div>
      <p class="mentor-card__desc">${subject.heroDescription}</p>
      <button type="button" class="btn btn--primary btn--small mentor-card__cta">Выбрать героя</button>
    `;

    const cta = article.querySelector(".mentor-card__cta");
    if (cta) {
      cta.addEventListener("click", () => {
        state.selectedSubject = subject;
        showScreen("mode");
      });
    }

    heroGrid.append(article);
  });
}

const DEMO_MESSENGER_REPLIES = {
  "Объясни проще":
    "Окей, упростим 🙂 Представь задачу как маршрут: точка А — что уже написано в условии, точка Б — чего хочешь добиться. Напиши А и Б по одной короткой фразе — дальше подскажу следующий шаг.",
  "Дай пример":
    "Вот пример «рядом», не из твоего номера: 12 наклеек делят на 4 альбома поровну — по 3 в каждый. Идея та же: делим целиком и смотрим, что остаётся. Какой у тебя похожий кусок в задаче?",
  "Дай задание":
    "Мини-квест на пару минут: одной строкой — что именно непонятно, и одна твоя догадка, даже если неуверенная. Я отвечу маленьким следующим шагом, без готового ответа в лоб.",
};

function getMentorEmotionEmoji(key) {
  const emotion = MENTOR_EMOTIONS[key] || MENTOR_EMOTIONS.happy;
  return emotion.emoji;
}

function setMentorEmotion(key, options = {}) {
  const emotion = MENTOR_EMOTIONS[key] || MENTOR_EMOTIONS.happy;
  state.mentorEmotion = key in MENTOR_EMOTIONS ? key : "happy";

  const targets = [];
  if (mentorMoodEmoji) {
    targets.push(mentorMoodEmoji);
  }
  if (options.syncDemo !== false && demoMentorMood) {
    targets.push(demoMentorMood);
  }

  targets.forEach((el) => {
    el.classList.remove("mentor-mood__emoji--pop");
    void el.offsetWidth;
    el.textContent = emotion.emoji;
    el.classList.add("mentor-mood__emoji--pop");
  });

  if (mentorMoodLabel) {
    mentorMoodLabel.textContent = emotion.label;
  }
}

function resolveMentorEmotion(userText) {
  const t = userText.trim().toLowerCase();

  if (/^(a|b|c|а|б|в)$/.test(t) || /(вариант|ответ|думаю|потому что|получилось|верно|правильно|согласен)/.test(t)) {
    return "cheer";
  }

  if (/\d/.test(t) && t.length > 6 && /(равно|получ|ответ|делю|умнож|слож|вычит)/.test(t)) {
    return "cheer";
  }

  if (/(понял|понятно|ясно|спасибо|круто|разобрался|теперь знаю|получается|молодец)/.test(t)) {
    return "happy";
  }

  if (isQuickPhrase(userText)) {
    return "hint";
  }

  if (state.selectedMode && (state.selectedMode.id === "homework" || state.selectedMode.id === "simple")) {
    return "hint";
  }

  if (/(не понимаю|не знаю|помоги|сложно|как|почему|что такое|объясни|подскаж)/.test(t)) {
    return "hint";
  }

  if (t.length >= 12) {
    return "happy";
  }

  return "hint";
}

/*
  Вставка сообщения в стиле мессенджера (пузыри, для бота — аватар).
*/
function appendChatBubble(container, type, text, options = {}) {
  if (!container) {
    return;
  }

  const botEmoji =
    options.botEmoji ||
    getMentorEmotionEmoji(state.mentorEmotion) ||
    (state.selectedSubject ? state.selectedSubject.heroEmoji : "✨");

  if (type === "system") {
    const row = document.createElement("div");
    row.className = "msg-row msg-row--system";
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble msg-bubble--system";
    bubble.textContent = text;
    row.append(bubble);
    container.append(row);
    container.scrollTop = container.scrollHeight;
    return;
  }

  const isUser = type === "user";
  const row = document.createElement("div");
  row.className = `msg-row msg-row--${isUser ? "user" : "bot"}`;

  if (isUser) {
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble msg-bubble--user";
    bubble.textContent = text;
    row.append(bubble);
  } else {
    const inner = document.createElement("div");
    inner.className = "msg-row__inner";
    const av = document.createElement("span");
    av.className = "msg-row__avatar msg-row__avatar--emotion";
    av.setAttribute("aria-hidden", "true");
    av.textContent = botEmoji;
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble msg-bubble--bot";
    bubble.textContent = text;
    inner.append(av, bubble);
    row.append(inner);
  }

  container.append(row);
  container.scrollTop = container.scrollHeight;
}

function showAiQuoteToday() {
  if (!aiQuoteText || !AI_QUOTES_TODAY.length) {
    return;
  }
  const index = Math.floor(Math.random() * AI_QUOTES_TODAY.length);
  aiQuoteText.textContent = AI_QUOTES_TODAY[index];
}

function initDemoMessenger() {
  const feed = document.getElementById("demo-messenger-feed");
  if (!feed) {
    return;
  }

  feed.innerHTML = "";
  setMentorEmotion("happy", { syncDemo: true });

  appendChatBubble(feed, "user", "Я не понимаю задачу по математике.");
  setMentorEmotion("thinking", { syncDemo: true });
  appendChatBubble(
    feed,
    "bot",
    "Привет! Давай разберём вместе. Готовый ответ сразу не подставлю — зато проведу шаг за шагом, чтобы ты сам дошёл до сути.",
    { botEmoji: getMentorEmotionEmoji("hint") }
  );
  setMentorEmotion("hint", { syncDemo: true });

  document.querySelectorAll("[data-demo-quick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-demo-quick");
      if (!label || !Object.prototype.hasOwnProperty.call(DEMO_MESSENGER_REPLIES, label)) {
        return;
      }
      setMentorEmotion("thinking", { syncDemo: true });
      appendChatBubble(feed, "user", label);
      window.setTimeout(() => {
        setMentorEmotion("hint", { syncDemo: true });
        appendChatBubble(feed, "bot", DEMO_MESSENGER_REPLIES[label], {
          botEmoji: getMentorEmotionEmoji("hint"),
        });
      }, 450);
    });
  });
}

/*
  Добавляем сообщение в чат.
  type:
  - "user"   => сообщение ребёнка
  - "bot"    => сообщение наставника
  - "system" => техническое/наградное сообщение
*/
function addMessage(type, text, options = {}) {
  appendChatBubble(messages, type, text, options);
}

/*
  Рисуем квестовую информацию:
  - серия дней
  - прогресс ежедневной цели (3 сообщения)
  - последнее полученное достижение
*/
function updateQuestUI() {
  if (!streakValue || !dailyGoalValue) {
    return;
  }
  streakValue.textContent = String(state.streakDays);
  dailyGoalValue.textContent = `${state.dailyGoalCount}/3`;

  if (dailyTaskText) {
    dailyTaskText.textContent = state.selectedSubject
      ? `Миссия дня: ${getDailyMissionLine()}`
      : "Миссия дня: зайди в квест и выбери предмет — я подстрою цель специально под твой выбор.";
  }

  if (achievementText) {
    if (state.achievements.length > 0) {
      const latest = state.achievements[state.achievements.length - 1];
      achievementText.textContent = `Последний значок: ${latest}`;
    } else {
      achievementText.textContent = "Значки дня: пока тишина — первый шаг уже за углом.";
    }
  }
}

/*
  Короткий список сильных сторон для родительской панели.
*/
function buildParentStrengthBullets() {
  const out = [];

  if (state.medalAwarded) {
    out.push("Упорство: есть медаль «Смекалка» — за то, что вёл диалог до понятного места.");
  }
  if (state.streakDays >= 2) {
    out.push(`Ритм: ${state.streakDays} дня подряд заходишь — привычка возвращаться к учёбе уже растёт.`);
  }
  if (state.dailyGoalCount >= 3) {
    out.push("Сегодня закрыл мини-цель по сообщениям — день получился продуктивным.");
  } else if (state.dailyGoalCount >= 1) {
    out.push("Есть движение к дневной цели: не остановился на первом ответе — это сильный сигнал.");
  }
  if (state.totalMessages >= 10) {
    out.push("Любопытство на связи: много вопросов наставнику — учится через диалог, а не зубрёжку.");
  } else if (state.totalMessages >= 5) {
    out.push("Задаёт уточнения и копает глубже — как раз формат «разобраться самому».");
  }

  state.achievements.slice(-3).forEach((title) => {
    if (!out.includes(title)) {
      out.push(title);
    }
  });

  const uniq = [...new Set(out)].slice(0, 6);
  if (uniq.length === 0) {
    return ["Уже хороший старт: ведёшь диалог своими словами — так и задумано, без готовых ответов с потолка."];
  }
  return uniq;
}

/*
  Родительский отчёт:
  показываем после 3 сообщений ученика и обновляем динамически.
*/
function updateParentReport() {
  if (!parentReport) {
    return;
  }

  renderParentDashboard(parentReport);

  if (state.totalMessages < 3) {
    parentReport.classList.add("parent-report--hidden");
    return;
  }

  parentReport.classList.remove("parent-report--hidden");
}

/*
  Обновляем визуальный блок прогресса:
  - XP
  - Уровень (каждые 50 XP +1 уровень)
  - Полоса прогресса до следующего уровня
*/
function updateProgressUI() {
  state.level = Math.floor(state.xp / 50) + 1;
  if (!levelValue || !xpValue || !xpBarFill) {
    return;
  }
  levelValue.textContent = String(state.level);
  xpValue.textContent = String(state.xp);

  const progressToNextLevel = state.xp % 50;
  const widthPercent = (progressToNextLevel / 50) * 100;
  xpBarFill.style.width = `${widthPercent}%`;
}

/*
  Выдача достижений.
  Достижения добавляются один раз и показываются системным сообщением.
*/
function grantAchievement(title) {
  if (state.achievements.includes(title)) {
    return;
  }

  state.achievements.push(title);
  addMessage("system", `Ура! Новый значок в дневнике: ${title}`);
}

function checkAchievements() {
  if (state.dailyGoalCount >= 3) {
    grantAchievement("Три сообщения за день — цель закрыта 🎯");
  }
  if (state.streakDays >= 3) {
    grantAchievement("Три дня подряд заходишь — ритм героя 🔥");
  }
  if (state.totalMessages >= 10) {
    grantAchievement("Десять осмысленных вопросов — любопытство на максимуме 💡");
  }

  updateQuestUI();
}

/*
  Начисляем опыт за диалог.
  После 30 XP выдаём медаль один раз.
*/
function addXp(amount) {
  state.xp += amount;
  updateProgressUI();

  if (state.xp >= 30 && !state.medalAwarded) {
    state.medalAwarded = true;
    if (medalValue) {
      medalValue.textContent = "Смекалка 🏅";
    }
    setMentorEmotion("medal");
    addMessage("system", "Есть медаль «Смекалка» — за то, что не сдался и докрутил разговор до ясности. Красота!");
  }

  saveProgress();
}

/*
  Генерация "бот-ответа" (имитация AI).
  Выбираем случайный шаблон, чтобы реплики не были одинаковыми.
*/
function generateBotReply(subjectId) {
  const voice = heroVoices[subjectId] || heroVoices.math;
  const templates = voice.templates;
  return templates[Math.floor(Math.random() * templates.length)];
}

/*
  Оборачиваем ответ: короткая поддержка + вопрос в конце (кроме домашки — там свой сценарий).
*/
function withCoachTone(body, name, modeId) {
  const n = name || "герой";
  const cheers = [
    `${n}, ты не на экзамене — мы просто крутим тему, как квест. Вперёд.`,
    `Класс, ${n}, держишь фокус. Маленький шаг сейчас — большой плюс потом.`,
    `${n}, я на связи: спрашивай, пока не станет спокойно в голове.`,
    `Заметил, как ты формулируешь мысль, ${n}? Это уже прогресс.`,
    `${n}, не гонись за идеалом — сначала ясность, потом скорость.`,
    `Так, ${n}: дышим ровно и делаем следующий шаг без паники.`,
  ];
  const cheer = cheers[body.length % cheers.length];

  if (modeId === "homework") {
    return `${cheer}\n${body}`;
  }

  const closing =
    modeId === "test"
      ? "Напиши вариант A / B / C или одну фразу «я думаю так, потому что…»"
      : "Коротко ответь одним сообщением — и пойдём дальше по цепочке.";

  return `${cheer}\n${body}\n→ ${closing}`;
}

/*
  Улучшенная генерация ответа в зависимости от выбранного режима урока.
*/
function isQuickPhrase(text) {
  return QUICK_PHRASES.includes(text.trim());
}

/*
  Ответы на быстрые кнопки: коротко, по-игровому; в режиме домашки — без готовых решений.
*/
function generateQuickReply(phrase) {
  const subj = state.selectedSubject;
  const modeId = state.selectedMode ? state.selectedMode.id : "";
  const name = state.studentName || "герой";
  const topic = subj ? subj.name : "урок";
  const id = subj ? subj.id : "math";

  const wrapQuick = (text) => {
    if (modeId === "homework") {
      return text;
    }
    return `${text}\n→ ${name}, одним сообщением: что уже прояснилось и что ещё в лёгком тумане?`;
  };

  if (phrase === "Объясни проще") {
    if (modeId === "homework") {
      return `${name}, без готовых ответов 💬 ① Перескажи условие двумя простыми фразами. ② Назови «колючее» место одним словом. Напиши — разверну это спокойнее.`;
    }
    const hints = {
      math: "Давай упростим: что в задаче уже дано и чего хотят добиться — по одной короткой фразе. От этого почти всегда проще плясать.",
      russian: "Выбери одно слово, которое цепляет: разберём корень и окончание — без давления на «идеально с первого раза».",
      english: "Сначала смысл по-русски в одной строке, потом та же мысль тремя–пятью английскими словами. Не гонись за красотой — важно, чтобы было честно.",
      history: "Сожми событие в три слова: кто, что сделал, что из этого вышло. Если застрянешь — скажи где, подхвачу.",
      biology: "Назови один термин, который бесит, и сравни его с чем-то из жизни (кухня, спорт, питомец). Так термин обычно перестаёт быть «абракадаброй».",
      geography: "Выбери один слой: климат, соседи, реки или рельеф. Опиши его одной фразой — карта станет спокойнее.",
    };
    return wrapQuick(hints[id] || hints.math);
  }

  if (phrase === "Дай пример") {
    if (modeId === "homework") {
      return `${name}, номер целиком не решу — это честь перед твоим мозгом 🙂 ① Что в задании: числа, слова или факты? ② Тема одним словом — подберу похожий тренажёр, не копию.`;
    }
    const examples = {
      math: "Маленький пример рядом: 12 конфет делим на 3 друзей — по 4. Идея «делим поровну» часто прячется и в твоих задачах.",
      russian: "Пара «бежать» / «бег»: первое — действие, второе — предмет. Прочитай вслух — ухо часто подсказывает, где что.",
      english: "Микро-штука: I like → she likes — меняется хвостик, смысл тот же. Попробуй проговорить вслух.",
      history: "Цепочка: причина → событие → следствие. Как три звена браслета: если одно выпало, вся история «ломается».",
      biology: "Сердце можно представить как насос по трубкам: кровь гонит кислород — как вода по шлангу в саду.",
      geography: "Два города на карте — как два мороженых: где слаще влажность, где суше ветер? Одно сравнение — и климат оживает.",
    };
    return wrapQuick(examples[id] || examples.math);
  }

  if (phrase === "Дай задание") {
    if (modeId === "homework") {
      return `${name}, мини-квест без списывания: ① что нужно найти? ② одна смелая догадка. ③ чего не хватает: формула, слово или факт? Ответь по пунктам — продолжим вопросами.`;
    }
    return wrapQuick(`Мини-квест «${topic}» на 3 минуты: ① что уже знаю… ② где туман… ③ какой полу-ответ чувствую. Одним сообщением — и поехали дальше.`);
  }

  return withCoachTone(generateBotReply(id), name, modeId);
}

function generateModeAwareReply(userText) {
  if (!state.selectedSubject || !state.selectedMode) {
    return "Я на связи 🙂 С какого предмета начнём сегодняшнюю миссию? Сверху выбери предмет и режим — и я подстроюсь под твой стиль.";
  }

  if (isQuickPhrase(userText)) {
    return generateQuickReply(userText.trim());
  }

  const baseReply = generateBotReply(state.selectedSubject.id);
  const modeId = state.selectedMode.id;
  const name = state.studentName || "исследователь";

  if (modeId === "quest") {
    const core = `Квест «${state.selectedSubject.name}» 🗺️ Отличный чекпоинт. ${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "test") {
    const core =
      `Мини-арена «${state.selectedSubject.name}» 🙂 Выбери A / B / C или напиши «я за этот вариант, потому что…» одной фразой.\n` +
      `${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "simple") {
    const core = `Простыми словами 🧩 ① суть одной строкой ② без сложных терминов ③ на пальцах или на примере из жизни.\n${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  const snippet = userText.slice(0, 48).trim() || "тема";
  const hw =
    `${name}, с домашкой я рядом, но готовый ответ с потолка не подставлю — так честнее для твоего мозга.\n` +
    `① Где «туман» в номере — одним словом?\n② Что уже прояснилось хоть на каплю?\n③ Какой микро-шаг на 2 минуты попробуешь сам?\n` +
    `(Про фразу «${snippet}…») Ответь по пунктам — дальше продолжим короткими вопросами, без списывания.`;
  return withCoachTone(hw, name, modeId);
}

function buildBotReply(userText) {
  return generateModeAwareReply(userText);
}

function runBotTurn(userText) {
  window.setTimeout(() => {
    if (!state.selectedSubject) {
      return;
    }

    if (!state.hasGreetedInChat) {
      const introName = state.studentName || "друг";
      const goal = state.learningGoal || "спокойно разобраться и чуть поиграть с темой";
      setMentorEmotion("happy");
      addMessage(
        "bot",
        `${heroGreetings[state.selectedSubject.id]}\n\n${introName}, держим в фокусе цель: «${goal}». Пойдём маленькими шагами — сначала твоя мысль, потом моя подсказка.`,
        { botEmoji: getMentorEmotionEmoji("happy") }
      );
      state.hasGreetedInChat = true;
    }

    const reply = buildBotReply(userText);
    const emotion = resolveMentorEmotion(userText);
    setMentorEmotion(emotion);
    addMessage("bot", reply, { botEmoji: getMentorEmotionEmoji(emotion) });

    addXp(10);
    pulseXpBar();
    showStepReward(state.selectedSubject.id);
    trackWeakTopic();
    state.dailyGoalCount += 1;
    state.totalMessages += 1;
    state.sessionMessages += 1;
    state.sessionXpGained += 10;
    checkAchievements();
    updateParentReport();
    updateParentModal();
    saveProgress();
  }, 450);
}

/*
  Инициализация чата:
  - очищаем старые сообщения
  - показываем выбранные предмет и героя
  - сбрасываем прогресс для новой сессии
*/
function openLessonSummary() {
  if (!state.selectedSubject || state.sessionMessages < 1) {
    window.alert("Напиши наставнику хотя бы одно сообщение — и можно спокойно закрыть этот этап квеста.");
    return;
  }

  const xpEarned = state.sessionXpGained;
  const msgs = state.sessionMessages;

  finalizePreviousSession();
  state.sessionMessages = 0;
  state.sessionXpGained = 0;

  if (lessonXpEarned) {
    lessonXpEarned.textContent = String(xpEarned);
  }
  if (lessonMessagesCount) {
    lessonMessagesCount.textContent = String(msgs);
  }
  if (lessonMedalText) {
    lessonMedalText.textContent = state.medalAwarded
      ? "Смекалка"
      : "Медаль ещё впереди — зато XP уже копится, следующий заход будет ближе!";
  }
  if (lessonSummaryMotivation) {
    lessonSummaryMotivation.textContent = pickRandom(LESSON_MOTIVATIONS);
  }

  updateQuestUI();
  saveProgress();
  showScreen("lessonSummary");
}

function startChat(subject) {
  finalizePreviousSession();
  showScreen("chat");

  state.selectedSubject = subject;
  state.totalMessages = state.totalMessages || 0;
  if (chatStudent) {
    chatStudent.textContent = `${state.studentName || "Ученик"}, ${state.studentGrade || "5 класс"}`;
  }
  if (chatSubject) {
    chatSubject.textContent = `${subject.emoji} ${subject.name}`;
  }
  if (chatHero) {
    chatHero.textContent = `${subject.hero}`;
  }
  setMentorEmotion("happy");
  if (chatMode) {
    chatMode.textContent = state.selectedMode ? `${state.selectedMode.emoji} ${state.selectedMode.name}` : "—";
  }

  if (messages) {
    messages.innerHTML = "";
  }
  if (chatInput) {
    chatInput.value = "";
  }
  state.hasGreetedInChat = false;
  state.sessionMessages = 0;
  state.sessionXpGained = 0;
  if (parentReport) {
    parentReport.classList.add("parent-report--hidden");
  }

  if (medalValue) {
    medalValue.textContent = state.medalAwarded ? "Смекалка 🏅" : "Пока нет";
  }
  updateProgressUI();
  updateQuestUI();
  updateParentReport();
  saveProgress();
}

if (demoLessonBtn) {
  demoLessonBtn.addEventListener("click", () => {
    showScreen("onboarding");
  });
}

if (parentPreviewBtn) {
  parentPreviewBtn.addEventListener("click", () => {
    openParentModal();
  });
}

if (onboardingForm) {
  onboardingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = studentNameInput.value.trim();
    const grade = studentGradeInput.value.trim();
    const goal = learningGoalSelect.value;
    if (!name || !grade || !goal) {
      return;
    }

    state.studentName = name;
    state.studentGrade = grade;
    state.learningGoal = goal;
    saveProgress();
    showScreen("subject");
  });
}

if (backToSubjectBtn) {
  backToSubjectBtn.addEventListener("click", () => {
    showScreen("subject");
  });
}

if (changeHeroBtn) {
  changeHeroBtn.addEventListener("click", () => {
    if (!state.selectedSubject) {
      showScreen("subject");
      return;
    }

    renderHeroGallery();
    showScreen("hero");
  });
}

if (changeSubjectBtn) {
  changeSubjectBtn.addEventListener("click", () => {
    showScreen("subject");
  });
}

if (changeModeBtn) {
  changeModeBtn.addEventListener("click", () => {
    finalizePreviousSession();
    saveProgress();
    showScreen("mode");
  });
}

if (backToHeroBtn) {
  backToHeroBtn.addEventListener("click", () => {
    renderHeroGallery();
    showScreen("hero");
  });
}

if (softResetBtn) {
  softResetBtn.addEventListener("click", () => {
    const isConfirmed = window.confirm("Сбросить текущую сессию (без удаления достижений)?");
    if (!isConfirmed) {
      return;
    }

    softResetSession();
  });
}

if (resetProgressBtn) {
  resetProgressBtn.addEventListener("click", () => {
    const isConfirmed = window.confirm("Сбросить весь прогресс? Это действие нельзя отменить.");
    if (!isConfirmed) {
      return;
    }

    resetProgress();
  });
}

if (endLessonBtn) {
  endLessonBtn.addEventListener("click", () => {
    openLessonSummary();
  });
}

if (lessonContinueBtn) {
  lessonContinueBtn.addEventListener("click", () => {
    showScreen("mode");
  });
}

function revealOfferCard() {
  if (!offerCard) {
    return;
  }
  offerCard.classList.remove("offer-card--hidden");
  offerCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

if (ctaAiMentorBtn) {
  ctaAiMentorBtn.addEventListener("click", revealOfferCard);
}

if (ctaDemoBtn) {
  ctaDemoBtn.addEventListener("click", revealOfferCard);
}

if (parentModeBtn) {
  parentModeBtn.addEventListener("click", () => {
    openParentModal();
  });
}

if (closeParentModalBtn && parentModal) {
  closeParentModalBtn.addEventListener("click", () => {
    parentModal.classList.add("parent-modal--hidden");
    parentModal.setAttribute("aria-hidden", "true");
  });
}

if (parentModal) {
  parentModal.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList && target.classList.contains("parent-modal__backdrop")) {
      parentModal.classList.add("parent-modal--hidden");
      parentModal.setAttribute("aria-hidden", "true");
    }
  });
}

if (chatForm) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!chatInput) {
      return;
    }

    const text = chatInput.value.trim();
    if (!text || !state.selectedSubject) {
      return;
    }

    setMentorEmotion("thinking");
    addMessage("user", text);
    chatInput.value = "";
    runBotTurn(text);
  });
}

document.querySelectorAll(".quick-replies__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-quick");
    if (!text || !state.selectedSubject) {
      return;
    }
    setMentorEmotion("thinking");
    addMessage("user", text);
    runBotTurn(text);
  });
});

function initApp() {
  loadProgress();
  syncDailySession();
  mountParentDashboards();
  renderSubjectCards();
  renderModeCards();
  updateProgressUI();
  updateQuestUI();
  updateParentReport();
  updateParentModal();
  renderParentDashboard(startParentDashboard);

  if (studentNameInput) {
    studentNameInput.value = state.studentName;
  }
  if (studentGradeInput) {
    studentGradeInput.value = state.studentGrade;
  }
  if (learningGoalSelect) {
    learningGoalSelect.value = state.learningGoal;
  }

  showScreen("start");
  showAiQuoteToday();
  initDemoMessenger();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
