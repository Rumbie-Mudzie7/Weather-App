function setWeather(choice) {
  // let mySelect = document.querySelector('#weather-imgs');
  
  // const choice = mySelect.value;

  if (choice.weather[0].main === 'Clear') {
    
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather4.jpg")';
  } else if (choice.weather[0].main === 'Clouds') {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather1.jpg")';
  } else if (choice.weather[0].main === 'Rain') {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather4.jpg")';
  } else if (choice.weather[0].main === 'Mist')  
  {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather2.jpg")';
  } else {
    document.querySelector('body').style.backgroundImage = 'url("")';
  }

}

export default setWeather;