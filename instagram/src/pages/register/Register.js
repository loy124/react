import React, { Component } from 'react'
import bitmap from "../../img/bitmap.png";
import "./Register.scss";

export default class Register extends Component {
  render() {
    const { history } = this.props;
    return (
<div className="back">
        <div className="Rectangle">
            <header className="App-header">
            <img src={bitmap} className="Bitmap" alt="logo" />
            <div className="margin">
                <input className="Rect Rectangle-3 nickname" placeholder="nickname"/>
                <input className="Rect Rectangle-3 email" placeholder="email"/>
                <input className="Rect Rectangle-3 password" placeholder="password"/>
                <button className="Rect Rectangle-5 register" onClick={() => history.push('/login')}>Register</button>
            </div>
            </header>
        </div>
      </div>
    )
  }
}