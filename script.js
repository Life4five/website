/* script.js */
const features = [
  "Вес котиков",
  "Цвет носков",
  "Кол-во кофе, выпитого разработчиком",
  "Погода на Марсе",
  "Уровень стресса разработчика",
  "Время отклика сервера",
  "Количество единорогов в офисе",
  "Скорость интернета на Луне",
  "Уровень шума вентиляторов на ноутбуке",
  "Количество багов в коде",
  "Фаза луны при деплое",
  "Качество сна разработчика",
  "Средний рост пингвинов",
  "Вероятность восстания ИИ",
  "Уровень заряда батареи мышки",
  "Цвет футболки CEO",
  "Количество пропущенных дедлайнов",
  "Вероятность успешного мерджа",
  "Температура кофе на столе",
  "Количество постов в Stack Overflow за час",
  "Сколько раз упал продакшен за сутки",
  "Уровень сарказма разработчика",
  "Процент рабочего времени, потраченного на мемы",
  "Количество точек с запятой в коде",
  "Процент покрытия тестами",
  "Количество пустых строк в коде",
  "Вероятность встречи с НЛО",
  "Число забытых console.log",
  "Количество сгоревших нервных клеток разработчика",
  "Среднее время до закрытия вкладки с этим сайтом",
  "Вероятность дожить до релиза",
  "Количество фичей, которые мы ещё не придумали",
  "Вероятность багов после исправления багов",
  "Число попыток перезапустить сервер",
  "Количество печенек, съеденных при написании кода",
  "Шанс разработчика уйти в монастырь",
  "Вероятность успешного собеседования после этого проекта",
  "Количество репозиториев на GitHub, которые никто не смотрит",
  "Количество кофеина в организме",
  "Уровень эмоциональной стабильности команды",
  "Средняя продолжительность обеденного перерыва",
  "Количество снов о коде",
  "Вероятность неожиданного отпуска разработчика",
  "Количество утраченных надежд PM-а",
  "Сколько раз дизайнер переделал макет",
  "Вероятность выпадения интернета во время созвона",
  "Количество обещаний «сделаю завтра»",
  "Количество раз, когда мы думали, что закончили",
  "Количество вопросов от джунов в час",
  "Скорость ответа сисадмина на тикеты",
  "Средний пульс разработчика при деплое",
  "Юрий Саночкин приглашает вас на запланированную конференцию"
];

const comments = [
  "Лучший предиктор",
  "Под вопросом",
  "Кажется, влияет",
  "Коррелирует с шумом",
  "Опять NaN",
  "Нужно больше данных",
  "Это вообще откуда?",
  "Переобучение 100%",
  "Выглядит подозрительно",
  "Аналитик негодует",
  "ML-инженер плачет",
  "Никто не понимает эту фичу"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomImportance() {
  return (Math.random() * 1.1 - 0.1).toFixed(2);
}

function generateRandomRows() {
  const tbody = document.querySelector("#featureTable tbody");
  tbody.innerHTML = "";
  
  const rowCount = Math.floor(Math.random() * 5) + 8;
  
  for (let i = 0; i < rowCount; i++) {
    const tr = document.createElement("tr");
    
    const tdId = document.createElement("td");
    tdId.textContent = i + 1;
    tr.appendChild(tdId);
    
    const tdFeature = document.createElement("td");
    tdFeature.textContent = getRandomItem(features);
    tr.appendChild(tdFeature);
    
    const tdImportance = document.createElement("td");
    tdImportance.textContent = getRandomImportance();
    tr.appendChild(tdImportance);
    
    const tdComment = document.createElement("td");
    tdComment.textContent = getRandomItem(comments);
    tr.appendChild(tdComment);
    
    tbody.appendChild(tr);
  }
}

generateRandomRows();
setInterval(generateRandomRows, 7000);
