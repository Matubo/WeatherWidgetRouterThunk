
/**
 * @param {object} store current state of weatherState
 * @returns {object} copy of weatherState
 */
export default function stateMapForWeatherContainer(store) {
    return {
      storeName: store.name,
      storeTemperature: store.temperature,
      storeFeels_like: store.feels_like,
      storeHumidity: store.humidity,
      storeWeather: store.weather,
      storeFetching: store.fetching,
    };
  }