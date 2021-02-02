function setWeather(choice = null) {
 
  if(choice === null) {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather5.jpg")';    
  } else {

    if (choice.weather[0].main === 'Clear') {
      
      document.querySelector('body').style.backgroundImage = 'url("../src/images/clear-weather.jpeg")';
    } else if (choice.weather[0].main === 'Clouds') {
      document.querySelector('body').style.backgroundImage = 'url("../src/images/clouds-weather2.jpg")';
    } else if (choice.weather[0].main === 'Rain') {
      document.querySelector('body').style.backgroundImage = 'url("../src/images/rain-weather4.jpg")';
    } else if (choice.weather[0].main === 'Mist')  
    {
      document.querySelector('body').style.backgroundImage = 'url("../src/images/misty-weather3.jpg")';
    } else {
      document.querySelector('body').style.backgroundImage = 'url("../src/images/weather5.jpg")';
    }
  }
}

export default setWeather;