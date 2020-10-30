import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CountryListScreen from "./CountryListScreen/CountryListScreen";
import CountryDetails from "./CountryDetail/CountryDetail";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CountryListScreen} />
        <Route path="/country/:code" component={CountryDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
