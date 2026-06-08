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

const heroGreetings = {
  math:
    "Привет. Я наставник по математике — помогу разложить задачу по шагам. Готовый ответ сразу не дам: разберём условие вместе.",
  russian:
    "Я наставник по русскому — помогу поймать правило без зубрёжки. Ошибку можно разобрать спокойно и по делу.",
  english:
    "Наставник по английскому на связи. Объясню коротко и по-человечески — и потренируем фразу без давления.",
  history:
    "Наставник по истории здесь. Даты запоминаются, когда есть логика: развернём событие в цепочку «кто — что — почему».",
  biology:
    "Наставник по биологии на месте. Сложные термины разберём на понятных примерах из жизни.",
  geography:
    "Наставник по географии с вами. Карта станет яснее, если смотреть слой за слоем — подскажу, с чего начать.",
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
  "Прогресс сохранён.",
  "Опыт начислен.",
  "Уверенность растёт.",
  "Вы держите фокус на теме.",
  "Упорство отмечено.",
  "Следующий шаг станет проще.",
  "Небольшой, но устойчивый прогресс.",
  "Почти получилось — это уже движение вперёд.",
  "Паттерн начинает складываться.",
  "Продолжайте в своём темпе.",
  "Я рядом: спрашивайте, пока не станет ясно.",
];

const QUICK_PHRASES = ["Объясни проще", "Дай пример", "Дай задание"];

const MENTOR_EMOTIONS = {
  happy: { icon: "happy", label: "Хороший темп" },
  thinking: { icon: "thinking", label: "Анализирую ответ…" },
  cheer: { icon: "cheer", label: "Верное направление" },
  hint: { icon: "hint", label: "Подсказка готова" },
  medal: { icon: "medal", label: "Медаль получена" },
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

function showStepReward(subjectId) {
  const sid = subjectId || "math";
  const voice = heroVoices[sid] || heroVoices.math;
  const buff = pickRandom(voice.buffs);
  const flare = pickRandom(QUEST_FLARES);
  addMessage("system", `${flare} ${buff}`);
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
  "Объясни проще":
    "Упростим. Представьте задачу как маршрут: точка А — что уже написано в условии, точка Б — чего нужно добиться. Напишите А и Б по одной короткой фразе — дальше подскажу следующий шаг.",
  "Дай пример":
    "Вот пример «рядом», не из твоего номера: 12 наклеек делят на 4 альбома поровну — по 3 в каждый. Идея та же: делим целиком и смотрим, что остаётся. Какой у тебя похожий кусок в задаче?",
  "Дай задание":
    "Мини-квест на пару минут: одной строкой — что именно непонятно, и одна твоя догадка, даже если неуверенная. Я отвечу маленьким следующим шагом, без готового ответа в лоб.",
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

function beginFromStartScreen() {
  const question = startEntryInput ? startEntryInput.value.trim() : "";

  if (!state.studentName) {
    state.studentName = "Ученик";
  }
  if (!state.studentGrade) {
    state.studentGrade = "5 класс";
  }
  if (!state.learningGoal) {
    state.learningGoal = "Домашка";
  }

  state.selectedMode = lessonModes.find((mode) => mode.id === "homework") || lessonModes[0];
  const subject = subjects.find((item) => item.id === "math") || subjects[0];

  startChat(subject);
  saveProgress();

  window.setTimeout(() => {
    if (question) {
      setMentorEmotion("thinking");
      addMessage("user", question);
      runBotTurn(question);
      return;
    }

    setMentorEmotion("happy");
    addMessage("bot", heroGreetings[subject.id], { botIcon: getMentorEmotionIcon("happy") });
    state.hasGreetedInChat = true;
  }, 120);
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
      return `${name}, без готовых ответов. ① Перескажи условие двумя простыми фразами. ② Назови «колючее» место одним словом. Напиши — разверну это спокойнее.`;
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
      return `${name}, номер целиком не решу — так честнее для понимания. ① Что в задании: числа, слова или факты? ② Тема одним словом — подберу похожий тренажёр, не копию.`;
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
    return "Я на связи. С какого предмета начнём сегодняшнюю сессию? Выберите предмет и режим — я подстроюсь под ваш стиль.";
  }

  if (isQuickPhrase(userText)) {
    return generateQuickReply(userText.trim());
  }

  const baseReply = generateBotReply(state.selectedSubject.id);
  const modeId = state.selectedMode.id;
  const name = state.studentName || "исследователь";

  if (modeId === "quest") {
    const core = `Квест «${state.selectedSubject.name}». Хороший этап. ${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "test") {
    const core =
      `Тест «${state.selectedSubject.name}». Выберите A / B / C или напишите «я за этот вариант, потому что…» одной фразой.\n` +
      `${baseReply}`;
    return withCoachTone(core, name, modeId);
  }

  if (modeId === "simple") {
    const core = `Простыми словами: ① суть одной строкой ② без сложных терминов ③ на примере из жизни.\n${baseReply}`;
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
        { botIcon: getMentorEmotionIcon("happy") }
      );
      state.hasGreetedInChat = true;
    }

    const reply = buildBotReply(userText);
    const emotion = resolveMentorEmotion(userText);
    setMentorEmotion(emotion);
    addMessage("bot", reply, { botIcon: getMentorEmotionIcon(emotion) });

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
