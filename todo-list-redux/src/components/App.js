import React, { Component } from "react";
import PageTemplate from "./PageTemplate";
import TodoListContainer from "../containers/TodoListContainer";
import TodoInputContainer from "../containers/TodoInputContainer";

// const initialTodos = new Array(500).fill(0).map(
//   (foo, index) => ({id: index, text: `일정 ${index}`, done:false})
// );
export default class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInputContainer />
        <TodoListContainer />
      </PageTemplate>
    );
  }
}
