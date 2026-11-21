function isLeapYear(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    return `${num} is a leap year.`;
  } else {
    return `${num} is not a leap year.`;
  }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

const yearInput = document.getElementById("year-input");
const checkBtn = document.getElementById("check-btn");
const presetButtons = document.querySelectorAll(".preset-btn");
const resultCard = document.getElementById("result-card");
const resultTag = document.getElementById("result-tag");
const resultText = document.getElementById("result-text");
const ruleExplanation = document.getElementById("rule-explanation");

function explainRule(num) {
  if (num % 400 === 0) {
    return "Es divisible por 400 (excepción de siglo: sí es bisiesto).";
  }
  if (num % 100 === 0) {
    return "Es divisible por 100 pero no por 400 (no es bisiesto).";
  }
  if (num % 4 === 0) {
    return "Es divisible por 4 y no es divisible por 100.";
  }
  return "No es divisible por 4.";
}

function updateUI(targetYear) {
  const numericYear = Number(targetYear);
  if (!numericYear || numericYear < 1) return;

  year = numericYear;
  result = isLeapYear(year);
  const leap = result.includes("is a leap year.");

  yearInput.value = year;
  resultText.textContent = result;
  ruleExplanation.textContent = explainRule(year);

  if (leap) {
    resultCard.classList.remove("not-leap");
    resultCard.classList.add("is-leap");
    resultTag.textContent = "Bisiesto · 366 días";
  } else {
    resultCard.classList.remove("is-leap");
    resultCard.classList.add("not-leap");
    resultTag.textContent = "No bisiesto · 365 días";
  }
}

checkBtn.addEventListener("click", () => updateUI(yearInput.value));

yearInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") updateUI(yearInput.value);
});

presetButtons.forEach((btn) => {
  btn.addEventListener("click", () => updateUI(btn.dataset.year));
});