import React, { Component } from "react";

import FireAuthUser from "../../api/FireAuthUser";
import { SERVER_URL, PROJECT_NAME } from "../../common/Constants";
import "./Login.scss";
import bitmap from "../../img/bitmap.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.api = null;
    this.email = null;
    this.password = null;
  }

  componentDidMount() {
    this.api = new FireAuthUser(SERVER_URL, PROJECT_NAME);
  }

  login = async () => {
    const { history } = this.props;

    const email = this.email.value;
    const password = this.password.value;

    try {
      const res = await this.api.login(email, password);
      history.push("/mainScreen");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <input
            type="text"
            className="Rect Rectangle-email"
            placeholder="email"
            ref={ref => (this.email = ref)}
          />
          <input
            type="password"
            className="Rect Rectangle-password"
            placeholder="password"
            ref={ref => (this.password = ref)}
          />
          <button className="Rectangle-login" onClick={() => this.login()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
