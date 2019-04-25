import React, { Component } from "react";
import FireAuthUser from "../../api/FireAuthUser";
import { SERVER_URL, PROJECT_NAME } from "../../common/Constants";

import bitmap from "../../img/bitmap.png";
import "./Register.scss";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.api = null;
    this.nickname = null;
    this.email = null;
    this.password = null;
  }

  componentDidMount() {
    this.api = new FireAuthUser(SERVER_URL, PROJECT_NAME);
  }

  register = async () => {
    const { history } = this.props;

    const nickname = this.nickname.value;
    const email = this.email.value;
    const password = this.password.value;

    const body = {
      user: {
        id: email,
        user_name: "jaehun",
        user_type: 0
      },
      user_auth: {
        typ_login: 1,
        pw: password
      }
    };

    try {
      const res = await this.api.signUp(body);
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { history } = this.props;
    return (
      <div className="Rectangle-Introduction">
        <img src={bitmap} className="Bitmap" alt="logo" />
        <div className="Rect-box">
          <input
            className="Rect nickname"
            placeholder="nickname"
            ref={ref => (this.nickname = ref)}
          />
          <input
            className="Rect email"
            placeholder="email"
            ref={ref => (this.email = ref)}
          />
          <input
            className="Rect password"
            placeholder="password"
            ref={ref => (this.password = ref)}
          />
          <button className="Rect Rectangle-register" onClick={this.register}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
