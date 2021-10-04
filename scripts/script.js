'use strict';
// declare variables
const inputEl = document.getElementById('mass');
const selectEl = document.getElementById('select');
const btnEl = document.querySelector('.btn');
const messageEl = document.querySelector('.message');
const planetImgEl = document.querySelector('.planet-image');
const planetTextEl = document.querySelector('.planet');
const weightOutputEl = document.getElementById('weight');

// show and hide variable
const flexContainer = document.querySelector('.flex-container');
const description = document.querySelector('.description');
const planetImg = document.querySelector('.planet-image');
const resultCircle = document.querySelector('.result-circle ');

// programm variabel 
let planet;
let weight;

// FUNCTIONS

// function to show all result 
const showResult = function () {
  console.log(planet);
  let input = inputEl.value;
  if (inputEl.value == '' || inputEl.value == null) {
    showContainers();
    messageEl.innerHTML = `Mass is required`;
  } else if (planet === 'none') {
    showContainers();
    messageEl.innerHTML = `You did not select planet yet.`;
  } else if (inputEl.value > 0) {
    showContainers();
    showImg();
    if (planet === 'mercury') {
      showPlanet(planet); 
      weight = 0.377 * input;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }else if (planet === 'venus') {
      showPlanet(planet);
      weight = 0.91 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'earth') {
      showPlanet(planet);
      weight = 1 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'moon') {
      showPlanet(planet);
      weight = 	0.166 * inputEl.value; 
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'mars') {
      showPlanet(planet);
      weight = 	0.38 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'jupiter') {
      showPlanet(planet);
      weight = 2.34 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'saturn') {
      showPlanet(planet);
      weight = 1.06 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'uranus') {
      showPlanet(planet);
      weight = 0.92 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'neptune') {
      showPlanet(planet);
      weight = 1.19 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'pluto') {
      showPlanet(planet);
      weight = 0.06 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
  }
};

// function to show img and name on planet accordingly
const showPlanet = function (planet) {
  planetImg.src = `./assests/images/${planet}.png`;
  messageEl.innerHTML = `The weight of the object on ${planet}`;
};

// function to show containers
const showContainers = function () {
  flexContainer.style.display = 'flex';
  description.style.display = 'block';
};

// function to show img and weight on planet 
const showImg = function () {
  planetImg.style.display = 'block';
  resultCircle.style.display = 'flex';
};

//Add Event Listeners
selectEl.addEventListener('change', (e) => {
  planet = e.target.value;
});

btnEl.addEventListener('click', showResult);