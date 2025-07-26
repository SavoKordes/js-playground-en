const quotes = [
  "Knowing your own darkness is the best method for dealing with the darkness of other people.",
  "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
  "Your visions will become clear only when you can look into your own heart.",
  "The privilege of a lifetime is to become who you truly are.",
  "In all chaos there is a cosmos, in all disorder a secret order."
];

let shuffledQuotes = [...quotes]; // Copy of original
let currentIndex = 0;

// Shuffle function (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(shuffledQuotes); // Initial shuffle

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");

if (quoteBtn) {
  quoteBtn.addEventListener("click", () => {
    quoteOutput.textContent = shuffledQuotes[currentIndex];
    currentIndex++;

    if (currentIndex >= shuffledQuotes.length) {
      shuffleArray(shuffledQuotes); // Reshuffle for next round
      currentIndex = 0;
    }
  });
}


// Dunkelmodus
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Klick-Zähler
let count = 0;
const countBtn = document.getElementById("countBtn");
const countOutput = document.getElementById("count");

if (countBtn) {
  countBtn.addEventListener("click", () => {
    count++;
    countOutput.textContent = count;
  });
}

/////////////////////////////////

const calcBtn = document.getElementById("calcBtn");
const resultDisplay = document.getElementById("calcResult");

if (calcBtn) {
  calcBtn.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "Bitte zwei Zahlen eingeben.";
      return;
    }

    let result;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Division durch 0!";
        break;
    }

    resultDisplay.textContent = `Ergebnis: ${result}`;
  });
}

