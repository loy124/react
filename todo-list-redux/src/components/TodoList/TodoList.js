import React, { Component } from "react";
import TodoItem from "../TodoItem";

export default class TodoList extends Component {
  //컴포넌트 최적화하기
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.todos !== nextProps.todos; 배열을 실제로 업데이트해야하는 상황이기때문에 적용이 되지 않는다
  // }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(todo => (
      <TodoItem
        key={todo.get("id")}
        done={todo.get("done")}
        onToggle={() => onToggle(todo.get("id"))}
        onRemove={() => onRemove(todo.get("id"))}
      >
        {todo.get("text")}
      </TodoItem>
    ));
    return <div>{todoList}</div>;
  }
}
