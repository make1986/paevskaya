import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
