import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import './App.css'
import logo from './logo.svg'
//state의 color값을 랜덤색상으로 설정
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    const text = "반갑습니다";
    const condition = true;
    

    return (
      <div className="App">
      <div className="app-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>wellcome to react</h2>
      </div>
        {/* 문자열 종류 외의 값을 컴포넌트에 전달 할 때는 { }로 감싸야합니다 */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/> {/*컬러값을 props로 설정 */}
        <h1> 리액트 안녕!</h1>
        <h2> {text}</h2>
        {condition}
        {/* 주석 작성하기 */}
      </div>
    );
  }
}

export default App;
