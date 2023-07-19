import data from './weather_conditions.json';
import '../public/style.css';

console.log(data);

const form = document.querySelector('form');
const locationInput = document.getElementById('location');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const weatherData = await getWeatherData(location);
  console.log(weatherData);
  fillDOMContent(weatherData);
});

async function getWeatherData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=33cf022bfd764080a3831303231907&q=${country}&aqi=no`
  );
  const weatherData = await response.json();
  return weatherData;
}

const locationElem = document.querySelector('.location-info');
const humidityElem = document.querySelector('.humidity');
const temperatureElem = document.querySelector('.temperature');
const temperatureConditionElem = document.querySelector(
  '.temperature-condition'
);
const weatherIconElem = document.getElementById('weather-icon');

function fillDOMContent({ current, location }) {
  locationElem.textContent = `${location.name}, ${location.region}, ${location.country}`;
  humidityElem.textContent = `${current.humidity}%`;
  temperatureElem.textContent = `${current.feelslike_c}° C`;
  temperatureConditionElem.textContent = `Condition: ${current.condition.text}`;
}
