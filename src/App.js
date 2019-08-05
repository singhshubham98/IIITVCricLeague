import React, { Component } from "react";
import Home from "./components/dashbord/Home";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/auth/register";
import Fixture from "./components/fixtures/fixtures";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/fixtures" component={Fixture} />
          <Route exact path="/register" component={Register} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
