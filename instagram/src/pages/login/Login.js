import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Login.scss";

export default class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="back">
        <div className="Rectangle">
          <header className="App-header">
            <img src={bitmap} className="Bitmap" alt="logo" />
            <div className="margin">
              <input className="Rect Rectangle-3 email" placeholder="email" />
              <input
                className="Rect Rectangle-3 password"
                placeholder="password"
              />
              <button
                className="Rect Rectangle-4 login"
                onClick={() => history.push("/MainScreen")}
              >
                Login
              </button>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
