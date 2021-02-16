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
 * @param {string} city city for fetch request
 * @todo Request data and pass the result to weatherStoreChanger
 * @returns nothing
 */
export default function thunkForAPIrequest(city) {
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
      }, 1000);
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
