// Архетипы
const ARCHETYPES = {
  racer: {
    id: "racer",
    title: "Шоссейный гонщик",
    tagline: "Скорость — это твоя религия",
    image: "img/a-racer.jpg",
    description:
      "Ты живёшь ради прямых участков, обгонов и рёва мотора на 12 000 оборотов. Тебе важен контроль и адреналин. Ты не любишь стоять в пробках — ты их объезжаешь.",
    bike: "Спортбайк или спорт-турист: Yamaha R7, Kawasaki Ninja 650, Ducati Supersport.",
    strengths: ["Реакция", "Уверенность на скорости", "Дисциплина в экипировке"]
  },
  philosopher: {
    id: "philosopher",
    title: "Гаражный философ",
    tagline: "Мотоцикл — это процесс, а не результат",
    image: "img/a-philosopher.jpg",
    description:
      "Ты любишь разбирать, чинить, улучшать. Поездка для тебя — повод проверить то, что ты собрал своими руками. В гараже ты медитируешь.",
    bike: "Классика или кастом под сборку: Royal Enfield, Yamaha XS, любой проект под восстановление.",
    strengths: ["Терпение", "Техническая голова", "Уважение к железу"]
  },
  hooligan: {
    id: "hooligan",
    title: "Стрит-хулиган",
    tagline: "Город — твоя площадка",
    image: "img/a-hooligan.jpg",
    description:
      "Ты ездишь там, где нельзя, паркуешься там, где не паркуются, и знаешь все дворы в радиусе 10 км. Тебе важен стиль и звук.",
    bike: "Нейкед или супермото: Yamaha MT-07, KTM 690 Duke, Husqvarna 701.",
    strengths: ["Чувство города", "Смелость", "Контроль на малой скорости"]
  },
  traveler: {
    id: "traveler",
    title: "Дальний турист",
    tagline: "Дорога длиннее, чем выходные",
    image: "img/a-traveler.jpg",
    description:
      "Ты считаешь километры не за день, а за поездку. Кофры, палатка, рассвет где-то под Владимиром — твоя норма.",
    bike: "Турист или адвенчер: BMW GS, Honda Africa Twin, Yamaha Ténéré.",
    strengths: ["Выносливость", "Планирование", "Спокойствие в любой ситуации"]
  },
  enduro: {
    id: "enduro",
    title: "Хард-эндурист",
    tagline: "Асфальт — это только до леса",
    image: "img/a-enduro.jpg",
    description:
      "Ты едешь туда, где нет дорог, и находишь там себя. Грязь, броды, подъёмы — это не препятствия, а часть маршрута.",
    bike: "Эндуро или хард-эндуро: KTM EXC, Husqvarna TE, Honda CRF.",
    strengths: ["Физическая форма", "Техника на бездорожье", "Упорство"]
  },
  esthete: {
    id: "esthete",
    title: "Кастом-эстет",
    tagline: "Красота важнее скорости",
    image: "img/a-esthete.jpg",
    description:
      "Для тебя мотоцикл — это объект искусства. Хром, кожа, правильные пропорции. Ты ездишь медленно и выглядишь дорого.",
    bike: "Чоппер или кастом: Harley-Davidson, Indian, бобберы на заказ.",
    strengths: ["Вкус", "Внимание к деталям", "Спокойствие"]
  },
  city: {
    id: "city",
    title: "Городской райдер",
    tagline: "Мотоцикл — это инструмент",
    image: "img/a-city.jpg",
    description:
      "Ты ездишь каждый день, в любую погоду, по делам. Мотоцикл для тебя — не хобби, а способ жить быстрее города.",
    bike: "Нейкед или макси-скутер: Honda CB500, Yamaha XMAX, BMW C400.",
    strengths: ["Практичность", "Ориентация в городе", "Универсальность"]
  },
  oldschool: {
    id: "oldschool",
    title: "Олдскул-байкер",
    tagline: "Настоящее — это то, что сделано до 2000-го",
    image: "img/a-oldschool.jpg",
    description:
      "Ты уважаешь традиции, кожаные куртки, клубы и долгие разговоры у костра. Новомодное тебе неинтересно.",
    bike: "Классика: Harley Sportster, Triumph Bonneville, Ural.",
    strengths: ["Верность", "Опыт", "Уважение к сообществу"]
  }
};

// Вопросы. Каждый ответ даёт очки архетипам.
const QUESTIONS = [
  {
    text: "За тобой пристроилась машина ДПС. Твои действия?",
    image: "img/q1.jpg.jpg",
    answers: [
      { text: "Спокойно еду по правилам, мне скрывать нечего", scores: { oldschool: 3, traveler: 1 } },
      { text: "Прибавляю газу — они всё равно не догонят", scores: { racer: 3, hooligan: 1 } },
      { text: "Сворачиваю во дворы, я тут каждый угол знаю", scores: { hooligan: 3, city: 1 } },
      { text: "Останавливаюсь, вежливо общаюсь, показываю документы", scores: { traveler: 3, city: 1 } }
    ]
  },
  {
    text: "Упал в кювет на скорости. Первое, что делаешь?",
    image: "img/q2.jpg.jpg",
    answers: [
      { text: "Проверяю, цел ли я, потом уже мотоцикл", scores: { traveler: 3, racer: 1 } },
      { text: "Матерюсь, встаю, поднимаю байк и еду дальше", scores: { enduro: 3, hooligan: 1 } },
      { text: "Достаю телефон — это контент", scores: { hooligan: 3, city: 1 } },
      { text: "Оцениваю, что сломалось, и думаю, как починить", scores: { philosopher: 3, oldschool: 1 } }
    ]
  },
  {
    text: "Твой мотоцикл — это прежде всего…",
    image: "img/q3.jpg.jpg",
    answers: [
      { text: "Скорость и адреналин", scores: { racer: 3 } },
      { text: "Инструмент, чтобы жить быстрее города", scores: { city: 3, hooligan: 1 } },
      { text: "Объект красоты и стиля", scores: { esthete: 3 } },
      { text: "Свобода и дорога без конца", scores: { traveler: 3, enduro: 1 } }
    ]
  },
  {
    text: "Как ты выбираешь экипировку?",
    image: "img/q4.jpg.jpg",
    answers: [
      { text: "Полный комплект, безопасность важнее всего", scores: { racer: 3, traveler: 1 } },
      { text: "Практично, удобно и недорого", scores: { city: 3 } },
      { text: "Главное — чтобы стильно смотрелось", scores: { esthete: 3, hooligan: 1 } },
      { text: "Минимум — я и так справлюсь", scores: { enduro: 2, hooligan: 2 } }
    ]
  },
  {
    text: "Идеальные выходные на мотоцикле?",
    image: "img/q5.jpg.heic",
    answers: [
      { text: "Трек или пустая трасса — валить на все деньги", scores: { racer: 3 } },
      { text: "Дальняя поездка с палаткой и кофрами", scores: { traveler: 3, enduro: 1 } },
      { text: "Город, друзья, покатушки до ночи", scores: { hooligan: 3, city: 1 } },
      { text: "Гараж, инструменты, доработка байка", scores: { philosopher: 3, oldschool: 1 } }
    ]
  },
  {
    text: "Друг просит прокатиться на твоём мотоцикле. Что отвечаешь?",
    image: "img/q6.jpg.jpg",
    answers: [
      { text: "«Сядешь только через мой труп»", scores: { esthete: 3, oldschool: 1 } },
      { text: "«Держи, только аккуратно»", scores: { oldschool: 2, traveler: 2 } },
      { text: "«Пошли, прокатимся вместе»", scores: { hooligan: 3, city: 1 } },
      { text: "«Не, он не для новичков»", scores: { enduro: 3, racer: 1 } }
    ]
  },
  {
    text: "Погода портится, дождь стеной. Что делаешь?",
    image: "img/q7.jpg.jpg",
    answers: [
      { text: "Еду, дождь — это не проблема", scores: { traveler: 3, city: 1 } },
      { text: "Пережидаю в кафе с чашкой кофе", scores: { esthete: 3 } },
      { text: "Лечу домой максимально быстро", scores: { city: 3, racer: 1 } },
      { text: "Дождь? Отлично — будет грязь и весело", scores: { enduro: 3, hooligan: 1 } }
    ]
  },
  {
    text: "Что для тебя главное в мотоцикле?",
    image: "img/q8.jpg.JPG",
    answers: [
      { text: "Мощность и динамика", scores: { racer: 3 } },
      { text: "Надёжность и комфорт", scores: { traveler: 3, city: 1 } },
      { text: "Характер и звук", scores: { oldschool: 3, philosopher: 1 } },
      { text: "Внешний вид и детали", scores: { esthete: 3 } }
    ]
  },
  {
    text: "Твой девиз?",
    image: "img/q9.jpg.jpg",
    answers: [
      { text: "Быстрее, выше, дальше", scores: { racer: 3 } },
      { text: "Сделай сам — сделай хорошо", scores: { philosopher: 3, oldschool: 1 } },
      { text: "Дорога сама найдётся", scores: { traveler: 3, enduro: 1 } },
      { text: "Главное — выглядеть на все сто", scores: { esthete: 3, hooligan: 1 } }
    ]
  },
  {
    text: "Как ты относишься к новичкам на дороге?",
    image: "img/q10.jpg.jpg",
    answers: [
      { text: "Осторожно, стараюсь держаться подальше", scores: { racer: 3, esthete: 1 } },
      { text: "Помогаю советом — сам таким был", scores: { oldschool: 3, traveler: 1 } },
      { text: "Смешно смотреть, как они мучаются", scores: { hooligan: 3, enduro: 1 } },
      { text: "Каждый сам через это проходит", scores: { philosopher: 3, city: 1 } }
    ]
  }
];
