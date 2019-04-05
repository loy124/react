import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";

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
    const text = "당신은 어썸한가요?";
    const condition = true;
    const style = {
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: "all",
      MozTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="my-div">
        {/* 문자열 종류 외의 값을 컴포넌트에 전달 할 때는 { }로 감싸야합니다 */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/> {/*컬러값을 props로 설정 */}
        <h1> 리액트 안녕!</h1>
        <h2> {text}</h2>
        {condition && "보여주세요"}
        <div style={style} />
        {/* 주석 작성하기 */}
      </div>
    );
  }
}

export default App;
