import React, { Component } from "react";

export default class IterationSample extends Component {
  state = {
    names: ["눈사람", "얼음", "눈", "바람"],
    name: ""
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  //값 입력
  handleInsert = () => {
    //names에 값 추가및 name 초기화
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ""
    });
  };
  // 값 제거
  handleRemove = index => {
    const { names } = this.state;
    //const names = this.state.names;
    //filter을 사용해서 구현
    //index번째를 제외한 원소만 있는 새 배열 생성 
    this.setState({
        names: names.filter((item, i) => i !== index)
    })
    // this.setState({
    //   names: [...names.slice(0, index), ...names.slice(index + 1, names.length)]
    // });
  };

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {name}
      </li>
    ));

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}
