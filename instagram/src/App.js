import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";

// get pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainScreen from "./pages/mainScreen/MainScreen";
import Search from "./pages/search/Search";
import Upload from "./pages/upload/Upload";
// import Activity from "./pages/activity/Activity";
import Reply from "./pages/reply/Reply";
import Profile from "./pages/profile/Profile";
// import Footer from "./pages/footer/Footer";

import RestAPI from "./common/RestAPI";

class App extends Component {
  componentDidMount() {
    RestAPI();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mainScreen" component={MainScreen} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/reply" component={Reply} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route exact path="/footer" component={Footer} /> */}
        {/*<Route exact path="/activity" component={Activity} /> */}
      </div>
    );
  }
}

export default App;
