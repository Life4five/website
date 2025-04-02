const phrases = [
  "Tensor", "Backpropagation", "Weight Matrix", "CrossEntropy",
  "Epoch", "Noise Injection", "GPT", "Feature Map", "LSTM",
  "DataFrame", "ROC-AUC", "Hidden Layer", "Sigmoid", "Overfitting",
  "RandomForest", "Normalization", "Hyperparameter", "Latent Space",
  "Softmax", "Clustering", "PyTorch", "Gradient Descent"
];

const headers = [
  "LOADING...",
  "BUILDING STRUCTURE...",
  "COMPILING...",
  "ALLOCATING MEMORY..."
];

const marquees = document.querySelectorAll('.marquee');

marquees.forEach((el, i) => {
  const randomWords = shuffle(phrases).slice(0, 6).join(" ⬢ ");
  el.textContent = `${headers[i]} ⬢ ${randomWords}`;
  el.style.animationDuration = `${15 + Math.random() * 15}s`;
});

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
