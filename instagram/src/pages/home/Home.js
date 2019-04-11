import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Home.scss";

export default class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="back">
        <div className="Rectangle">
          <header className="App-header">
            <img src={bitmap} className="Bitmap" alt="logo" />
            <div className="margin">
              <button
                className="Rect Rectangle-1"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
              <button
                className="Rect Rectangle-2"
                onClick={() => history.push("/register")}
              >
                Register
              </button>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
