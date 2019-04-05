import React, { Component } from "react";
import IterationSample from "./IterationSample";
class App extends Component {
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
        <IterationSample />
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
