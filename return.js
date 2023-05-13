"use strict";

window.addEventListener("load", initApp);

function initApp() {
console.log("JS kører");
convertButtonClicked();
}

function convertButtonClicked() {
    document
        .querySelector("#convert")
        .addEventListener("click", anonymousFunction);
        
        
function anonymousFunction () {
const inputField = document.querySelector("#input-field").value;
const result = convertKgToPounds(inputField);
showResult(result);
};
}

function convertKgToPounds(input) {
const kgToPounds = 2.2046;
const resultCalculation = kgToPounds * input;
return resultCalculation;
}

function showResult(result) {
document.querySelector("#show-result").textContent = `${result}`;
}