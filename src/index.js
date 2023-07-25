import { getWeatherData, processForeCastData } from './weather';
import {
  displayCurrentWeatherData,
  displayForecastData,
  displayErrorMsg,
  setVisible,
  setHidden,
  changeTemperatureTypeToAllTemperatureElems,
} from './dom';
import AppState from './state';

import './style.css';

const form = document.querySelector('form');
const locationInput = document.getElementById('location-input');
const contentInfoElem = document.querySelector('.content-info');
const loadingElem = document.getElementById('loading');

const appState = new AppState();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  // to avoid fetching already fetched data
  if (location === appState.currentCity) {
    return;
  }
  setHidden(contentInfoElem);
  setVisible(loadingElem);
  const weatherData = await getWeatherData(location);
  setHidden(loadingElem);
  const { error } = weatherData;
  if (error) {
    displayErrorMsg(error.message);
    return;
  }
  appState.currentCity = location;
  const forecastData = processForeCastData(weatherData.forecast.forecastday);
  displayCurrentWeatherData(weatherData, appState.temperatureType);
  displayForecastData(forecastData, appState.temperatureType);
  setVisible(contentInfoElem);
});

const toggleTemperatureTypeBtn = document.getElementById(
  'toggle-temperature-type-btn'
);

toggleTemperatureTypeBtn.addEventListener('click', function () {
  const currentTemperatureType = appState.temperatureType;
  const temperatureElements = document.querySelectorAll('.temperature');
  if (currentTemperatureType === 'celcius') {
    appState.temperatureType = 'fahrenheit';
    changeTemperatureTypeToAllTemperatureElems(
      temperatureElements,
      appState.temperatureType
    );
    this.textContent = 'Switch to Celcius';
  } else {
    appState.temperatureType = 'celcius';
    changeTemperatureTypeToAllTemperatureElems(
      temperatureElements,
      appState.temperatureType
    );
    this.textContent = 'Switch to Fahrenheit';
  }
});
