const form = document.querySelector('form');
const locationInput = document.getElementById('location');
const infoDisplayer = document.querySelector('.info-displayer');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const weatherData = await getWeatherData(location);
  infoDisplayer.textContent = JSON.stringify(weatherData);
});

async function getWeatherData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=33cf022bfd764080a3831303231907&q=${country}&aqi=no`
  );
  const weatherData = await response.json();
  return weatherData;
}
