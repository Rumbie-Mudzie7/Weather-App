function calculateTemp() {
  function celToFah(celsius) {
    let fahrenheit = Math.round((celsius * (9 / 5)) + 32);
    return fahrenheit;
  }

  function fahToCel(fahrenheit) {
    let celsius = Math.round((fahrenheit - 32) * (5 / 9));
    return celsius;
  }

  // Checks if Celsius or Fahrenheit is selected
  let tempSelected = document.getElementById("temp_diff");
  // let valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
  let valueTemp = tempSelected.value;

  // Checks the value inside the Temperature input
  let numberTemp = document.getElementById("temp").value;

  let result;

  if (valueTemp == 1) {
    result = fahToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML = numberTemp + " °Fahreinheit = " + result + "°Celcius";
  } else {
    result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML = numberTemp + " °Celcius = " + result + "°Fahreinheit";
  }

}

export default calculateTemp;