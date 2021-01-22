// const locationForm = (value = '') => {
//   const newForm = `<form action="#" method="POST" class="location-form"><input type="text" placeholder="Enter location name" name="locationName" required value="${value}"><input type="submit"></form>`;

//   return newForm;
// };

async function getWeatherData() {
  const path = "url"
  try {
  const response = await fetch(path);
  const json = await response.json();

  return json;
  } catch(err) {
    console.log(err);
  }
}

getWeatherData();