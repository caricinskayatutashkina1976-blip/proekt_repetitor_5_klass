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
    "Отличный вопрос! Давай разложим задачу на шаги: сначала найди известные числа, потом выбери действие. Ты справишься! 🧮",
    "Супер ход! В математике главное — порядок действий. Попробуй решить первый шаг и напиши, что получилось. ⚡",
    "Класс! Ты уже как настоящий маг чисел. Подсказка: проверь, можно ли упростить выражение перед вычислением. ✨",
  ],
  russian: [
    "Отличная попытка! Секрет русского языка: сначала определи часть речи, потом правило. 📖",
    "Прекрасный вопрос! Давай вместе: выделим корень слова и проверим орфограмму. 📝",
    "Ты молодец! Чтобы не ошибиться, прочитай предложение вслух и проверь, как звучит слово. 🎯",
  ],
  english: [
    "Great effort! Try making a short sentence with this word. I will check it with you! 🇬🇧",
    "Awesome! Small steps win: first meaning, then pronunciation, then sentence. 🚀",
    "Nice question! Let's practice together: write 3 simple words on this topic. 🌟",
  ],
  history: [
    "Интересный вопрос! Представь, что ты репортёр той эпохи: кто, где и когда? Это помогает запомнить. 🗞️",
    "Отлично! В истории важны причины и последствия. Попробуй назвать по одному пункту каждого. 🏛️",
    "Сильный ход! Запоминай события как сюжет приключения — так даты учатся легче. 📜",
  ],
  biology: [
    "Крутой вопрос! В биологии помогает схема: что это, как устроено, какую функцию выполняет. 🔍",
    "Отлично думаешь! Представь организм как команду, где у каждого органа своя роль. 🧠",
    "Супер! Давай закрепим: назови один факт и один пример из жизни. 🌿",
  ],
  geography: [
    "Замечательный вопрос! Начни с карты: материк, страна, климат — и картина сразу яснее. 🧭",
    "Класс! Чтобы запомнить место, свяжи его с природой, погодой и интересным фактом. 🌦️",
    "Отличная работа! География любит сравнения: чем похожи и чем отличаются регионы? 🗺️",
  ],
};

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
const reportSubject = document.getElementById("report-subject");
const reportActivity = document.getElementById("report-activity");
const reportXp = document.getElementById("report-xp");
const reportRecommendation = document.getElementById("report-recommendation");
const showOfferBtn = document.getElementById("show-offer-btn");
const offerCard = document.getElementById("offer-card");
const parentModal = document.getElementById("parent-modal");
const closeParentModalBtn = document.getElementById("close-parent-modal-btn");
const parentStudentName = document.getElementById("parent-student-name");
const parentCurrentSubject = document.getElementById("parent-current-subject");
const parentCurrentMode = document.getElementById("parent-current-mode");
const parentSessionProgress = document.getElementById("parent-session-progress");
const parentWeakTopics = document.getElementById("parent-weak-topics");
const parentPlanList = document.getElementById("parent-plan-list");

/*
  Функция переключения экранов.
  Убираем класс активности у всех и добавляем только нужному экрану.
*/
function showScreen(screenKey) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("screen--active");
  });
  screens[screenKey].classList.add("screen--active");
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

  chatStudent.textContent = "—";
  chatSubject.textContent = "—";
  chatHero.textContent = "—";
  chatMode.textContent = "—";
  medalValue.textContent = "Пока нет";
  messages.innerHTML = "";
  chatInput.value = "";
  parentReport.classList.add("parent-report--hidden");
  offerCard.classList.add("offer-card--hidden");
  parentModal.classList.add("parent-modal--hidden");

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

  medalValue.textContent = "Пока нет";
  messages.innerHTML = "";
  chatInput.value = "";
  parentReport.classList.add("parent-report--hidden");

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
  const message = document.createElement("div");
  message.className = `message message--${type}`;
  message.textContent = text;
  messages.append(message);

  // Автопрокрутка вниз, чтобы всегда видеть последнее сообщение.
  messages.scrollTop = messages.scrollHeight;
}

/*
  Рисуем квестовую информацию:
  - серия дней
  - прогресс ежедневной цели (3 сообщения)
  - последнее полученное достижение
*/
function updateQuestUI() {
  streakValue.textContent = String(state.streakDays);
  dailyGoalValue.textContent = `${state.dailyGoalCount}/3`;

  const taskIndex = new Date().getDate() % dailyTasks.length;
  dailyTaskText.textContent = `Задание дня: ${dailyTasks[taskIndex]}`;

  if (state.achievements.length > 0) {
    const latest = state.achievements[state.achievements.length - 1];
    achievementText.textContent = `Достижение: ${latest}`;
  } else {
    achievementText.textContent = "Достижение: пока нет";
  }
}

/*
  Родительский отчёт:
  показываем после 3 сообщений ученика и обновляем динамически.
*/
function updateParentReport() {
  reportSubject.textContent = state.selectedSubject ? state.selectedSubject.name : "—";
  reportXp.textContent = String(state.xp);

  if (state.totalMessages < 3) {
    parentReport.classList.add("parent-report--hidden");
    return;
  }

  const activityLabel = state.totalMessages >= 8 ? "Высокая" : "Стабильная";
  reportActivity.textContent = `${activityLabel} (${state.totalMessages} сообщений)`;

  if (state.selectedSubject) {
    reportRecommendation.textContent = `Повторить базовые темы по предмету "${state.selectedSubject.name}" и закрепить 2-3 задания.`;
  } else {
    reportRecommendation.textContent = "Продолжить занятия в выбранном формате.";
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
    medalValue.textContent = "Смекалка 🏅";
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
  Улучшенная генерация ответа в зависимости от выбранного режима урока.
*/
function generateModeAwareReply(userText) {
  if (!state.selectedSubject || !state.selectedMode) {
    return "Я рядом! Давай начнём с выбора предмета и режима урока.";
  }

  const baseReply = generateBotReply(state.selectedSubject.id);
  const modeId = state.selectedMode.id;

  if (modeId === "quest") {
    return `Миссия: ${state.studentName || "ученик"}, выполни шаг 1 по теме "${state.selectedSubject.name}". ${baseReply}`;
  }

  if (modeId === "test") {
    return `Мини-тест по теме "${state.selectedSubject.name}":\n1) Какой вариант верный?\nA) Первый вариант\nB) Второй вариант\nC) Третий вариант\nНапиши букву ответа и коротко объясни почему.`;
  }

  if (modeId === "simple") {
    return `Объясняю просто: ${baseReply}\nПример: представь это как ситуацию из школы или игры, где каждый шаг выполняется по порядку.`;
  }

  return `Не даю готовый ответ сразу, но помогу тебе дойти самому 💪\nВопрос 1: что тебе уже известно по задаче "${userText.slice(0, 60)}"?\nВопрос 2: какой первый шаг можно сделать?`;
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
  chatStudent.textContent = `${state.studentName || "Ученик"}, ${state.studentGrade || "5 класс"}`;
  chatSubject.textContent = `${subject.emoji} ${subject.name}`;
  chatHero.textContent = `${subject.heroEmoji} ${subject.hero}`;
  chatMode.textContent = state.selectedMode ? `${state.selectedMode.emoji} ${state.selectedMode.name}` : "—";

  messages.innerHTML = "";
  chatInput.value = "";
  state.hasGreetedInChat = false;
  state.sessionMessages = 0;
  state.sessionXpGained = 0;
  parentReport.classList.add("parent-report--hidden");

  medalValue.textContent = state.medalAwarded ? "Смекалка 🏅" : "Пока нет";
  updateProgressUI();
  updateQuestUI();
  updateParentReport();
  saveProgress();
}

/*
  Обработчик отправки сообщения:
  1) показываем сообщение пользователя
  2) при первом сообщении добавляем приветствие героя
  3) показываем имитированный ответ наставника
  4) начисляем +10 XP
*/
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = chatInput.value.trim();
  if (!text || !state.selectedSubject) {
    return;
  }

  addMessage("user", text);
  chatInput.value = "";

  // Небольшая задержка делает чат более "живым".
  window.setTimeout(() => {
    if (!state.hasGreetedInChat) {
      const introName = state.studentName || "друг";
      addMessage(
        "bot",
        `${heroGreetings[state.selectedSubject.id]} ${introName}, твоя цель: ${state.learningGoal || "учиться в игре"}!`
      );
      state.hasGreetedInChat = true;
    }

    const reply = generateModeAwareReply(text);
    addMessage("bot", reply);

    // По условиям MVP за каждый ответ начисляем +10 XP.
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
});

/*
  Навигационные события:
  - старт -> предметы
  - герой -> назад к предметам
*/
startBtn.addEventListener("click", () => {
  showScreen("onboarding");
});

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

backToSubjectBtn.addEventListener("click", () => {
  showScreen("subject");
});

changeHeroBtn.addEventListener("click", () => {
  if (!state.selectedSubject) {
    showScreen("subject");
    return;
  }

  renderHeroCard(state.selectedSubject);
  showScreen("hero");
});

changeSubjectBtn.addEventListener("click", () => {
  showScreen("subject");
});

changeModeBtn.addEventListener("click", () => {
  finalizePreviousSession();
  saveProgress();
  showScreen("mode");
});

backToHeroBtn.addEventListener("click", () => {
  showScreen("hero");
});

softResetBtn.addEventListener("click", () => {
  const isConfirmed = window.confirm("Сбросить текущую сессию (без удаления достижений)?");
  if (!isConfirmed) {
    return;
  }

  softResetSession();
});

resetProgressBtn.addEventListener("click", () => {
  const isConfirmed = window.confirm("Сбросить весь прогресс? Это действие нельзя отменить.");
  if (!isConfirmed) {
    return;
  }

  resetProgress();
});

showOfferBtn.addEventListener("click", () => {
  offerCard.classList.remove("offer-card--hidden");
});

parentModeBtn.addEventListener("click", () => {
  updateParentModal();
  parentModal.classList.remove("parent-modal--hidden");
  parentModal.setAttribute("aria-hidden", "false");
});

closeParentModalBtn.addEventListener("click", () => {
  parentModal.classList.add("parent-modal--hidden");
  parentModal.setAttribute("aria-hidden", "true");
});

parentModal.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList && target.classList.contains("parent-modal__backdrop")) {
    parentModal.classList.add("parent-modal--hidden");
    parentModal.setAttribute("aria-hidden", "true");
  }
});

// Первичный запуск: рендерим карточки предметов и стартуем со стартового экрана.
loadProgress();
syncDailySession();
renderSubjectCards();
renderModeCards();
updateProgressUI();
updateQuestUI();
updateParentReport();
updateParentModal();

// Если данные онбординга уже были сохранены, подставляем в поля.
studentNameInput.value = state.studentName;
studentGradeInput.value = state.studentGrade;
learningGoalSelect.value = state.learningGoal;

showScreen("start");
