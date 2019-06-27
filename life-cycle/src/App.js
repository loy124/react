import React, { Component } from "react";
import MemberList from "./MemberList";

export default class App extends Component {
  render() {
    return <MemberList count={5} />;
  }
}
