"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#result-button").addEventListener("click", callCalculation);
}

function callCalculation() {
  const input = document.querySelector("#input-kg").value;
  const results = calculateKgToPounds(input);
  showKgToPounds(results);
}

function calculateKgToPounds(input) {
  console.log("Tryk på knappen");
  const kgToPoundsValue = 2.2046;
  const resultPounds = input * kgToPoundsValue;
  return resultPounds;
}

function showKgToPounds(results) {
  document.querySelector("#result-pounds").textContent = `${results}`;
}
