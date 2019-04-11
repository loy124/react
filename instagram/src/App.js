import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// get pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainScreen from "./pages/mainScreen/MainScreen";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mainScreen" component={MainScreen} />
      </div>
    );
  }
}

export default App;
