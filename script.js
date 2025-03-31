/* script.js */
const features = [
  "Вес котиков (Cat weight)",
  "Цвет носков (Sock color)",
  "Кол-во кофе, выпитого разработчиком (Cups of coffee)",
  "Погода на Марсе (Mars weather)",
  "Уровень стресса разработчика (Developer stress level)",
  "Время отклика сервера (Server response time)",
  "Количество единорогов в офисе (Number of unicorns)"
];

const comments = [
  "Лучший предиктор (Best predictor)",
  "Под вопросом (Questionable)",
  "Кажется, влияет (Seems influential)",
  "Коррелирует с шумом (Correlated with noise)",
  "Опять NaN (NaN again)",
  "Нужно больше данных (Needs more data)"
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
  
  const rowCount = Math.floor(Math.random() * 4) + 3;
  
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
setInterval(generateRandomRows, 5000);
