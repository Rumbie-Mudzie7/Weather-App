function setWeather() {
  let mySelect = document.querySelector('#weather-imgs');
  
  const choice = mySelect.value;

  if (choice === "sunny") {
    
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather4.jpg")';
  } else if (choice === "rainy") {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather1.jpg")';
  } else if (choice === "snowing") {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather4.jpg")';
  } else if (choice === "overcast")  
  {
    document.querySelector('body').style.backgroundImage = 'url("../src/images/weather2.jpg")';
  } else {
    document.querySelector('body').style.backgroundImage = 'url("")';
  }

}

export default setWeather;