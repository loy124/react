import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// get pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainScreen from "./pages/mainScreen/MainScreen";
import Search from "./pages/search/Search";
// import Photo from "./pages/photo/Photo";
// import Activity from "./pages/activity/Activity";
// import Profile from "./pages/profile/Profile";
import Reply from "./pages/reply/Reply";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mainScreen" component={MainScreen} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/reply" component={Reply} />

        {/* <Route exact path="/photo" component={Photo} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/profile" component={Profile} /> */}
      </div>
    );
  }
}

export default App;
