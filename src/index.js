import "core-js/stable";
import "regenerator-runtime/runtime";

import setWeather from './weather';
import displayData from './converter';

let myForm = document.querySelector('.form-area');

let myBody = document.querySelector('body');
setWeather();


const locationForm = (value = '') => {
  const newForm = `<form id="location" action="#" method="POST" class="location-form"><input type="text" placeholder="Enter location name" name="locationName" required value="${value}"><input type="submit"></form>`;

  return newForm;
};

async function getWeatherData(value = 'London,uk') {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=d943e1092dcc2cf810696528f8081ef6`;
  try {
    const response = await fetch(path);
    const json = await response.json();
    
    setWeather(json);
    let output = document.querySelector('.climateData');
    output.innerHTML = displayData(json);
    
  } catch (err) {
    console.log('I was not able to fetch anything');
    let output = document.querySelector('.climateData');
    output.innerHTML = 'I was not able to fetch anything';
    setWeather();
  }
}

myForm.innerHTML = locationForm();
let weatherForm = document.querySelector('#location');

weatherForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userLocation = weatherForm[0].value;
  getWeatherData(userLocation);
});




