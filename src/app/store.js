import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

/**
 * Reducer for weather state
 * @param {object} action action type and new state data
 * @returns {object} state returns new weather state
 */
function weatherStoreChanger(
  state = {
    name: "null",
    temperature: "null",
    feels_like: "null",
    humidity: "null",
    weather: "null",
    fetching: false,
  },
  action
) {
  if (action.type === "SET_NEW_WEATHER_DATA") {
    console.log(state);
    return {
      name: action.newObj.name,
      temperature: action.newObj.temperature,
      feels_like: action.newObj.feels_like,
      humidity: action.newObj.humidity,
      weather: action.newObj.weather,
      fetching: state.fetching,
    };
  }
  if (action.type === "FETCHING") {
    return {
      name: state.name,
      temperature: state.temperature,
      feels_like: state.feels_like,
      humidity: state.humidity,
      weather: state.weather,
      fetching: state.fetching,
      fetching: action.status,
    };
  }

  return state;
}

/**
 * @todo - create weatherStore store
 */
const weatherStore = createStore(
  weatherStoreChanger,
  applyMiddleware(thunkMiddleware)
);

export default weatherStore;
