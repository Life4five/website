/* script.js */
const features = [
  "Вес котиков (Cat weight)",
  "Цвет носков (Sock color)",
  "Кол-во кофе, выпитого разработчиком (Cups of coffee)",
  "Погода на Марсе (Mars weather)",
  "Уровень стресса разработчика (Developer stress level)",
  "Время отклика сервера (Server response time)",
  "Количество единорогов в офисе (Number of unicorns)",
  "Скорость интернета на Луне (Moon internet speed)",
  "Уровень шума вентиляторов на ноутбуке (Laptop fan noise)",
  "Количество багов в коде (Bug count)",
  "Фаза луны при деплое (Moon phase during deploy)",
  "Качество сна разработчика (Developer sleep quality)",
  "Средний рост пингвинов (Average penguin height)",
  "Вероятность восстания ИИ (AI uprising probability)",
  "Уровень заряда батареи мышки (Mouse battery level)",
  "Цвет футболки CEO (CEO T-shirt color)",
  "Количество пропущенных дедлайнов (Missed deadlines count)",
  "Вероятность успешного мерджа (Merge success probability)",
  "Температура кофе на столе (Coffee temperature)",
  "Количество постов в Stack Overflow за час (Stack Overflow posts/hour)",
  "Сколько раз упал продакшен за сутки (Production downtime today)",
  "Уровень сарказма разработчика (Developer sarcasm level)",
  "Процент рабочего времени, потраченного на мемы (Percentage of work spent on memes)",
  "Количество точек с запятой в коде (Semicolon count)",
  "Процент покрытия тестами (Test coverage percentage)",
  "Количество пустых строк в коде (Empty line count)",
  "Вероятность встречи с НЛО (Probability of UFO encounter)",
  "Число забытых console.log (Forgotten console.log count)",
  "Количество сгоревших нервных клеток разработчика (Developer burnt neurons)",
  "Среднее время до закрытия вкладки с этим сайтом (Avg. tab close time)",
  "Вероятность дожить до релиза (Probability to survive until release)",
  "Количество фичей, которые мы ещё не придумали (Uninvented feature count)",
  "Вероятность багов после исправления багов (Bug-after-fix probability)",
  "Число попыток перезапустить сервер (Server restart attempts)",
  "Количество печенек, съеденных при написании кода (Cookies consumed coding)",
  "Шанс разработчика уйти в монастырь (Chance of dev becoming a monk)",
  "Вероятность успешного собеседования после этого проекта (Interview success rate after this project)",
  "Количество репозиториев на GitHub, которые никто не смотрит (Ignored GitHub repos)",
  "Количество кофеина в организме (Caffeine level)",
  "Уровень эмоциональной стабильности команды (Team emotional stability)",
  "Средняя продолжительность обеденного перерыва (Average lunch break duration)",
  "Количество снов о коде (Number of coding dreams)",
  "Вероятность неожиданного отпуска разработчика (Dev unexpected vacation probability)",
  "Количество утраченных надежд PM-а (Lost hopes of PM)",
  "Сколько раз дизайнер переделал макет (Design revision count)",
  "Вероятность выпадения интернета во время созвона (Internet dropout during calls)",
  "Количество обещаний «сделаю завтра» (Number of 'will do tomorrow' promises)",
  "Количество раз, когда мы думали, что закончили (False completions)",
  "Количество вопросов от джунов в час (Junior questions per hour)",
  "Скорость ответа сисадмина на тикеты (Sysadmin ticket response speed)",
  "Средний пульс разработчика при деплое (Developer heart rate during deploy)",
  "Количество случайных коммитов в master (Accidental commits to master)"
];

const comments = [
  "Лучший предиктор (Best predictor)",
  "Под вопросом (Questionable)",
  "Кажется, влияет (Seems influential)",
  "Коррелирует с шумом (Correlated with noise)",
  "Опять NaN (NaN again)",
  "Нужно больше данных (Needs more data)",
  "Это вообще откуда? (Where did this even come from?)",
  "Переобучение 100% (100% Overfitted)",
  "Выглядит подозрительно (Looks suspicious)",
  "Аналитик негодует (Analyst disapproves)",
  "ML-инженер плачет (ML engineer crying)",
  "Никто не понимает эту фичу (No one understands this feature)"
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
