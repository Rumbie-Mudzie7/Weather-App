function celToFah(celsius) {
  const fahrenheit = Math.round((celsius * (9 / 5)) + 32);
  return fahrenheit;
}

const displayData = (json) => {
  const climate = json.weather[0].main;


  const result = `<p id="climate-head"><b>Current Climate for ${json.name}</b></p><br/>
    <p><b>Temperature in °Fahreinheit: </b>${celToFah(json.main.temp)}°F</p><br/>
    <p><b>Temperature in °Celsius: </b>${json.main.temp}°C</p><br/>
    <p><b>Humidity: </b>${json.main.humidity}%</p><br/>
    <p><b>${climate}</b></p>`;
  return result;
};

export default displayData;