const terms = [
  "Tensor", "Backpropagation", "CrossEntropy", "Gradient Descent", "LSTM", "CNN", "RNN",
  "Transformer", "Self-Attention", "Attention Mask", "Bias", "Activation Function",
  "ReLU", "Sigmoid", "Softmax", "Tanh", "Dropout", "BatchNorm", "LayerNorm",
  "Weight Decay", "Vanishing Gradient", "Exploding Gradient", "∇θ", "θ", "∂L/∂x",
  "Epoch", "Step", "Learning Rate", "Loss Function", "Optimizer", "Adam", "SGD",
  "Hyperparameter", "Tuning", "Overfitting", "Underfitting", "Regularization", "Noise Injection",

  "DataFrame", "Pandas", "Numpy", "Sklearn", "PyTorch", "Keras", "TensorFlow", "LightGBM",
  "XGBoost", "ROC-AUC", "Confusion Matrix", "Precision", "Recall", "F1-score", "Clustering",
  "KMeans", "PCA", "t-SNE", "UMAP", "Feature Engineering", "One-Hot Encoding", "Label Encoding",
  "Missing Values", "Normalization", "Standardization", "Scaling", "Outliers", "Imputation",

  "Docker", "Kubernetes", "ONNX", "TorchScript", "Model Drift", "Inference", "Serving",
  "Latency", "Throughput", "Pipeline", "MLflow", "Airflow",

  "loss++", "404 Accuracy", "train()... again?!", "deploy.py", "coffee ≠ data", "NaN Attack",
  "gradient leak", "you forgot to shuffle", "random_state=42", "early stopping", "Oops All Bias",
  "Overfit Happens", "model.eval()", "await async inference", "🧠", "Glitching...", "eval() called"
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
