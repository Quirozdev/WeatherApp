import weatherConditions from './weather_conditions.json';
import './style.css';

const form = document.querySelector('form');
const locationInput = document.getElementById('location-input');

const contentElem = document.querySelector('.content');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const weatherData = await getWeatherData(location);
  console.log(weatherData);
  const forecastData = processForeCastData(weatherData.forecast.forecastday);
  displayCurrentWeatherData(weatherData);
  displayForecastData(forecastData);
  contentElem.classList.remove('hidden');
  contentElem.classList.add('.visible');
});

async function getWeatherData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=33cf022bfd764080a3831303231907&q=${country}&days=3&aqi=no&alerts=no`
  );
  const weatherData = await response.json();
  return weatherData;
}

const locationElem = document.querySelector('.location');
const dateElement = document.querySelector('.date');
const hourElement = document.querySelector('.hour');
const temperatureElem = document.querySelector('.temperature');
const humidityElem = document.querySelector('.humidity');
const weatherIconElem = document.getElementById('weather-icon');
const temperatureConditionElem = document.querySelector(
  '.temperature-condition'
);

const forecastsContainer = document.querySelector('.forecasts-container');

function displayCurrentWeatherData({ current, location, error }) {
  if (error) {
    alert(error.message);
    return;
  }
  locationElem.textContent = `${location.name}, ${location.region}, ${location.country}`;
  const [date, hour] = formatDate(new Date(location.localtime)).split(' ');
  dateElement.textContent = `${date}`;
  hourElement.textContent = `${hour}`;
  humidityElem.textContent = `Humidity: ${current.humidity}%`;
  temperatureElem.textContent = `${current.temp_c}° C`;
  temperatureConditionElem.textContent = current.condition.text;
  const { src, alt } = getWeatherIconSrcAndAlt(
    current.condition,
    current.is_day
  );
  weatherIconElem.src = src;
  weatherIconElem.alt = alt;
}

function displayForecastData(forecastData) {
  forecastsContainer.innerHTML = '';
  forecastData.forEach((forecastDay) => {
    const { date, info } = forecastDay;
    const forecastTitleElem = document.createElement('h4');
    const parsedDate = parseDate(date);
    const dayOfTheWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
    }).format(parsedDate);
    forecastTitleElem.textContent = dayOfTheWeek;

    const conditionIconElem = document.createElement('img');
    const { src, alt } = getWeatherIconSrcAndAlt(info.condition);
    conditionIconElem.src = src;
    conditionIconElem.alt = alt;

    const conditionTextElem = document.createElement('h3');
    conditionTextElem.textContent = info.condition.text;

    const temperatureParaElem = document.createElement('p');
    temperatureParaElem.textContent = `${info.avgtemp_c}° C`;

    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecast');

    forecastContainer.appendChild(forecastTitleElem);
    forecastContainer.appendChild(conditionIconElem);
    forecastContainer.appendChild(conditionTextElem);
    forecastContainer.appendChild(temperatureParaElem);

    forecastsContainer.appendChild(forecastContainer);
  });
}

function getWeatherIconSrcAndAlt(conditionInfo, isDay = 1) {
  const weatherConditionIconCode = weatherConditions.find(
    (weatherCondition) => {
      return weatherCondition.code === conditionInfo.code;
    }
  ).icon;
  const src = `./resources/icons/${
    isDay ? 'day' : 'night'
  }/${weatherConditionIconCode}.png`;
  const alt = conditionInfo.text;
  return { src, alt };
}

function formatDate(date) {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day < 10 ? '0' + day : day}/${
    month < 10 ? '0' + month : month
  }/${year} ${hours}:${minutes}`;
}

function parseDate(dateStr) {
  const dateArr = dateStr.split('-');
  const year = dateArr[0];
  // 0 indexed months
  const month = dateArr[1] - 1;
  const day = dateArr[2];
  return new Date(year, month, day);
}

function processForeCastData(forecastArr) {
  return forecastArr.map((forecastDay) => {
    return { date: forecastDay.date, info: forecastDay.day };
  });
}
