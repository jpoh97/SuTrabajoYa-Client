import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Service from "./pages/Service";

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Service}>
      <IndexRoute component={Service}></IndexRoute>
    </Route>
  </Router>,
app);

