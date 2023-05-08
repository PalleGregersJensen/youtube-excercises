"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

function initApp() {
  console.log("Hello world");
  // findNumberOfEvenDigitsInArray(array);
  document.querySelector("#click-button").addEventListener("click", bounceFunction);
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

const isAscending = function (arr) {
  for (let i = 0; i < arr.length; i += 1)
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  return true;
}

console.log(isAscending([1, 2, 3, 4, 5, 6]));
console.log(isAscending([1, 2, 31, 4, 5, 6]));
console.log(isAscending([51, 2, 3, 4, 5, 6]));


function bounceFunction() {
  console.log("button clicked");
  document.querySelector("#green-square").classList.add("bounce");
  document.querySelector("#green-square").addEventListener("animationend", removeAnimation)
}

function removeAnimation() {
      document.querySelector("#green-square").classList.remove("bounce");
    };

function addOneHundredAndDivideByThree(num) {
  num = Number(num);
  if (num) {
    let newNumber = (num + 100) / 3
    return newNumber;
  } else {

  } return false
}

let randomNumber = addOneHundredAndDivideByThree(343);
console.log(randomNumber);

randomNumber = addOneHundredAndDivideByThree("kalob");
console.log(randomNumber);

randomNumber = addOneHundredAndDivideByThree(30);
console.log(randomNumber);

randomNumber = addOneHundredAndDivideByThree(500);
console.log(randomNumber);



