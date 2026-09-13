// Архетипы
const ARCHETYPES = {
  wolf: {
    id: "wolf",
    title: "Шоссейный волк",
    tagline: "Скорость — это твоя религия",
    description:
      "Ты живёшь ради прямых участков, обгонов и рёва мотора на 12 000 оборотов. Тебе важен контроль и адреналин. Ты не любишь стоять в пробках — ты их объезжаешь.",
    bike: "Спортбайк или спорт-турист: Yamaha R7, Kawasaki Ninja 650, Ducati Supersport.",
    strengths: ["Реакция", "Уверенность на скорости", "Дисциплина в экипировке"]
  },
  philosopher: {
    id: "philosopher",
    title: "Гаражный философ",
    tagline: "Мотоцикл — это процесс, а не результат",
    description:
      "Ты любишь разбирать, чинить, улучшать. Поездка для тебя — повод проверить то, что ты собрал своими руками. В гараже ты медитируешь.",
    bike: "Классика или кастом под сборку: Royal Enfield, Yamaha XS, любой проект под восстановление.",
    strengths: ["Терпение", "Техническая голова", "Уважение к железу"]
  },
  hooligan: {
    id: "hooligan",
    title: "Стрит-хулиган",
    tagline: "Город — твоя площадка",
    description:
      "Ты ездишь там, где нельзя, паркуешься там, где не паркуются, и знаешь все дворы в радиусе 10 км. Тебе важен стиль и звук.",
    bike: "Нейкед или супермото: Yamaha MT-07, KTM 690 Duke, Husqvarna 701.",
    strengths: ["Чувство города", "Смелость", "Контроль на малой скорости"]
  },
  traveler: {
    id: "traveler",
    title: "Дальнобойщик",
    tagline: "Дорога длиннее, чем выходные",
    description:
      "Ты считаешь километры не за день, а за поездку. Кофры, палатка, рассвет где-то под Владимиром — твоя норма.",
    bike: "Турист или адвенчер: BMW GS, Honda Africa Twin, Yamaha Ténéré.",
    strengths: ["Выносливость", "Планирование", "Спокойствие в любой ситуации"]
  },
  enduro: {
    id: "enduro",
    title: "Эндурист",
    tagline: "Асфальт — это только до леса",
    description:
      "Ты едешь туда, где нет дорог, и находишь там себя. Грязь, броды, подъёмы — это не препятствия, а часть маршрута.",
    bike: "Эндуро или хард-эндуро: KTM EXC, Husqvarna TE, Honda CRF.",
    strengths: ["Физическая форма", "Техника на бездорожье", "Упорство"]
  },
  esthete: {
    id: "esthete",
    title: "Кастом-эстет",
    tagline: "Красота важнее скорости",
    description:
      "Для тебя мотоцикл — это объект искусства. Хром, кожа, правильные пропорции. Ты ездишь медленно и выглядишь дорого.",
    bike: "Чоппер или кастом: Harley-Davidson, Indian, бобберы на заказ.",
    strengths: ["Вкус", "Внимание к деталям", "Спокойствие"]
  },
  courier: {
    id: "courier",
    title: "Городской курьер",
    tagline: "Мотоцикл — это инструмент",
    description:
      "Ты ездишь каждый день, в любую погоду, по делам. Мотоцикл для тебя — не хобби, а способ жить быстрее города.",
    bike: "Нейкед или макси-скутер: Honda CB500, Yamaha XMAX, BMW C400.",
    strengths: ["Практичность", "Ориентация в городе", "Универсальность"]
  },
  oldschool: {
    id: "oldschool",
    title: "Олдскул-байкер",
    tagline: "Настоящее — это то, что сделано до 2000-го",
    description:
      "Ты уважаешь традиции, кожаные куртки, клубы и долгие разговоры у костра. Новомодное тебе неинтересно.",
    bike: "Классика: Harley Sportster, Triumph Bonneville, Ural.",
    strengths: ["Верность", "Опыт", "Уважение к сообществу"]
  }
};

// Вопросы. Каждый ответ даёт очки архетипам.
const QUESTIONS = [
  {
    text: "Идеальное утро выходного дня?",
    answers: [
      { text: "Ранний выезд на трассу, пока пусто", scores: { wolf: 3, traveler: 1 } },
      { text: "Кофе в гараже рядом с проектом", scores: { philosopher: 3, oldschool: 1 } },
      { text: "Покатушки по городу с друзьями", scores: { hooligan: 3, courier: 1 } },
      { text: "Загрузил кофры — и на 500 км", scores: { traveler: 3, enduro: 1 } }
    ]
  },
  {
    text: "Твой мотоцикл мечты?",
    answers: [
      { text: "Спортбайк с характером", scores: { wolf: 3 } },
      { text: "Кастом, собранный вручную", scores: { philosopher: 2, esthete: 2 } },
      { text: "Лёгкий нейкед для города", scores: { hooligan: 3, courier: 1 } },
      { text: "Адвенчер для дальних маршрутов", scores: { traveler: 3, enduro: 1 } }
    ]
  },
  {
    text: "Что для тебя мотоцикл?",
    answers: [
      { text: "Скорость и адреналин", scores: { wolf: 3 } },
      { text: "Процесс и творчество", scores: { philosopher: 2, esthete: 2 } },
      { text: "Инструмент и свобода", scores: { courier: 2, hooligan: 2 } },
      { text: "Путешествие и открытие", scores: { traveler: 3, enduro: 1 } }
    ]
  },
  {
    text: "Грязь на мотоцикле — это…",
    answers: [
      { text: "Признак того, что день удался", scores: { enduro: 3, traveler: 1 } },
      { text: "Повод помыть и отполировать", scores: { esthete: 3, philosopher: 1 } },
      { text: "Не бывает, я аккуратен", scores: { wolf: 2, oldschool: 1 } },
      { text: "Норма, езжу каждый день", scores: { courier: 3, hooligan: 1 } }
    ]
  },
  {
    text: "Твоя экипировка?",
    answers: [
      { text: "Полный комплект, всегда застёгнут", scores: { wolf: 3, traveler: 1 } },
      { text: "Что-то модное и стильное", scores: { esthete: 3, hooligan: 1 } },
      { text: "Практичное и удобное", scores: { courier: 3, traveler: 1 } },
      { text: "Минимум, я и так справлюсь", scores: { hooligan: 2, enduro: 2 } }
    ]
  },
  {
    text: "Мотоцикл сломался в дороге. Что делаешь?",
    answers: [
      { text: "Достаю инструмент и чиню на месте", scores: { philosopher: 3, enduro: 1, oldschool: 1 } },
      { text: "Звоню друзьям, разберёмся вместе", scores: { oldschool: 2, hooligan: 2 } },
      { text: "Вызываю эвакуатор, мотоцикл важнее", scores: { esthete: 3, wolf: 1 } },
      { text: "Быстро нахожу решение — работа ждёт", scores: { courier: 3 } }
    ]
  },
  {
    text: "Куда бы поехал на неделю?",
    answers: [
      { text: "Трек в Европе", scores: { wolf: 3 } },
      { text: "Горы и бездорожье", scores: { enduro: 3, traveler: 1 } },
      { text: "Крупный город — фестиваль, движ", scores: { hooligan: 2, courier: 1, oldschool: 1 } },
      { text: "Вдоль побережья, не спеша", scores: { esthete: 2, traveler: 2 } }
    ]
  },
  {
    text: "Твой стиль в одежде?",
    answers: [
      { text: "Техно, спорт, чёрное", scores: { wolf: 3 } },
      { text: "Кожа, хром, джинсы", scores: { oldschool: 3, esthete: 1 } },
      { text: "Стрит-кэжуал", scores: { hooligan: 3, courier: 1 } },
      { text: "Удобное и практичное", scores: { traveler: 2, enduro: 2 } }
    ]
  },
  {
    text: "Что в твоём гараже кроме мотоцикла?",
    answers: [
      { text: "Инструмент на все случаи", scores: { philosopher: 3, enduro: 1 } },
      { text: "Полироль, тряпки, красота", scores: { esthete: 3 } },
      { text: "Второй мотоцикл", scores: { oldschool: 2, wolf: 1, hooligan: 1 } },
      { text: "Ничего, у меня нет гаража", scores: { courier: 3 } }
    ]
  },
  {
    text: "Твой девиз?",
    answers: [
      { text: "Быстрее, выше, дальше", scores: { wolf: 3 } },
      { text: "Сделай сам — сделай хорошо", scores: { philosopher: 3, oldschool: 1 } },
      { text: "Дорога сама найдётся", scores: { traveler: 3, enduro: 1 } },
      { text: "Главное — выглядеть на все сто", scores: { esthete: 3, hooligan: 1 } }
    ]
  }
];
