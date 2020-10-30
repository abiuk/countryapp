import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CountryListScreen from "./CountryListScreen/CountryListScreen";
import CountryDetails from "./CountryDetail/CountryDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CountryListScreen} />
        <Route path="/country/:code" component={CountryDetails} />
      </Switch>
    </Router>
  );
}

export default App;
