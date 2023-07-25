export default class AppState {
  constructor() {
    this.temperatureType = 'celcius';
    this.currentCity = '';
  }

  get temperatureType() {
    return this._temperatureType;
  }

  get currentCity() {
    return this._currentCity;
  }

  set temperatureType(tempType) {
    this._temperatureType = tempType;
  }

  set currentCity(city) {
    this._currentCity = city;
  }
}
