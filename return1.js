"use strict";

window.addEventListener("load", initApp);

function initApp() {
console.log("JS kører");
convertButtonClicked();
}

function convertButtonClicked() {
document.querySelector("#convert-button").addEventListener("click", prepareCalculation);
}

function prepareCalculation() {
const inputField = document.querySelector("#input-field").value;
const resultOfCalculation = metersToInches(inputField);
showResult(resultOfCalculation);
}

function metersToInches(input) {
const resultMetersToInches = 39.37 * input;
return resultMetersToInches;
}

function showResult(result) {
document.querySelector("#result").textContent = `${result}`;
}