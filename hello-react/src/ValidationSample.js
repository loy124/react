import React, { Component } from "react";
import "./ValidationSample.css";

export default class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  hanldeChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  };
  //ref 사용해보기 <input ref={(ref) => {this.input=ref}}></input>
  //직접 DOM에 접근해야할 때 사용
  render() {
    return (
      <div>
        <input
          ref={ref => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.hanldeChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
