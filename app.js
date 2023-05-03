"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

function initApp() {
  console.log("Hello world");
  findNumberOfEvenDigitsInArray(array);
}

let array = [1, 2, 3, 4, 5, 6];

function findNumberOfEvenDigitsInArray(array) {
  console.log(array);

  const evens = array.filter(findEvenNumbersInArray);

  function findEvenNumbersInArray(num) {
    console.log(num);
    return num % 2 === 0;
  }

    console.log(evens);
    console.log(evens.length);
    biggestEvenNumberInArray();
}

let numbers = [87,23,45,3,22,2222,4456,443,333,11]

function sortElementsInAscendingOrder(numbers) {
    numbers.sort(function (a, b) { return a - b });     
}

console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

let arrayNumbers = numbers.sort(function (a, b) { return a - b });
console.log(arrayNumbers);

function biggestEvenNumberInArray() {
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 === 0) {
            console.log(element)
        }
        let elementMax = Math.max(numbers);
        console.log(elementMax);
    }
}
