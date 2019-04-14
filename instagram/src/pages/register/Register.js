import React, { Component } from "react";
import bitmap from "../../img/bitmap.png";
import "./Register.scss";

export default class Register extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <input className="Rect nickname" placeholder="nickname" />
          <input className="Rect email" placeholder="email" />
          <input className="Rect password" placeholder="password" />
          <button
            className="Rect Rectangle-register"
            onClick={() => history.push("/login")}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
