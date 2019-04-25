import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Home.scss";

export default class Home extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <button
            className="Rect Rectangle-Login"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
          <button
            className="Rect Rectangle-Register"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
