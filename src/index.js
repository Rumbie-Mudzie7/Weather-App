import "core-js/stable";
import "regenerator-runtime/runtime";

import setWeather from './weather';
import calculateTemp from './converter';

let myForm = document.querySelector('.form-area');
const select = document.createElement('select');
select.innerHTML = '<option value="">Select an option</option><option value="sunny">Sunny</option><option value="rainy">Rainy</option><option value="snowing">Snowing</option><option value="overcast">Overcast</option>'


select.id = "weather-imgs";


let myBody = document.querySelector('body');
myBody.appendChild(select);
document.querySelector('#weather-imgs').addEventListener('change', setWeather);


const locationForm = (value = '') => {
  const newForm = `<form id="location" action="#" method="POST" class="location-form"><input type="text" placeholder="Enter location name" name="locationName" required value="${value}"><input type="submit"></form>`;

  return newForm;
};

myForm.innerHTML = locationForm();
let weatherForm = document.querySelector('#location');

weatherForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userLocation = weatherForm[0].value;
  console.log(userLocation);
  getWeatherData(userLocation);
  console.log('You have submitted the form');

})


async function getWeatherData(value = 'London,uk') {
  const path = `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=d943e1092dcc2cf810696528f8081ef6`;
  try {
    const response = await fetch(path);
    const json = await response.json();
    // return json;

    console.log(json.main);
    // console.log(json.weather instanceof Array);
    setWeather(json);
  } catch (err) {
    console.log('I was not able to fetch anything');
  }
}



let tempForm = document.querySelector('#tempCalc');

tempForm.addEventListener('submit', function (e) {
  console.log('You have clicked temp form!!');
  e.preventDefault();
  calculateTemp();
});

getWeatherData();