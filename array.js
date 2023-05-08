"use strict";

window.addEventListener("load", initApp);

const array = [];

async function initApp() {
  console.log("JS kører");
    const data = await getData();
  console.log(data);
  data.forEach(showPokemon);
}

async function getData() {
  let response = await fetch("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  let dataObject = await response.json();
  console.log(response);
  console.log(dataObject);
  return dataObject;
}


function showPokemon() {
  const pokemonHtml =
    `
      
    `
}