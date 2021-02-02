function celToFah(celsius) {
  let fahrenheit = Math.round((celsius * (9 / 5)) + 32);
  return fahrenheit;
}

function fahToCel(fahrenheit) {
  let celsius = Math.round((fahrenheit - 32) * (5 / 9));
  return celsius;
}


  let displayData = (json) => {
    let climate = json.weather[0].main;
    

    let result = `<p><b>Current Climate for ${json.name}</b></p>
    <p><b>Temperature in °Fahreinheit:</b>${celToFah(json.main.temp)}°F</p><br/>
    <p><b>Temperature in °Celsius:</b>${json.main.temp}°C</p><br/>
    <p><b>Humidity:</b>${json.main.humidity}%</p><br/>
    <p><b>${climate}</b></p>`;
    return result;
  }

export default displayData;