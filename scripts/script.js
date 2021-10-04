'use strict';
const inputEl = document.getElementById('mass');
const selectEl = document.getElementById('select');
const optionEl = document.getElementById('option');
const btnEl = document.querySelector('.btn');
const messageEl = document.querySelector('.message');
const planetImgEl = document.querySelector('.planet-image');
const planetTextEl = document.querySelector('.planet');
const weightOutputEl = document.getElementById('weight');

const flexContainer = document.querySelector('.flex-container');
const description = document.querySelector('.description');
const planetImg = document.querySelector('.planet-image');
const resultCircle = document.querySelector('.result-circle ');

let planet = selectEl.value;
let weight;
// let input = inputEl.value;

const showResult = function () {
  console.log(planet);
  let input = inputEl.value;
  // let gravity;
  if (inputEl.value == '' || inputEl.value == null) {
    showContainers();
    messageEl.innerHTML = `Mass is required`;
  } else if (planet === 'none') {
    showContainers();
    messageEl.innerHTML = `You did not select planet yet.`;
  } else if (inputEl.value > 0) {
    if (planet === 'mercury') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet); 
      weight = 0.377 * input;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }else if (planet === 'venus') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 0.91 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'earth') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 1 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'moon') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 	0.166 * inputEl.value; 
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'mars') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 	0.38 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'jupiter') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 2.34 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'saturn') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 1.06 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'uranus') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 0.92 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'neptune') {
      let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 1.19 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
    else if (planet === 'pluto') {
      // let input = inputEl.value;
      showContainers();
      showImg();
      showPlanet(planet);
      weight = 0.06 * inputEl.value;
      weightOutputEl.innerHTML = `${weight.toFixed(2)} N`;
    }
  }
};

const showPlanet = function (planet) {
  planetImg.src = `./assests/images/${planet}.png`;
  messageEl.innerHTML = `The weight of the object on ${planet}`;
};

const showContainers = function () {
  flexContainer.style.display = 'flex';
  description.style.display = 'block';
};

const showImg = function () {
  planetImg.style.display = 'block';
  resultCircle.style.display = 'flex';
};

selectEl.addEventListener('change', (e) => {
  planet = e.target.value;
  // showResult();
});
