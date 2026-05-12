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
  math: "Математик-маг 🧙‍♂️ Тайные коды и +10 к логике — поехали!",
  russian: "Хранитель Слова 🛡️ Свитки и шпионы-ошибки — спасём буквы!",
  english: "Путешественник по языкам 🧭 Мини-диалоги и +1 к словарю!",
  history: "Проводник во времени ⏳ Миссии и медаль хроникёра!",
  biology: "Исследователь Жизни 🔬 Лаборатория на максимум!",
  geography: "Картограф 🗺️ Карта-сокровище ждёт!",
};

/*
  Короткие ответы в стиле героя (магия, свитки, путешествия, время, лаборатория, карта).
*/
const heroVoices = {
  math: {
    templates: [
      "Заклинание «РАЗ-КЛА-Д»: что дано → что ищем → один шаг. Тайный код любит порядок! ✨",
      "Руны задачи: сначала скобки и сильные знаки, потом остальное — как очередь в портал.",
      "Магия упрощения: выкинь лишнее из выражения, как лишний свиток из рюкзака.",
    ],
    buffs: ["+10 к силе логики!", "+5 к внимательности!", "Квестовый бонус: логика растёт!"],
  },
  russian: {
    templates: [
      "На свитке: корень — фундамент слова. Назови корень — и ты спас букву от ошибки!",
      "Шпион «Ошибка» прячется в окончании: прочитай фразу вслух — ухо подскажет.",
      "Новый свиток: выбери одно «колючее» слово — разберём по частям, шаг за шагом.",
    ],
    buffs: ["Ты спас букву! 📜", "Свиток засиял — правило ближе!", "Хранитель доволен: +1 к ясности!"],
  },
  english: {
    templates: [
      "Чек-ин: смысл → слова → короткая фраза. +1 к словарю путешественника!",
      "Мини-диалог: начни с I see / I think и одной мыслью по теме.",
      "Виза в Grammar: одно правило = один пример, как билет на новую станцию.",
    ],
    buffs: ["+1 к словарю путешественника!", "Новая стоянка: слово запомнилось!", "Штамп в паспорт знаний! ✈️"],
  },
  history: {
    templates: [
      "Миссия хроникёра: КТО — ГДЕ — КОГДА в трёх коротких словах.",
      "Портал времени: причина → событие → следствие — по одному звену цепи.",
      "Летопись: придумай мини-заголовок к событию — память любит истории.",
    ],
    buffs: ["Медаль хроникёра ближе! 🏅", "Эпоха открыта на щёлчок!", "+1 к знанию дат и причин!"],
  },
  biology: {
    templates: [
      "Лаборатория: кто герой — орган, клетка или процесс? Назови одного.",
      "Опыт: один факт «вау!» + пример из кухни, двора или питомца.",
      "Цепочка жизни: что за чем — опиши в одном коротком сообщении.",
    ],
    buffs: ["Пробирка светится — гипотеза верна!", "+1 к наблюдательности!", "Лабораторный бонус! 🔬"],
  },
  geography: {
    templates: [
      "Карта-сокровище: слой за слоем — климат, реки или соседи региона.",
      "Навигация: сравни два места как два вкуса мороженого — в чём отличие?",
      "Квест «пин на карте»: один яркий факт о месте — и контур прояснится.",
    ],
    buffs: ["Компас указывает на успех!", "+1 к чтению карты!", "Новый материк в коллекции! 🌍"],
  },
};

const DAILY_MISSIONS = {
  math: [
    "Сегодня помоги Математику-магу открыть Башню Дробей.",
    "Миссия: расшифровать тайный код одной задачи без спешки.",
    "Квест дня: три маленьких шага логики — и портал «понял» откроется.",
  ],
  russian: [
    "Сегодня с Хранителем Слова защити один свиток от шпиона Ошибки.",
    "Миссия: спасти одну букву через правило или корень слова.",
    "Квест дня: прочитать вслух одну фразу и поймать подсказку уха.",
  ],
  english: [
    "Сегодня с Путешественником: новая станция — три слова по теме.",
    "Миссия: один мини-диалог на английском (2 короткие реплики).",
    "Квест дня: +1 к словарю — выучи и используй одно новое слово.",
  ],
  history: [
    "Сегодня с Проводником: одна историческая миссия «кто-где-когда».",
    "Миссия: составить мини-заголовок к событию, как хроникёр.",
    "Квест дня: цепочка причина → событие → следствие в трёх словах.",
  ],
  biology: [
    "Сегодня в лаборатории Исследователя: один факт и один пример из жизни.",
    "Миссия: назвать главного героя в вопросе — орган, клетка или процесс.",
    "Квест дня: объяснить другу на пальцах, как работает «эта штука» в теле.",
  ],
  geography: [
    "Сегодня с Картографом: отметить на карте мысленно один регион и его климат.",
    "Миссия: сравнить два места одним предложением.",
    "Квест дня: найти «соседа» страны или материка на карте в голове.",
  ],
};

const QUEST_FLARES = [
    "Щёлк — чекпоинт сохранён!",
    "Опыт капает… кап… кап!",
    "Лут сундука: уверенность +1!",
    "Квестовая цепь не рвётся — ты в теме!",
    "Бафф «Упорство» активирован!",
    "Счётчик смелости растёт!",
  ];

const QUICK_PHRASES = ["Объясни проще", "Дай пример", "Дай задание"];

const LESSON_MOTIVATIONS = [
  "Ты не сдаёшься — это главный суперскилл героя.",
  "Каждый вопрос — ключ от следующей двери квеста.",
  "Так держать: мозг как мышца, ты её прокачал!",
  "Урок закончен, а приключение продолжается.",
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
};

const STORAGE_KEY = "ai-school-quest-progress-v1";

const lessonModes = [
  { id: "quest", name: "Квест", emoji: "🗺️", subtitle: "Формат миссий и заданий" },
  { id: "test", name: "Тест", emoji: "✅", subtitle: "Вопросы с вариантами ответа" },
  { id: "simple", name: "Объясни простыми словами", emoji: "🧩", subtitle: "Коротко и с примером" },
  { id: "homework", name: "Помощь с домашкой", emoji: "📘", subtitle: "Подсказки через вопросы" },
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
const reportSessionLead = document.getElementById("report-session-lead");
const reportXpTotal = document.getElementById("report-xp-total");
const reportXpSession = document.getElementById("report-xp-session");
const reportLevel = document.getElementById("report-level");
const reportXpBarFill = document.getElementById("report-xp-bar-fill");
const reportXpBarWrap = document.getElementById("report-xp-bar-wrap");
const reportMessagesSession = document.getElementById("report-messages-session");
const reportMessagesTotal = document.getElementById("report-messages-total");
const reportRepeat = document.getElementById("report-repeat");
const reportNextHint = document.getElementById("report-next-hint");
const reportStrengthsList = document.getElementById("report-strengths-list");
const reportPlanList = document.getElementById("report-plan-list");
const contactNataliaBtn = document.getElementById("contact-natalia-btn");
const offerCard = document.getElementById("offer-card");
const parentModal = document.getElementById("parent-modal");
const closeParentModalBtn = document.getElementById("close-parent-modal-btn");
const parentStudentName = document.getElementById("parent-student-name");
const parentCurrentSubject = document.getElementById("parent-current-subject");
const parentCurrentMode = document.getElementById("parent-current-mode");
const parentSessionProgress = document.getElementById("parent-session-progress");
const parentWeakTopics = document.getElementById("parent-weak-topics");
const parentPlanList = document.getElementById("parent-plan-list");
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
    `День 1: мини-диагностика по теме "${subjectName}" (10-12 минут).`,
    `День 2: короткое объяснение + 3 практических примера (${goal.toLowerCase()}).`,
    "День 3: тренировка в формате вопросов и ответов с проверкой ошибок.",
    "День 4: повторение сложных мест из прошлых сообщений.",
    "День 5: мини-тест на закрепление (5 вопросов).",
    "День 6: разбор типичных ошибок и стратегия на контрольную/домашку.",
    "День 7: итоговый квест-урок и проверка прогресса.",
  ];
}

/*
  Обновляем контент модального окна родительского режима.
*/
function updateParentModal() {
  if (!parentStudentName || !parentPlanList) {
    return;
  }

  parentStudentName.textContent = `${state.studentName || "Ученик"} (${state.studentGrade || "5 класс"})`;
  parentCurrentSubject.textContent = state.selectedSubject ? state.selectedSubject.name : "—";
  parentCurrentMode.textContent = state.selectedMode ? state.selectedMode.name : "—";

  const sessionsCount = state.sessionHistory.length;
  const avgXp = sessionsCount
    ? Math.round(state.sessionHistory.reduce((sum, entry) => sum + (Number(entry.xp) || 0), 0) / sessionsCount)
    : 0;
  parentSessionProgress.textContent = `Сессий: ${sessionsCount}, средний XP за сессию: ${avgXp}`;

  const sortedTopics = Object.entries(state.weakTopics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map((entry) => entry[0]);
  parentWeakTopics.textContent = sortedTopics.length ? sortedTopics.join(", ") : "Пока недостаточно данных";

  const planItems = buildWeeklyPlan();
  parentPlanList.innerHTML = "";
  planItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    parentPlanList.append(li);
  });
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

  addMessage("system", "Текущая сессия сброшена. Достижения и серия дней сохранены.");
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
    "Хорошо 🙂 Представь задачу как карту: сначала отметь «X» — где ты сейчас (что уже дано в условии), потом «сокровище» — чего хочешь добиться. Что написано в задаче в самом начале?",
  "Дай пример":
    "Маленький пример не из твоего номера: если 12 наклеек делят на 4 альбома поровну, в каждом по 3. Тот же дух — делим целиком, а не наугад.",
  "Дай задание":
    "Мини-квест на 2 минуты: одной фразой напиши «что непонятно» и одну свою догадку. Я отвечу следующим маленьким шагом — без готового ответа.",
};

/*
  Вставка сообщения в стиле мессенджера (пузыри, для бота — аватар).
*/
function appendChatBubble(container, type, text, options = {}) {
  if (!container) {
    return;
  }

  const botEmoji = options.botEmoji || (state.selectedSubject ? state.selectedSubject.heroEmoji : "✨");

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
    av.className = "msg-row__avatar";
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

function initDemoMessenger() {
  const feed = document.getElementById("demo-messenger-feed");
  if (!feed) {
    return;
  }

  feed.innerHTML = "";
  appendChatBubble(feed, "user", "Я не понимаю задачу по математике.");
  appendChatBubble(
    feed,
    "bot",
    "Давай разберём вместе. Я не дам готовый ответ сразу, но помогу тебе дойти до него шаг за шагом",
    { botEmoji: "🧙‍♂️" }
  );

  document.querySelectorAll("[data-demo-quick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-demo-quick");
      if (!label || !Object.prototype.hasOwnProperty.call(DEMO_MESSENGER_REPLIES, label)) {
        return;
      }
      appendChatBubble(feed, "user", label);
      window.setTimeout(() => {
        appendChatBubble(feed, "bot", DEMO_MESSENGER_REPLIES[label], { botEmoji: "🧙‍♂️" });
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
      ? `Ежедневная миссия: ${getDailyMissionLine()}`
      : `Ежедневная миссия: зайди в квест и выбери предмет — откроется персональная цель дня.`;
  }

  if (achievementText) {
    if (state.achievements.length > 0) {
      const latest = state.achievements[state.achievements.length - 1];
      achievementText.textContent = `Достижение: ${latest}`;
    } else {
      achievementText.textContent = "Достижение: пока нет";
    }
  }
}

/*
  Короткий список сильных сторон для родительской панели.
*/
function buildParentStrengthBullets() {
  const out = [];

  if (state.medalAwarded) {
    out.push("Настойчивость: есть медаль «Смекалка» за активную работу в чате.");
  }
  if (state.streakDays >= 2) {
    out.push(`Регулярность: серия занятий ${state.streakDays} дн. — хорошая привычка возвращаться к уроку.`);
  }
  if (state.dailyGoalCount >= 3) {
    out.push("Сегодня выполнена ежедневная цель по сообщениям в чате.");
  } else if (state.dailyGoalCount >= 1) {
    out.push("Есть движение к ежедневной цели — ребёнок не останавливается на одном ответе.");
  }
  if (state.totalMessages >= 10) {
    out.push("Любознательность: много вопросов наставнику — учится через диалог, а не зубрёжку.");
  } else if (state.totalMessages >= 5) {
    out.push("Задаёт уточнения и продолжает тему — это как раз формат «без списывания».");
  }

  state.achievements.slice(-3).forEach((title) => {
    if (!out.includes(title)) {
      out.push(title);
    }
  });

  const uniq = [...new Set(out)].slice(0, 6);
  if (uniq.length === 0) {
    return ["Ребёнок ведёт диалог с наставником своими словами — так и задумано: без готовых ответов."];
  }
  return uniq;
}

/*
  Родительский отчёт:
  показываем после 3 сообщений ученика и обновляем динамически.
*/
function updateParentReport() {
  if (
    !parentReport ||
    !reportSessionLead ||
    !reportXpTotal ||
    !reportXpSession ||
    !reportLevel ||
    !reportXpBarFill ||
    !reportMessagesSession ||
    !reportMessagesTotal ||
    !reportRepeat ||
    !reportNextHint ||
    !reportStrengthsList ||
    !reportPlanList
  ) {
    return;
  }

  if (state.totalMessages < 3) {
    parentReport.classList.add("parent-report--hidden");
    return;
  }

  const subj = state.selectedSubject ? state.selectedSubject.name : "предмет не выбран";
  const mode = state.selectedMode ? state.selectedMode.name : "режим не выбран";
  const child = state.studentName || "Ребёнок";
  reportSessionLead.textContent = `${child} · ${subj} · режим «${mode}»`;

  reportXpTotal.textContent = String(state.xp);
  reportXpSession.textContent = String(state.sessionXpGained);
  reportMessagesSession.textContent = String(state.sessionMessages);
  reportMessagesTotal.textContent = String(state.totalMessages);

  const level = Math.floor(state.xp / 50) + 1;
  reportLevel.textContent = String(level);
  const progressToNextLevel = state.xp % 50;
  const widthPercent = (progressToNextLevel / 50) * 100;
  reportXpBarFill.style.width = `${widthPercent}%`;
  if (reportXpBarWrap) {
    reportXpBarWrap.setAttribute("aria-valuenow", String(Math.round(progressToNextLevel)));
  }

  reportStrengthsList.innerHTML = "";
  buildParentStrengthBullets().forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    reportStrengthsList.append(li);
  });

  const sortedTopics = Object.entries(state.weakTopics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map((entry) => entry[0]);
  reportRepeat.textContent = sortedTopics.length
    ? `Повторить спокойно темы: ${sortedTopics.join(", ")} — там больше всего запросов на подсказку.`
    : `Закрепить базу по «${subj}»: коротко проговорить правило и решить 2 типовых примера без спешки.`;

  const goal = state.learningGoal || "подтянуть знания";
  reportNextHint.textContent = `Ближайший шаг: 10–15 минут «${subj}», упор на «${goal}» — сначала спросить «что уже понятно?», затем один квест-шаг или пересказ условия своими словами.`;

  const planItems = buildWeeklyPlan();
  reportPlanList.innerHTML = "";
  planItems.forEach((item) => {
    const li = document.createElement("li");
    const m = item.match(/^День \d+:/);
    if (m) {
      const head = m[0];
      const rest = item.slice(head.length).trim();
      const strong = document.createElement("strong");
      strong.textContent = head;
      li.append(strong, ` ${rest}`);
    } else {
      li.textContent = item;
    }
    reportPlanList.append(li);
  });

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
  addMessage("system", `Новое достижение: ${title}`);
}

function checkAchievements() {
  if (state.dailyGoalCount >= 3) {
    grantAchievement("Ежедневная цель выполнена ✅");
  }
  if (state.streakDays >= 3) {
    grantAchievement("Стабильный ученик: серия 3 дня 🔥");
  }
  if (state.totalMessages >= 10) {
    grantAchievement("Любознательный исследователь: 10 вопросов 💡");
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
    addMessage("system", "Ты получил медаль за смекалку!");
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
    `${n}, ты в игре — не на экзамене. Вперёд!`,
    `Класс, ${n}! Маленький шаг = большой квест.`,
    `${n}, держись — наставник на связи.`,
  ];
  const cheer = cheers[body.length % cheers.length];

  if (modeId === "homework") {
    return `${cheer}\n${body}`;
  }

  const closing =
    modeId === "test"
      ? "A / B / C или одна фраза «думаю так, потому что…»"
      : "Один короткий ответ — следующий квест-шаг!";

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
    return `${text}\n→ ${name}, одним сообщением: что прояснилось / что ещё туманит?`;
  };

  if (phrase === "Объясни проще") {
    if (modeId === "homework") {
      return `${name}, без списывания 💬 ① Перескажи номер двумя фразами. ② «Колючка» — одним словом. Жду — и дам простой перевод.`;
    }
    const hints = {
      math: "Заклинание «ПРОЩЕ»: что дано / что ищем — двумя словами. Тайный код любит ясность!",
      russian: "Свиток: одно слово-загадка — разберём корень, ты спасёшь букву от ошибки.",
      english: "Маршрут: смысл → одно слово English. Мини-фраза welcome!",
      history: "Хроникёр: КТО-ГДЕ-КОГДА в трёх словах — и эпоха станет ближе.",
      biology: "Лаборатория: один странный термин — объясним как про запчасть в игре.",
      geography: "Компас: один слой карты (климат или соседи) — и регион оживёт.",
    };
    return wrapQuick(hints[id] || hints.math);
  }

  if (phrase === "Дай пример") {
    if (modeId === "homework") {
      return `${name}, готовый номер не скажу. ① Числа / слова / факты? ② Тема одним словом — придумаю «тренажёр-аналог».`;
    }
    const examples = {
      math: "Руна-пример: 12 конфет ÷ 3 друга = по 4. Дух дробей: делим поровну!",
      russian: "Свиток: «бежать» — глагол, «бег» — существительное. Услышь разницу вслух.",
      english: "Штамп: I like → she likes. Щёлк — форма сменилась!",
      history: "Портал: причина → событие → следствие. Как цепочка квеста.",
      biology: "Опыт: сердце = насос в аквариуме для рыбок-клеток.",
      geography: "Два климата — как два вкуса мороженого: где влажнее?",
    };
    return wrapQuick(examples[id] || examples.math);
  }

  if (phrase === "Дай задание") {
    if (modeId === "homework") {
      return `${name}, квест без списывания: ① что найти? ② одна догадка. ③ чего не хватает: формула / слово / факт?`;
    }
    return wrapQuick(`Мини-квест «${topic}» 3 мин: ① знаю… ② непонятно… ③ полу-ответ. Одним сообщением!`);
  }

  return withCoachTone(generateBotReply(id), name, modeId);
}

function generateModeAwareReply(userText) {
  if (!state.selectedSubject || !state.selectedMode) {
    return "Я рядом! Давай начнём с выбора предмета и режима урока.";
  }

  if (isQuickPhrase(userText)) {
    return generateQuickReply(userText.trim());
  }

  const baseReply = generateBotReply(state.selectedSubject.id);
  const modeId = state.selectedMode.id;
  const name = state.studentName || "исследователь";

  if (modeId === "quest") {
    const core = `Квест «${state.selectedSubject.name}» 🗺️ Чекпоинт! ${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "test") {
    const core =
      `Арена «${state.selectedSubject.name}»! A / B / C — выбери и скажи «почему так» в одной фразе.\n` +
      `${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "simple") {
    const core = `Простыми словами 🧩 ① суть ② без сложных слов ③ на пальцах.\n${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  const snippet = userText.slice(0, 48).trim() || "тема";
  const hw =
    `${name}, домашка — босс без «списывания». Готового ответа не дам.\n` +
    `① «Туман» в номере — одним словом?\n② Что уже ясно на капельку?\n③ Микро-шаг на 2 минуты?\n` +
    `(Про: «${snippet}…») Ответь по пунктам — подсвечу дальше вопросами.`;
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
      addMessage(
        "bot",
        `${heroGreetings[state.selectedSubject.id]} ${introName}, твоя цель: ${state.learningGoal || "учиться в игре"}!`
      );
      state.hasGreetedInChat = true;
    }

    const reply = buildBotReply(userText);
    addMessage("bot", reply);

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
    window.alert("Напиши наставнику хотя бы одно сообщение — потом можно закрыть квест урока.");
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
    lessonMedalText.textContent = state.medalAwarded ? "Смекалка" : "Пока без медали — гони XP в следующем квесте!";
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
    chatHero.textContent = `${subject.heroEmoji} ${subject.hero}`;
  }
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

if (contactNataliaBtn && offerCard) {
  contactNataliaBtn.addEventListener("click", () => {
    offerCard.classList.remove("offer-card--hidden");
    offerCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
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
    addMessage("user", text);
    runBotTurn(text);
  });
});

function initApp() {
  loadProgress();
  syncDailySession();
  renderSubjectCards();
  renderModeCards();
  updateProgressUI();
  updateQuestUI();
  updateParentReport();
  updateParentModal();

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
  initDemoMessenger();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
