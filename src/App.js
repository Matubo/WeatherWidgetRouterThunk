import React, { useEffect, useState } from "react";
import "./App.css";
import weatherStore from "./app/store";
import WeatherWidget from "./app/moduls/widgetContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  /*   useRouteMatch,
  useParams, */
} from "react-router-dom";

/**
 * @constructor
 * @returns jsx+react-native component
 */
function App() {
  return (
    <Router>
      <ul>
        <Link to="/WeatherWidgetRouterThunk">
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
        <Route exact path="/WeatherWidgetRouterThunk">
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

export default App;
