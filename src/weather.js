import weatherConditions from './weather_conditions.json';

export async function getWeatherData(country) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=33cf022bfd764080a3831303231907&q=${country}&days=3&aqi=no&alerts=no`
  );
  const weatherData = await response.json();
  return weatherData;
}

export function getWeatherIconSrcAndAlt(conditionInfo, isDay = 1) {
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

export function processForeCastData(forecastArr) {
  return forecastArr.map((forecastDay) => {
    return { date: forecastDay.date, info: forecastDay.day };
  });
}
