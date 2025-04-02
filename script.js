const terms = [
  "Tensor", "Backpropagation", "Weight Matrix", "CrossEntropy", "Epoch",
  "Noise Injection", "GPT", "Feature Map", "LSTM", "DataFrame", "ROC-AUC",
  "Hidden Layer", "Sigmoid", "Overfitting", "RandomForest", "Normalization",
  "Hyperparameter", "Latent Space", "Softmax", "Clustering", "PyTorch",
  "Gradient Descent", "loss++", "∇θ", "404 Accuracy"
];

const headers = [
  "LOADING...",
  "BUILDING STRUCTURE...",
  "COMPILING...",
  "ALLOCATING MEMORY..."
];

const funnyPhrases = [
  "nope", "not today", "404 Gradient", "∇ gone", "Overfit Happens", "Glitching..."
];

const wrappers = document.querySelectorAll('.marquee-wrapper');

wrappers.forEach((wrapper, i) => {
  const inner = wrapper.querySelector('.marquee-inner');

  const rotation = Math.floor(Math.random() * 61) - 30;
  wrapper.style.transform = `rotate(${rotation}deg)`;

  const direction = Math.random() < 0.5 ? 'scroll-left' : 'scroll-right';
  const duration = 15 + Math.random() * 15;

  inner.style.animation = `${direction} ${duration}s linear infinite`;

  const randomTerms = shuffle(terms).slice(0, 6).join(" ⬢ ");
  inner.textContent = `${headers[i]} ⬢ ${randomTerms}`;
});

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const flyingEl = document.querySelector('.flying-gradient');

function moveFlyingElement() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const elWidth = flyingEl.offsetWidth;
  const elHeight = flyingEl.offsetHeight;

  const randomLeft = Math.random() * (vw - elWidth);
  const randomTop = Math.random() * (vh - elHeight);

  flyingEl.style.left = randomLeft + 'px';
  flyingEl.style.top = randomTop + 'px';
}

setInterval(moveFlyingElement, 3000 + Math.random() * 2000);
moveFlyingElement();

document.addEventListener('mousemove', (e) => {
  const rect = flyingEl.getBoundingClientRect();
  const elX = rect.left + rect.width / 2;
  const elY = rect.top + rect.height / 2;
  const dist = Math.hypot(e.clientX - elX, e.clientY - elY);

  if (dist < 100) {
    const newPhrase = funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)];
    const oldText = flyingEl.textContent;
    flyingEl.textContent = newPhrase;
    moveFlyingElement();

    setTimeout(() => {
      flyingEl.textContent = "∇θ";
    }, 1000);
  }
});
