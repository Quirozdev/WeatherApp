export function convertToFahrenheit(celciusGrades) {
  return ((celciusGrades * 9) / 5 + 32).toFixed(2);
}

export function convertToCelcius(fahrenheitGrades) {
  return (((fahrenheitGrades - 32) * 5) / 9).toFixed(2);
}

export function getConvertedTemperatureAndLetterType(
  temperature,
  currentTemperatureType
) {
  if (currentTemperatureType === 'celcius') {
    return {
      temperature: convertToCelcius(temperature),
      temperatureTypeLetter: 'C',
    };
  }
  return {
    temperature: convertToFahrenheit(temperature),
    temperatureTypeLetter: 'F',
  };
}
