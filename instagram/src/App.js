import React, { Component } from "react";
import bitmap from "./img/bitmap.png";
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="back">
      <div className="Rectangle">
        <header className="App-header">
          <img src={bitmap} className="Bitmap" alt="logo" />
          <div className="margin">
            <button className="Rectangle-2">Login</button>
            <button className="Rectangle-3">Register</button>
          </div>
        </header>
      </div>
      </div>
    );
  }
}

export default App;
