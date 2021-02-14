import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  /*   useRouteMatch,
  useParams, */
} from "react-router-dom";

let weatherObj = {
  a: {
    name: "Москва",
    temperature: "-15",
    feels_like: "-20",
    humidity: "80%",
    weather: "Снег",
  },
  b: {
    name: "Санкт-Петербург",
    temperature: "-15",
    feels_like: "-20",
    humidity: "80%",
    weather: "Дождь",
  },
  c: {
    name: "Ростов на дону",
    temperature: "-15",
    feels_like: "-20",
    humidity: "80%",
    weather: "Снегодождь",
  },
};
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
 * @param {string} city city for fetch request
 * @todo Request data and pass the result to weatherStoreChanger
 * @returns nothing
 */
function thunkForAPIrequest(city) {
  return (dispatch) => {
    dispatch({ type: "FETCHING", status: true });

    new Promise((resolve, reject) => {
      let weatherObject;
      if (city === "Moscow") {
        weatherObject = weatherObj.a;
      }
      if (city === "Saint Petersburg") {
        weatherObject = weatherObj.b;
      }
      if (city === "Rostov-on-Don") {
        weatherObject = weatherObj.c;
      }

      setTimeout(() => {
        resolve(weatherObject);
      }, 2000);
    })
      .then((data) => {
        return data; /* .json(); */
      })
      .then((data) => {
        dispatch({
          type: "SET_NEW_WEATHER_DATA",
          newObj: {
            name: data.name,
            temperature: data.temperature,
            feels_like: data.feels_like,
            humidity: data.humidity,
            weather: data.weather,
          },
        });
        return;
      })
      .then(() => {
        dispatch({ type: "FETCHING", status: false });
      })
      .catch(() => {
        console.log("query error");
        dispatch({ type: "FETCHING", status: false });
      });
  };
}
/**
 * @todo - create weatherStore store
 */
const weatherStore = createStore(
  weatherStoreChanger,
  applyMiddleware(thunkMiddleware)
);
/**
 * @constructor
 * @returns jsx+react-native component
 */
function App() {
  return (
    <Router>
      <ul>
        <Link to="/">
          <li>Москва</li>
        </Link>
        <Link to="/spb">
          <li>Санкт-Петербург</li>
        </Link>
        <Link to="/rnd">
          <li>Ростов-на-Дону</li>
        </Link>
      </ul>
      <Switch>
        <Route exact path="/">
          <WeatherWidget store={weatherStore} city="Moscow"></WeatherWidget>
        </Route>
        <Route path="/spb">
          <WeatherWidget
            store={weatherStore}
            city="Saint Petersburg"
          ></WeatherWidget>
        </Route>
        <Route path="/rnd">
          <WeatherWidget
            store={weatherStore}
            city="Rostov-on-Don"
          ></WeatherWidget>
        </Route>
      </Switch>
    </Router>
  );
}
/**
 * @param {object} store current state of weatherState
 * @returns {object} copy of weatherState
 */
function stateMapForWeatherContainer(store) {
  return {
    storeName: store.name,
    storeTemperature: store.temperature,
    storeFeels_like: store.feels_like,
    storeHumidity: store.humidity,
    storeWeather: store.weather,
    storeFetching: store.fetching,
  };
}
/**
 * @param {object} props current props from App() - current city
 * @returns {object} jsx component with curent weather state or preloader
 * @todo request to update data on component change and return jsx component
 */
function WeatherWidgetContainer(props) {
  let [localCityState, setLocalCityState] = useState(0);

  useEffect(() => {
    if (localCityState != props.city) {
      props.thunkForAPIrequest(props.city);
      setLocalCityState(props.city);
    }
  });

  if (props.storeFetching) {
    return <div className="preloader">Загрузка...</div>;
  } else {
    return (
      <div className="WeatherWidget">
        <div className="weatherFlex">
          <h1>{props.storeName}</h1>
          <h1>{props.storeTemperature}</h1>
        </div>
        <div className="weatherFlex">
          <p>Ощущается: {props.storeFeels_like}</p>
          <p>Влажность: {props.storeHumidity}</p>
        </div>
        <div className="weatherFlex">
          <p>{props.storeWeather}</p>
        </div>
      </div>
    );
  }
}
/**
 * @param {function} stateMapForWeatherContainer current state of weatherStore
 * @param {function} thunkForAPIrequest function for async weatherStore update
 * @param {function} WeatherWidgetContainer function return HOC
 */
let WeatherWidget = connect(stateMapForWeatherContainer, {
  thunkForAPIrequest,
})(WeatherWidgetContainer);

export default App;
