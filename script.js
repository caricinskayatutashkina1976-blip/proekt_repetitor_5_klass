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
  },
  {
    id: "russian",
    name: "Русский язык",
    emoji: "📚",
    hero: "Хранитель Слова",
    heroEmoji: "🛡️",
  },
  {
    id: "english",
    name: "Английский язык",
    emoji: "🇬🇧",
    hero: "Путешественник по Миру Языков",
    heroEmoji: "🧭",
  },
  {
    id: "history",
    name: "История",
    emoji: "🏺",
    hero: "Проводник во Времени",
    heroEmoji: "⏳",
  },
  {
    id: "biology",
    name: "Биология",
    emoji: "🧬",
    hero: "Исследователь Жизни",
    heroEmoji: "🔬",
  },
  {
    id: "geography",
    name: "География",
    emoji: "🗺️",
    hero: "Картограф Приключений",
    heroEmoji: "🧭",
  },
];

const heroGreetings = {
  math: "Привет, ученик! Я Математик-маг. Сегодня мы расколдуем задачи и превратим цифры в победу! ✨",
  russian:
    "Здравствуй! Я Хранитель Слова. Вместе мы сделаем речь красивой, а правила — понятными! ✍️",
  english:
    "Hello, explorer! Я Путешественник по Миру Языков. Let's learn English step by step! 🌍",
  history:
    "Приветствую, юный исследователь! Я Проводник во Времени, и нас ждут великие эпохи! 🕰️",
  biology:
    "Привет! Я Исследователь Жизни. Готов отправиться в мир клеток, растений и удивительных существ? 🌱",
  geography:
    "Привет, путешественник! Я Картограф Приключений. Откроем страны, материки и секреты планеты! 🌎",
};

const responseTemplates = {
  math: [
    "Представь, что числа — это кубики LEGO: сначала собери «основание» из того, что дано, потом докинь одну деталь-действие. Шаг 1: что уже известно? Шаг 2: что ищем? Ты почти у финишной черты! 🧮",
    "Супер-ход! Математика любит порядок, как очередь в автобусе: сначала скобки, потом сильные действия, потом остальное. Сделай один маленький шаг — и расскажи, что получилось. ⚡",
    "Ты как маг с волшебной палочкой — только палочка это логика! Подсказка: иногда выражение можно «облегчить», как рюкзак перед походом. Попробуй упростить и снова взгляни на задачу. ✨",
  ],
  russian: [
    "Слово — как дом: есть корень (фундамент), приставка (крыльцо), суффикс (окошки). Сначала найди «фундамент», потом правило станет дружелюбнее. 📖",
    "Отличный вопрос! Прочитай фразу вслух, как будто ты диктор на радио: ухо часто подсказывает, где буква прячется. Потом проверим правило вместе. 📝",
    "Ты молодец! Русский язык — как тренажёр: один повтор — и мышца памяти крепче. Выбери одно слово и разберём его по частям, шаг за шагом. 🎯",
  ],
  english: [
    "Think of English like a treasure map: first find the «X» (meaning), then the path (words), then the flag (sentence). Try one short sentence — I'll cheer you on! 🇬🇧",
    "Awesome! Words are like stickers: first stick the meaning, then the sound, then the whole phrase. Tiny steps = big win. 🚀",
    "Nice! Let's play «three words»: write three simple words on this topic — like collecting coins in a game. 🌟",
  ],
  history: [
    "История — как сериал: кто герой, где сцена, в какой серии (год) случился поворот? Нарисуй в голове постер: КТО — ГДЕ — КОГДА — и сюжет запомнится легче. 🗞️",
    "Сильно! Причины и последствия — как домино: одно падает — движется цепочка. Назови по одному «камешку» причины и одному «камешку» следствия. 🏛️",
    "Представь, что ты журналист в прошлом: сделай мини-заголовок к событию. Заголовки цепляют память лучше, чем сухие даты. 📜",
  ],
  biology: [
    "Биология — как зоопарк в голове: у каждого «животного» (органа) своя будка и работа. Спроси себя: что это? из чего сделано? зачем нужно? 🔍",
    "Класс! Организм — команда супергероев: сердце — доставка, лёгкие — ветер в парусах. Кто в твоём вопросе главный герой? 🧠",
    "Супер! Давай как в научном шоу: один факт «вау!» и один пример из жизни (кухня, двор, питомец) — и тема оживёт. 🌿",
  ],
  geography: [
    "География — как пазл планеты: сначала материк, потом страна, потом климат «одень» регион в погоду. Карта в голове станет ярче! 🧭",
    "Отлично! Запоминай место как персонажа: какая у него «одежда» (природа), какой «характер» (климат), какой «факт-анекдот»? 🌦️",
    "Сравни два места, как два мороженых вкуса: чем похожи шарики, чем отличаются посыпки? Сравнение — суперсила географа. 🗺️",
  ],
};

const QUICK_PHRASES = ["Объясни проще", "Дай пример", "Дай задание"];

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

const dailyTasks = [
  "Задай наставнику 3 вопроса и получи бонус опыта.",
  "Объясни одну тему своими словами в 2-3 предложениях.",
  "Попроси наставника проверить мини-упражнение.",
  "Спроси о сложном слове или термине и приведи пример.",
];

// Получаем ссылки на DOM-элементы, с которыми будем работать.
const screens = {
  start: document.getElementById("screen-start"),
  onboarding: document.getElementById("screen-onboarding"),
  subject: document.getElementById("screen-subject"),
  hero: document.getElementById("screen-hero"),
  mode: document.getElementById("screen-mode"),
  chat: document.getElementById("screen-chat"),
};

const startBtn = document.getElementById("start-btn");
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
const reportWhatDone = document.getElementById("report-what-done");
const reportXpTotal = document.getElementById("report-xp-total");
const reportXpSession = document.getElementById("report-xp-session");
const reportRepeat = document.getElementById("report-repeat");
const reportNextLesson = document.getElementById("report-next-lesson");
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
      renderHeroCard(subject);
      showScreen("hero");
    });

    subjectGrid.append(button);
  });
}

/*
  На экране героя мы показываем только наставника,
  который соответствует выбранному предмету.
*/
function renderHeroCard(subject) {
  if (!heroGrid) {
    return;
  }
  heroGrid.innerHTML = "";

  const heroButton = document.createElement("button");
  heroButton.type = "button";
  heroButton.className = "choice-card";
  heroButton.innerHTML = `
    <div class="choice-card__emoji">${subject.heroEmoji}</div>
    <div class="choice-card__title">${subject.hero}</div>
    <div class="choice-card__subtitle">${subject.emoji} ${subject.name}</div>
  `;

  heroButton.addEventListener("click", () => {
    state.selectedSubject = subject;
    showScreen("mode");
  });

  heroGrid.append(heroButton);
}

/*
  Добавляем сообщение в чат.
  type:
  - "user"   => сообщение ребёнка
  - "bot"    => сообщение наставника
  - "system" => техническое/наградное сообщение
*/
function addMessage(type, text) {
  if (!messages) {
    return;
  }
  const message = document.createElement("div");
  message.className = `message message--${type}`;
  message.textContent = text;
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
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

  const taskIndex = new Date().getDate() % dailyTasks.length;
  if (dailyTaskText) {
    dailyTaskText.textContent = `Задание дня: ${dailyTasks[taskIndex]}`;
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
  Родительский отчёт:
  показываем после 3 сообщений ученика и обновляем динамически.
*/
function updateParentReport() {
  if (!parentReport || !reportWhatDone || !reportXpTotal || !reportXpSession || !reportRepeat || !reportNextLesson) {
    return;
  }

  if (state.totalMessages < 3) {
    parentReport.classList.add("parent-report--hidden");
    return;
  }

  const subj = state.selectedSubject ? state.selectedSubject.name : "предмет не выбран";
  const mode = state.selectedMode ? state.selectedMode.name : "режим не выбран";
  const child = state.studentName || "Ребёнок";
  reportWhatDone.textContent = `${child}: в этой сессии ${state.sessionMessages} сообщ. наставнику по «${subj}» (режим «${mode}»). За всё время в чате — ${state.totalMessages} сообщ.`;

  reportXpTotal.textContent = String(state.xp);
  reportXpSession.textContent = String(state.sessionXpGained);

  const sortedTopics = Object.entries(state.weakTopics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map((entry) => entry[0]);
  reportRepeat.textContent = sortedTopics.length
    ? `Повторить спокойно темы: ${sortedTopics.join(", ")} — там больше всего «запросов на подсказку».`
    : `Закрепить базу по «${subj}»: коротко проговорить правило и решить 2 типовых примера без спешки.`;

  const goal = state.learningGoal || "подтянуть знания";
  reportNextLesson.textContent = `На следующий урок: 10–15 минут «${subj}», упор на «${goal}» — начать с мини-вопроса к ребёнку «что уже понятно?», затем один квест-шаг или пересказ условия своими словами.`;

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
  const templates = responseTemplates[subjectId];
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
}

/*
  Оборачиваем ответ: короткая поддержка + вопрос в конце (кроме домашки — там свой сценарий).
*/
function withCoachTone(body, name, modeId) {
  const n = name || "герой";
  const hearts = [
    `Я с тобой, ${n} — это как чекпоинт в игре, не экзамен.`,
    `${n}, ты уже молодец: вопрос задан — половина уровня пройдена.`,
    `${n}, дышим ровно: учимся маленькими прыжками, как в платформере.`,
  ];
  const heart = hearts[body.length % hearts.length];

  if (modeId === "homework") {
    return `${heart}\n\n${body}`;
  }

  const closing =
    modeId === "test"
      ? "Напиши букву A/B/C или одну фразу «я думаю так, потому что…» — сомнения тоже засчитыются."
      : "Твой ход: ответь одним коротким сообщением на любой вопрос из текста выше — так мы откроем следующий «сундук» с подсказкой.";

  return `${heart}\n\n${body}\n\n${closing}`;
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
    return `${text}\n\n${name}, твой ход: одно короткое сообщение — что стало понятнее или что всё ещё «крутит в голове»?`;
  };

  if (phrase === "Объясни проще") {
    if (modeId === "homework") {
      return `${name}, держусь рядом 💬 Готовую строчку из тетради не скажу — это не честный квест.\nШаг 1: перескажи условие своими словами (2 предложения).\nШаг 2: что в задании «самое колючее» — одним словом?\nОтветь на шаги — и я дам объяснение ещё проще, под тебя.`;
    }
    const hints = {
      math: "Представь задачу как рецепт торта: что за ингредиенты уже на столе? Что должно получиться в конце? Мы уберём «сложные слова» и оставим только два шага.",
      russian: "Представь правило как дорожный знак: сначала «стоп» — что нельзя, потом «можно» — как сказать правильно. Скажи вслух одно слово, которое путает — и разберём его по кирпичикам.",
      english: "English can be like a sticker album: first picture (meaning), then letters (spelling), then a tiny phrase. Pick one word you like — we’ll make it super easy.",
      history: "История как комикс: один кадр = одно событие. Кто в кадре? что делает? что изменилось после? Ответь в трёх словах — и станет проще.",
      biology: "Живое = конструктор: из каких деталей собрано и зачем каждая деталь? Назови одну часть, которая кажется странной — «размагичим» её простыми словами.",
      geography: "Карта как платье на кукле: слои — климат, реки, города. Что наденем первым на твой регион? Один слой — и картинка прояснится.",
    };
    return wrapQuick(hints[id] || hints.math);
  }

  if (phrase === "Дай пример") {
    if (modeId === "homework") {
      return `${name}, супер-запрос! Готовый ответ из твоего номера не подкину — зато соберём «тренажёр-аналог».\nШаг 1: это ближе к числам, к словам или к фактам?\nШаг 2: назови тему одним словом (дроби, падеж, даты…).\nПосле ответа придумаю пример из другой вселенной — тот же принцип, но не списать.`;
    }
    const examples = {
      math: "Пример-мишка: если 12 конфет поделить на 3 друга — у каждого по 4. Тот же дух, что и в дробях: «делим поровну, считаем по одному кусочку».",
      russian: "Пример: «бежать» — глагол, «бег» — существительное. Как музыка и песня: одно звучит, другое — название трека.",
      english: "Mini-example: «I like cats» → «She likes cats». Маленькое правило, как переключатель света: щёлк — и форма слова меняется.",
      history: "Пример-лестница: причина → событие → следствие. Как «забыли полить цветок» → «цветок устал» → «листья поникли».",
      biology: "Пример: сердце — как насос в аквариуме: качает «воду-кровь», чтобы рыбки-клетки дышали и плавали веселее.",
      geography: "Пример: у побережья климат «как с мокрым полотенцем», в центре материка — «как под сухим одеялом». Влажность разная — природа разная.",
    };
    return wrapQuick(examples[id] || examples.math);
  }

  if (phrase === "Дай задание") {
    if (modeId === "homework") {
      return `${name}, квест «без списывания»:\n① Подчеркни в номере, что именно нужно найти.\n② Напиши одну догадку — пусть даже неверную.\n③ Скажи, чего не хватает: формула / слово / факт?\nЯ подсвечу следующий крошечный шаг — финальный ответ остаётся твоим трофеем.`;
    }
    return wrapQuick(
      `Мини-квест 3 минуты по «${topic}» 🎮\n① Одно предложение: «что я уже знаю».\n② Один вопрос: «что туманит».\n③ Полу-угадка ответа — как скетч, не шедевр.\nНапиши всё в одном сообщении — я отреагирую и дам следующий этап!`
    );
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
    const core = `Квест «${state.selectedSubject.name}» 🗺️ Точка сохранения! Миссия — один короткий шаг, как прыжок на платформе.\n\n${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "test") {
    const core =
      `Арена «${state.selectedSubject.name}»! Викторина без стресса — сначала думаем, потом буква.\n` +
      `A) Первый вариант\nB) Второй вариант\nC) Третий вариант\n\n` +
      `Подсказка: не обязано быть идеально — важно, чтобы голова пошевелилась.`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "simple") {
    const core = `Режим «простыми словами» 🧩 Три коротких шага:\n① Смотрим на суть.\n② Убираем сложные слова.\n③ Пробуем на пальцах.\n\n${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  const snippet = userText.slice(0, 55).trim() || "эта тема";
  const hw =
    `${name}, домашка — это босс-уровень, но мы с чит-кодом «без списывания».\n` +
    `Я как фонарик: подсвечу тропинку, но финальный «лут» — твой.\n\n` +
    `Шаг 1: что в задании для тебя «туман» — одним словом?\n` +
    `Шаг 2: какая крошечная деталь уже ясна хотя бы на капельку?\n` +
    `Шаг 3: какой микро-шаг сделаешь за 2 минуты — перечитать, набросать, посчитать в уме?\n\n` +
    `(Про твой вопрос: «${snippet}…») Ответь на три шага — и подстрою следующую подсказку вопросами, без готового решения.`;
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

if (startBtn) {
  startBtn.addEventListener("click", () => {
    showScreen("onboarding");
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

    renderHeroCard(state.selectedSubject);
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

if (contactNataliaBtn && offerCard) {
  contactNataliaBtn.addEventListener("click", () => {
    offerCard.classList.remove("offer-card--hidden");
    offerCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

if (parentModeBtn && parentModal) {
  parentModeBtn.addEventListener("click", () => {
    updateParentModal();
    parentModal.classList.remove("parent-modal--hidden");
    parentModal.setAttribute("aria-hidden", "false");
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
