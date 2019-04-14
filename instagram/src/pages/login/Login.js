import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Login.scss";

export default class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <input className="Rect Rectangle-email" placeholder="email" />
          <input className="Rect Rectangle-password" placeholder="password" />
          <button
            className="Rectangle-login"
            onClick={() => history.push("/MainScreen")}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
