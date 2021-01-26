import setWeather from './weather';
import calculateTemp from './converter';

let myForm = document.querySelector('.form-area');
const select = document.createElement('select');
select.innerHTML = '<select><option value="">Select an option</option><option value="sunny">Sunny</option><option value="rainy">Rainy</option><option value="snowing">Snowing</option><option value="overcast">Overcast</option></select>'


let myBody = document.querySelector('body');
myBody.appendChild(select);
document.querySelector('select').addEventListener('change', setWeather);

const locationForm = (value = '') => {
  const newForm = `<form action="#" method="POST" class="location-form"><input type="text" placeholder="Enter location name" name="locationName" required value="${value}"><input type="submit"></form>`;

  return newForm;
};

myForm.innerHTML = locationForm();
let weatherForm = document.querySelector('.location-form');

weatherForm.addEventListener('submit', function() {
  const userLocation = input.value;
  getWeatherData(userLocation);
})


async function getWeatherData(value) {
  const path = `api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=d943e1092dcc2cf810696528f8081ef6`;
  try {
  const response = await fetch(path);
  const json = await response.json();

  return json;
  // console.log(json);
  } catch(err) {
    console.log(err);
  }
}

getWeatherData();

