import { formatDate, parseDate } from './dates';
import { getWeatherIconSrcAndAlt } from './weather';
import {
  convertToCelcius,
  convertToFahrenheit,
  getConvertedTemperatureAndLetterType,
} from './temperatures';

// this is to prevent the animations from triggering when the page is loading
window.addEventListener('load', () => {
  contentInfoElem.classList.add('opacity-animated');
  errorMsgElem.classList.add('opacity-animated');
});

const contentInfoElem = document.querySelector('.content-info');
const errorMsgElem = document.getElementById('error-msg');

const locationElem = document.querySelector('.location');
const dateElement = document.querySelector('.date');
const hourElement = document.querySelector('.hour');
const temperatureTitleElem = document.querySelector('.temperature-title');
const humidityElem = document.querySelector('.humidity');
const weatherIconElem = document.getElementById('weather-icon');
const temperatureConditionElem = document.querySelector(
  '.temperature-condition'
);

const forecastsContainer = document.querySelector('.forecasts-container');

export function displayCurrentWeatherData(
  { current, location },
  temperatureType
) {
  locationElem.textContent = `${location.name}, ${location.region}, ${location.country}`;
  const [date, hour] = formatDate(new Date(location.localtime)).split(' ');
  dateElement.textContent = `${date}`;
  hourElement.textContent = `${hour}`;
  humidityElem.textContent = `Humidity: ${current.humidity}%`;
  let temperature;
  let temperatureTypeLetter;
  if (temperatureType !== 'celcius') {
    const temperatureObj = getConvertedTemperatureAndLetterType(
      current.temp_c,
      temperatureType
    );
    temperature = temperatureObj.temperature;
    temperatureTypeLetter = temperatureObj.temperatureTypeLetter;
  } else {
    temperature = current.temp_c;
    temperatureTypeLetter = 'C';
  }
  temperatureTitleElem.textContent = `${temperature}° ${temperatureTypeLetter}`;
  temperatureTitleElem.setAttribute('data-temperature', temperature);
  temperatureConditionElem.textContent = current.condition.text;
  const { src, alt } = getWeatherIconSrcAndAlt(
    current.condition,
    current.is_day
  );
  weatherIconElem.src = src;
  weatherIconElem.alt = alt;
}

export function displayForecastData(forecastData, temperatureType) {
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

    let temperature;
    let temperatureTypeLetter;
    if (temperatureType !== 'celcius') {
      const temperatureObj = getConvertedTemperatureAndLetterType(
        info.avgtemp_c,
        temperatureType
      );
      temperature = temperatureObj.temperature;
      temperatureTypeLetter = temperatureObj.temperatureTypeLetter;
    } else {
      temperature = info.avgtemp_c;
      temperatureTypeLetter = 'C';
    }

    const temperatureParaElem = document.createElement('p');
    temperatureParaElem.classList.add('temperature');
    temperatureParaElem.setAttribute('data-temperature', temperature);
    temperatureParaElem.textContent = `${temperature}° ${temperatureTypeLetter}`;

    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecast');

    forecastContainer.appendChild(forecastTitleElem);
    forecastContainer.appendChild(conditionIconElem);
    forecastContainer.appendChild(conditionTextElem);
    forecastContainer.appendChild(temperatureParaElem);

    forecastsContainer.appendChild(forecastContainer);
  });
}

export function changeTemperatureTypeToAllTemperatureElems(
  temperatureElements,
  newTemperatureType
) {
  temperatureElements.forEach((temperatureElem) => {
    const currentTemperature = temperatureElem.getAttribute('data-temperature');
    const { temperature, temperatureTypeLetter } =
      getConvertedTemperatureAndLetterType(
        currentTemperature,
        newTemperatureType
      );
    temperatureElem.textContent = `${temperature}° ${temperatureTypeLetter}`;
    temperatureElem.setAttribute('data-temperature', temperature);
  });
}

export function displayErrorMsg(errorMsg) {
  errorMsgElem.textContent = errorMsg;
  setVisible(errorMsgElem);
  setTimeout(() => {
    setHidden(errorMsgElem);
  }, 3000);
}

export function setVisible(element) {
  element.classList.remove('hidden');
  element.classList.add('visible');
}

export function setHidden(element) {
  element.classList.remove('visible');
  element.classList.add('hidden');
}
