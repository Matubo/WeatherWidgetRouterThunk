import { useEffect, useState } from "react";
import { connect } from "react-redux";
import thunkForAPIrequest from "./thunkForRequest";
import stateMapForWeatherContainer from "./stateMap";
/**
 * Reducer for weather state
 * @param {object} action action type and new state data
 * @returns {object} state returns new weather state
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

let WeatherWidget = connect(stateMapForWeatherContainer, {
  thunkForAPIrequest,
})(WeatherWidgetContainer);

export default WeatherWidget;
