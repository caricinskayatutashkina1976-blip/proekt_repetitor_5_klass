"use strict";

const ICONS = {
  math: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16l8-8M8 8h.01M16 16h.01"/></svg>',
  russian: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  english: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  biology: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-4-3-7-7-7-11a7 7 0 0 1 14 0c0 4-3 8-7 11z"/><path d="M12 11v5"/></svg>',
  geography: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  quest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>',
  test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  simple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  homework: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  level: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  streak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  medals: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
  growth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  subject: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  improve: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 8V5M9 5h6"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>',
  happy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>',
  thinking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>',
  cheer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
  hint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11"/></svg>',
  parents: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  students: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>',
  schools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>',
  tutors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
};

function iconHtml(name, className = "icon") {
  const svg = ICONS[name] || ICONS.spark;
  return `<span class="${className}" aria-hidden="true">${svg}</span>`;
}

/*
  Данные приложения:
  - Список предметов
  - Иконки и наставники для каждого предмета
  - Наборы фраз для стилизованных ответов AI-наставника
*/
const subjects = [
  {
    id: "math",
    name: "Математика",
    icon: "math",
    hero: "Наставник по математике",
    heroDescription:
      "Шаг за шагом раскрывает задачи: от «что дано» до ответа — без сухой зубрёжки формул.",
  },
  {
    id: "russian",
    name: "Русский язык",
    icon: "russian",
    hero: "Наставник по русскому",
    heroDescription:
      "Правила и орфография как квест: корни, окончания и ясные фразы без страха перед ошибкой.",
  },
  {
    id: "english",
    name: "Английский язык",
    icon: "english",
    hero: "Наставник по английскому",
    heroDescription:
      "Слова и короткие диалоги через мини-миссии: говорить увереннее, а не зубрить списки.",
  },
  {
    id: "history",
    name: "История",
    icon: "history",
    hero: "Наставник по истории",
    heroDescription:
      "События складываются в цепочку кто — где — когда и зачем, чтобы даты не «плавали».",
  },
  {
    id: "biology",
    name: "Биология",
    icon: "biology",
    hero: "Наставник по биологии",
    heroDescription:
      "Клетки, органы и природа — с образами из жизни, чтобы тема стала понятной, а не абстрактной.",
  },
  {
    id: "geography",
    name: "География",
    icon: "geography",
    hero: "Наставник по географии",
    heroDescription:
      "Карты, климат и страны слоями: сравниваем, находим закономерности, без бесконечных списков.",
  },
];

/*
  Система обучения: 6 шагов, без готового ответа до конца.
  1 problem → 2 clarify → 3 hint1 → 4 askAgain → 5 hint2 → 6 explain
*/
const LEARN_STEP_KEYS = ["problem", "clarify", "hint1", "askAgain", "hint2", "explain"];

const MENTOR_LEARN_FLOW = {
  math: {
    problem: "О чём задание?",
    clarify: "Что из условия уже ясно?",
    hint1: "Подсказка: отдели «дано» и «найти».",
    askAgain: "Какой шаг попробуешь?",
    hint2: "Подсказка: начни с одного действия, без готового ответа.",
    explain:
      "Тут обычно сначала приводят к общему знаменателю, потом складывают верхние числа. Проверь по этой логике.",
    example: "12 ÷ 3 = 4 — та же идея деления. Где у тебя похожее?",
    nudge: "Возьми одно число из условия. Какое?",
  },
  russian: {
    problem: "О чём это задание?",
    clarify: "Какое правило тут, как тебе кажется?",
    hint1: "Подсказка: найди часть слова с основным смыслом.",
    askAgain: "Какой вариант проверишь?",
    hint2: "Подсказка: прочитай вслух — где звучит странно.",
    explain: "Сначала корень, потом окончание. Пройдись по своему слову в этом порядке.",
    example: "«Бежать» — действие, «бег» — предмет. Есть похожая пара?",
    nudge: "Возьми одно слово из задания. Какое?",
  },
  english: {
    problem: "О чём фраза или упражнение?",
    clarify: "Какие слова уже знакомы?",
    hint1: "Подсказка: сначала смысл по-русски, одной строкой.",
    askAgain: "Как переведёшь первые два слова?",
    hint2: "Подсказка: не всё сразу — только кусок фразы.",
    explain: "В английском порядок слов и окончания решают многое. Разбери фразу по частям.",
    example: "She likes — «ей нравится». Есть похожее?",
    nudge: "Одно слово из задания. Какое?",
  },
  history: {
    problem: "О каком событии речь?",
    clarify: "Что про это уже слышал?",
    hint1: "Подсказка: кто, что сделал и что из этого вышло.",
    askAgain: "Кто тут главный?",
    hint2: "Подсказка: что было раньше, что позже.",
    explain: "События складываются в цепочку: причина, действие, результат. Найди эти три звена.",
    example: "Сначала причина, потом событие. Какая причина?",
    nudge: "Одна дата или имя из темы. Какое?",
  },
  biology: {
    problem: "О чём параграф?",
    clarify: "Какие термины уже встречались?",
    hint1: "Подсказка: что здесь главное — клетка, орган или процесс.",
    askAgain: "Своими словами — что происходит?",
    hint2: "Подсказка: сравни с чем-то из жизни.",
    explain: "Сложные слова проще, когда видишь процесс, а не определение. Опиши процесс своими словами.",
    example: "Сердце качает кровь, как насос. Что у тебя похоже?",
    nudge: "Один термин из темы. Какой?",
  },
  geography: {
    problem: "О каком месте или явлении речь?",
    clarify: "Что про это уже знаешь?",
    hint1: "Подсказка: климат, реки или соседи — с чего начнёшь?",
    askAgain: "Что на карте посмотришь?",
    hint2: "Подсказка: сравни с тем, что знаешь про свой город.",
    explain: "Места отличаются слоями: рельеф, климат, люди. Разбери свой вопрос по одному слою.",
    example: "У моря влажнее, чем в глубине страны. Где у тебя так?",
    nudge: "Одна страна или город из темы. Какая?",
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

const QUICK_PHRASES = ["Объясни проще", "Дай пример", "Дай задание"];

const MENTOR_EMOTIONS = {
  happy: { icon: "happy", label: "На связи" },
  thinking: { icon: "thinking", label: "Думаю" },
  cheer: { icon: "cheer", label: "Сходится" },
  hint: { icon: "hint", label: "Уточняю" },
  medal: { icon: "medal", label: "Медаль" },
};

/*
  Характер наставника: старший умный товарищ.
  Не учитель, не родитель, не психолог, не аниматор.
  Уважает ребёнка, говорит на равных, не стыдит и не хвалит без причины.
*/
const MENTOR_CHARACTER = {
  mistakeLeads: [
    "Давай посмотрим еще раз.",
    "Есть одна интересная мысль.",
    "Попробуем зайти с другой стороны.",
  ],
  listens: ["Понял.", "Ок.", "Слушаю.", "Ясно."],
  wait: "Жду ответ. Что скажешь?",
  nameGreeting(name) {
    return `Привет, ${name}.`;
  },
  topicAsk: "Что сегодня оказалось непонятным?",
  refuseDirectAnswer:
    "Могу. Но тогда ты не поймешь, почему именно так. Давай лучше решим вместе.",
  forbidden: [
    /это очень просто/i,
    /как же ты этого не знаешь/i,
    /как ты этого не знаешь/i,
    /ты молодец/i,
    /молодчин/i,
    /ты умничка/i,
    /горжусь тобой/i,
    /отлично сработал/i,
    /ты почти победил/i,
    /паттерн начинает/i,
    /мысль цепляется/i,
    /давай не торопиться/i,
    /микро-шаг/i,
    /супер[!]?/i,
    /класс[,!]/i,
  ],
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
  entryChatActive: false,
  entryPhase: null,
  pendingEntryQuestion: "",
  mentorLearnStep: 0,
  mentorMistakeCount: 0,
};

const ENTRY_OPENING_MESSAGE =
  "Добрый вечер. Я рядом — разберём вместе, без готовых ответов. Как тебя зовут?";

const STORAGE_KEY = "ai-school-quest-progress-v1";

const lessonModes = [
  { id: "quest", name: "Квест", icon: "quest", subtitle: "Пошаговые миссии с чёткой целью" },
  { id: "test", name: "Тест", icon: "test", subtitle: "Варианты ответа и обоснование" },
  { id: "simple", name: "Объясни простыми словами", icon: "simple", subtitle: "Коротко, структурно, с примером" },
  { id: "homework", name: "Помощь с домашкой", icon: "homework", subtitle: "Подсказки вопросами, без списывания" },
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

const startEntryForm = document.getElementById("start-entry-form");
const startEntryInput = document.getElementById("start-entry-input");
const entryChat = document.getElementById("entry-chat");
const entryMessages = document.getElementById("entry-messages");
const entryChatForm = document.getElementById("entry-chat-form");
const entryChatInput = document.getElementById("entry-chat-input");
const aiCompanion = document.getElementById("ai-companion");
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

function showStepReward() {
  // Намеренно без системных вставок — диалог не прерывается.
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
          ${iconHtml("level", "parent-dash__icon")}
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
          ${iconHtml("streak", "parent-dash__icon")}
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
          ${iconHtml("medals", "parent-dash__icon")}
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
          ${iconHtml("growth", "parent-dash__icon")}
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
          ${iconHtml("subject", "parent-dash__icon")}
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
        <h4 class="parent-dash__insight-title">${iconHtml("improve", "parent-dash__insight-icon")} Что улучшилось</h4>
        <ul class="parent-dash__list" data-dash="improved-list"></ul>
      </div>
      <div class="parent-dash__insight parent-dash__insight--repeat">
        <h4 class="parent-dash__insight-title">${iconHtml("repeat", "parent-dash__insight-icon")} Что повторить</h4>
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
      ${iconHtml(mode.icon, "choice-card__icon")}
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
  state.mentorLearnStep = 0;
  state.mentorMistakeCount = 0;
  resetEntryConversationUI();

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
  state.mentorLearnStep = 0;
  state.mentorMistakeCount = 0;

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
      ${iconHtml(subject.icon, "choice-card__icon")}
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
        <span class="mentor-card__avatar">${iconHtml(subject.icon, "mentor-card__avatar-icon")}</span>
        <div class="mentor-card__headlines">
          <p class="mentor-card__subject-line">${iconHtml(subject.icon, "mentor-card__subject-icon")}<span>${subject.name}</span></p>
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
  "Объясни проще": MENTOR_LEARN_FLOW.math.hint1,
  "Дай пример": MENTOR_LEARN_FLOW.math.example,
  "Дай задание": MENTOR_LEARN_FLOW.math.askAgain,
};

function getMentorEmotionIcon(key) {
  const emotion = MENTOR_EMOTIONS[key] || MENTOR_EMOTIONS.happy;
  return emotion.icon;
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
    el.classList.remove("mentor-mood__icon--pop");
    void el.offsetWidth;
    el.innerHTML = iconHtml(emotion.icon, "mentor-mood__icon-svg");
    el.classList.add("mentor-mood__icon--pop");
  });

  if (mentorMoodLabel) {
    mentorMoodLabel.textContent = emotion.label;
  }
}

function resolveMentorEmotion(userText) {
  const t = userText.trim().toLowerCase();

  if (isLikelyMistake(userText)) {
    return "thinking";
  }

  if (isExplicitlyCorrect(userText)) {
    return "cheer";
  }

  if (isQuickPhrase(userText)) {
    return "hint";
  }

  if (/(не понимаю|не знаю|помоги|сложно|как|почему|что такое|объясни|подскаж)/.test(t)) {
    return "hint";
  }

  if (t.length >= 8) {
    return "thinking";
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

  const botIcon =
    options.botIcon ||
    getMentorEmotionIcon(state.mentorEmotion) ||
    (state.selectedSubject ? state.selectedSubject.icon : "bot");

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
    av.innerHTML = iconHtml(botIcon, "msg-row__avatar-icon");
    const bubble = document.createElement("div");
    bubble.className = "msg-bubble msg-bubble--bot";
    bubble.textContent = text;
    inner.append(av, bubble);
    row.append(inner);
  }

  container.append(row);
  container.scrollTop = container.scrollHeight;
}

function initCompanionPresence() {
  if (!aiCompanion || !screens.start) {
    return;
  }

  const tiltEl = aiCompanion.querySelector(".companion__tilt");
  const haloEl = aiCompanion.querySelector(".companion__halo");
  const coreGlowEl = aiCompanion.querySelector(".companion__core-glow");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !tiltEl) {
    return;
  }

  let targetRotateX = 0;
  let targetRotateY = 0;
  let targetGaze = 0;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let currentGaze = 0;
  let animationId = 0;

  function lerpValue(from, to, amount) {
    return from + (to - from) * amount;
  }

  function isEntryActive() {
    return screens.start.classList.contains("screen--active");
  }

  function animateCompanion() {
    if (!isEntryActive()) {
      targetRotateX = 0;
      targetRotateY = 0;
      targetGaze = 0;
    }

    currentRotateX = lerpValue(currentRotateX, targetRotateX, 0.07);
    currentRotateY = lerpValue(currentRotateY, targetRotateY, 0.07);
    currentGaze = lerpValue(currentGaze, targetGaze, 0.05);

    tiltEl.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;
    aiCompanion.style.setProperty("--gaze", currentGaze.toFixed(3));

    if (haloEl) {
      haloEl.style.transform = `scale(${1 + currentGaze * 0.08}) translate(${currentRotateY * 0.65}px, ${-currentRotateX * 0.45}px)`;
    }

    if (coreGlowEl) {
      coreGlowEl.style.transform = `scale(${1 + currentGaze * 0.12})`;
    }

    const delta =
      Math.abs(currentRotateX - targetRotateX) +
      Math.abs(currentRotateY - targetRotateY) +
      Math.abs(currentGaze - targetGaze);

    if (delta > 0.004) {
      animationId = window.requestAnimationFrame(animateCompanion);
      return;
    }

    animationId = 0;
  }

  function queueAnimation() {
    if (!animationId) {
      animationId = window.requestAnimationFrame(animateCompanion);
    }
  }

  function updateFromPointer(clientX, clientY) {
    if (!isEntryActive()) {
      return;
    }

    const rect = aiCompanion.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (clientX - centerX) / (rect.width / 2);
    const normY = (clientY - centerY) / (rect.height / 2);
    const clampedX = Math.max(-1, Math.min(1, normX));
    const clampedY = Math.max(-1, Math.min(1, normY));

    targetRotateY = clampedX * 16;
    targetRotateX = -clampedY * 13;
    targetGaze = Math.min(1, Math.hypot(clampedX, clampedY) * 0.62);
    queueAnimation();
  }

  function resetCompanionPose() {
    targetRotateX = 0;
    targetRotateY = 0;
    targetGaze = 0;
    queueAnimation();
  }

  window.addEventListener("mousemove", (event) => {
    updateFromPointer(event.clientX, event.clientY);
  });

  window.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    updateFromPointer(touch.clientX, touch.clientY);
  }, { passive: true });

  document.addEventListener("mouseleave", resetCompanionPose);
  window.addEventListener("blur", resetCompanionPose);
}

function getActiveMessagesContainer() {
  if (state.entryChatActive && entryMessages) {
    return entryMessages;
  }
  return messages;
}

function activateEntryConversation() {
  if (screens.start) {
    screens.start.classList.add("entry--conversation");
  }
  if (entryChat) {
    entryChat.hidden = false;
  }
  if (entryChatInput) {
    window.setTimeout(() => {
      entryChatInput.focus();
    }, 280);
  }
}

function resetEntryConversationUI() {
  state.entryChatActive = false;
  state.entryPhase = null;
  state.pendingEntryQuestion = "";
  state.mentorLearnStep = 0;
  state.mentorMistakeCount = 0;

  if (screens.start) {
    screens.start.classList.remove("entry--conversation");
  }
  if (entryChat) {
    entryChat.hidden = true;
  }
  if (entryMessages) {
    entryMessages.innerHTML = "";
  }
  if (entryChatInput) {
    entryChatInput.value = "";
  }
  if (startEntryInput) {
    startEntryInput.value = "";
  }
}

function handleEntryNameReply(name) {
  const trimmedName = name.trim();
  if (!trimmedName) {
    return;
  }

  state.studentName = trimmedName;
  state.studentGrade = state.studentGrade || "5 класс";
  state.learningGoal = state.learningGoal || "Домашка";
  state.entryPhase = "active";
  saveProgress();

  setMentorEmotion("happy");
  addMessage("bot", MENTOR_CHARACTER.nameGreeting(trimmedName), {
    botIcon: getMentorEmotionIcon("happy"),
  });

  const pendingQuestion = state.pendingEntryQuestion;
  state.pendingEntryQuestion = "";

  if (pendingQuestion) {
    window.setTimeout(() => {
      setMentorEmotion("thinking");
      addMessage("user", pendingQuestion);
      runBotTurn(pendingQuestion);
    }, 520);
    return;
  }

  window.setTimeout(() => {
    setMentorEmotion("hint");
    addMessage("bot", MENTOR_CHARACTER.topicAsk, {
      botIcon: getMentorEmotionIcon("hint"),
    });
  }, 480);
}

function handleEntryChatSubmit(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return;
  }

  addMessage("user", trimmedText);

  if (state.entryPhase === "asking_name") {
    handleEntryNameReply(trimmedText);
    return;
  }

  if (!state.selectedSubject) {
    state.selectedSubject = subjects.find((item) => item.id === "math") || subjects[0];
  }
  if (!state.selectedMode) {
    state.selectedMode = lessonModes.find((mode) => mode.id === "homework") || lessonModes[0];
  }

  setMentorEmotion("thinking");
  runBotTurn(trimmedText);
}

function beginFromStartScreen() {
  state.pendingEntryQuestion = startEntryInput ? startEntryInput.value.trim() : "";
  state.studentName = "";
  state.studentGrade = "5 класс";
  state.learningGoal = "Домашка";
  state.selectedMode = lessonModes.find((mode) => mode.id === "homework") || lessonModes[0];
  state.selectedSubject = subjects.find((item) => item.id === "math") || subjects[0];
  state.entryChatActive = true;
  state.entryPhase = "asking_name";
  state.hasGreetedInChat = true;
  state.mentorLearnStep = 0;
  state.mentorMistakeCount = 0;
  state.sessionMessages = 0;
  state.sessionXpGained = 0;

  if (entryMessages) {
    entryMessages.innerHTML = "";
  }

  activateEntryConversation();
  saveProgress();

  window.setTimeout(() => {
    setMentorEmotion("happy");
    addMessage("bot", ENTRY_OPENING_MESSAGE, { botIcon: getMentorEmotionIcon("happy") });
  }, 180);
}

/*
  Добавляем сообщение в чат.
  type:
  - "user"   => сообщение ребёнка
  - "bot"    => сообщение наставника
  - "system" => техническое/наградное сообщение
*/
function addMessage(type, text, options = {}) {
  appendChatBubble(getActiveMessagesContainer(), type, text, options);
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
      achievementText.textContent = "Значков пока нет.";
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
  addMessage("system", `Значок: ${title}`);
}

function checkAchievements() {
  if (state.dailyGoalCount >= 3) {
    grantAchievement("Три сообщения за день — цель закрыта");
  }
  if (state.streakDays >= 3) {
    grantAchievement("Три дня подряд — стабильный ритм");
  }
  if (state.totalMessages >= 10) {
    grantAchievement("Десять осмысленных вопросов");
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
      medalValue.textContent = "Смекалка";
    }
    setMentorEmotion("medal");
    addMessage("system", "Медаль «Смекалка».");
  }

  saveProgress();
}

function isQuickPhrase(text) {
  return QUICK_PHRASES.includes(text.trim());
}

function getMentorLearnFlow() {
  const subjectId = state.selectedSubject ? state.selectedSubject.id : "math";
  return MENTOR_LEARN_FLOW[subjectId] || MENTOR_LEARN_FLOW.math;
}

function getCurrentLearnStepKey() {
  const index = Math.min(state.mentorLearnStep, LEARN_STEP_KEYS.length - 1);
  return LEARN_STEP_KEYS[index];
}

function advanceLearnStep() {
  state.mentorLearnStep = Math.min(state.mentorLearnStep + 1, LEARN_STEP_KEYS.length - 1);
}

function isAskForDirectAnswer(text) {
  const normalized = text.trim().toLowerCase();
  return /(сделай за меня|реши за меня|реши за мен|напиши за меня|дай ответ|напиши ответ|просто ответ|готовый ответ|скажи ответ|подставь ответ|реши это|сделай сам|ответь за меня|напиши решение|дай решение)/.test(
    normalized
  );
}

function isUncertainReply(text) {
  const normalized = text.trim().toLowerCase();
  return (
    /^(не знаю|не понимаю|не понял|хз|непонятно|ничего|незнаю)$/.test(normalized) ||
    normalized.length < 3
  );
}

function isShortAck(text) {
  const normalized = text.trim().toLowerCase();
  return /^(да|ок|окей|ясно|понял|понятно|ага|угу|ладно|хорошо)$/.test(normalized);
}

function isLikelyMistake(text) {
  const normalized = text.trim().toLowerCase();
  return (
    /(ошиб|неправиль|не верно|неверно|не то|не выходит|не сход|не получил|не уверен|сомнева|наверное нет|наверно нет|запутал|путаюсь|опять не то|что-то не так)/.test(
      normalized
    ) ||
    (state.mentorLearnStep >= 3 && /^(нет|неа|не)$/.test(normalized))
  );
}

function isExplicitlyCorrect(text) {
  const normalized = text.trim().toLowerCase();
  return (
    /(правильно|верно|сошлось|вышло|получилось|точно так|это ответ)/.test(normalized) &&
    !isLikelyMistake(text)
  );
}

function sanitizeMentorText(text) {
  let safe = text.trim();
  MENTOR_CHARACTER.forbidden.forEach((pattern) => {
    safe = safe.replace(pattern, "");
  });
  safe = safe.replace(/\s{2,}/g, " ").trim();
  return safe || MENTOR_CHARACTER.topicAsk;
}

function mentorListen(userText) {
  const listens = MENTOR_CHARACTER.listens;
  return listens[userText.trim().length % listens.length];
}

function mentorMistakeLead(userText) {
  const leads = MENTOR_CHARACTER.mistakeLeads;
  const index = (state.mentorMistakeCount + userText.trim().length) % leads.length;
  return leads[index];
}

function formatMentorReply(lead, question) {
  const combined = question ? `${lead} ${question}` : lead;
  return sanitizeMentorText(combined);
}

function withMentorListen(question, userText) {
  return formatMentorReply(mentorListen(userText), question);
}

function withMentorMistake(question, userText) {
  state.mentorMistakeCount += 1;
  return formatMentorReply(mentorMistakeLead(userText), question);
}

function buildQuickMentorReply(phrase) {
  const flow = getMentorLearnFlow();
  if (phrase === "Объясни проще") {
    return flow.hint1;
  }
  if (phrase === "Дай пример") {
    return flow.example;
  }
  if (phrase === "Дай задание") {
    return flow.askAgain;
  }
  return flow.nudge;
}

function buildLearnStepReply(stepKey, userText, flow) {
  const text = flow[stepKey];

  if (stepKey === "hint1" || stepKey === "hint2") {
    return sanitizeMentorText(text);
  }

  if (stepKey === "explain") {
    return sanitizeMentorText(text);
  }

  if (stepKey === "problem") {
    return sanitizeMentorText(text);
  }

  return withMentorListen(text, userText);
}

function buildMentorReply(userText) {
  const trimmed = userText.trim();
  if (!trimmed) {
    return sanitizeMentorText(MENTOR_CHARACTER.wait);
  }

  const flow = getMentorLearnFlow();

  if (isAskForDirectAnswer(trimmed)) {
    state.mentorLearnStep = 1;
    return sanitizeMentorText(`${MENTOR_CHARACTER.refuseDirectAnswer} ${flow.problem}`);
  }

  if (isQuickPhrase(trimmed)) {
    return sanitizeMentorText(buildQuickMentorReply(trimmed));
  }

  if (isLikelyMistake(trimmed)) {
    return withMentorMistake(flow.askAgain, trimmed);
  }

  if (isUncertainReply(trimmed)) {
    return sanitizeMentorText(flow.nudge);
  }

  if (isShortAck(trimmed)) {
    return sanitizeMentorText(flow.clarify);
  }

  if (state.mentorLearnStep === 0 && trimmed.length > 20) {
    state.mentorLearnStep = 1;
    const reply = buildLearnStepReply("clarify", trimmed, flow);
    advanceLearnStep();
    return reply;
  }

  const stepKey = getCurrentLearnStepKey();
  const reply = buildLearnStepReply(stepKey, trimmed, flow);
  advanceLearnStep();
  return reply;
}

function buildBotReply(userText) {
  if (!state.selectedSubject) {
    state.selectedSubject = subjects.find((item) => item.id === "math") || subjects[0];
  }
  if (!state.selectedMode) {
    state.selectedMode = lessonModes.find((mode) => mode.id === "homework") || lessonModes[0];
  }
  return buildMentorReply(userText);
}

function runBotTurn(userText) {
  window.setTimeout(() => {
    if (!state.selectedSubject) {
      return;
    }

    state.hasGreetedInChat = true;

    const reply = buildBotReply(userText);
    const emotion = resolveMentorEmotion(userText);
    setMentorEmotion(emotion);
    addMessage("bot", sanitizeMentorText(reply), { botIcon: getMentorEmotionIcon(emotion) });

    addXp(10);
    pulseXpBar();
    showStepReward();
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
    chatSubject.textContent = subject.name;
  }
  if (chatHero) {
    chatHero.textContent = `${subject.hero}`;
  }
  setMentorEmotion("happy");
  if (chatMode) {
    chatMode.textContent = state.selectedMode ? state.selectedMode.name : "—";
  }

  if (messages) {
    messages.innerHTML = "";
  }
  if (chatInput) {
    chatInput.value = "";
  }
  state.hasGreetedInChat = false;
  state.mentorLearnStep = 0;
  state.mentorMistakeCount = 0;
  state.sessionMessages = 0;
  state.sessionXpGained = 0;
  if (parentReport) {
    parentReport.classList.add("parent-report--hidden");
  }

  if (medalValue) {
    medalValue.textContent = state.medalAwarded ? "Смекалка" : "Пока нет";
  }
  updateProgressUI();
  updateQuestUI();
  updateParentReport();
  saveProgress();
}

if (startEntryForm) {
  startEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    beginFromStartScreen();
  });
}

if (entryChatForm) {
  entryChatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!entryChatInput) {
      return;
    }
    const text = entryChatInput.value;
    entryChatInput.value = "";
    handleEntryChatSubmit(text);
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
  initCompanionPresence();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
