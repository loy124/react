import React, { Component } from "react";
import TodoInput from "../components/TodoInput";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//액션생성 함수 호출
import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";

class TodoInputContainer extends Component {
  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput("");
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <div>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={value}
        />
      </div>
    );
  }
}

// mapStateToProps와 mapDispatchToPrOPS 함수에 대한 레퍼런스를 따로 만들지 않고 정의

export default connect(
  state => ({
    value: state.input.get("value")
  }),
  dispatch => ({
    // bindActionCreators를 사용하면 자동적으로 작업들을 한다(첫번째 파라미터는 액션생성함수들 객체 두번째는 dispatch)
    // {
    //     actionCreator: (...params) => dispatch(actionCreator(...params))
    // }
    // 그래서 이전에 했던거처럼 dispatch할 필요가 없다.
    // InputActions에는 InputActions : {
    //     setInput: (value) =. dispatch(inputActions.setInput(value))
    // }
    // 나중에 이를 호출할때는 this.props.InputActions.setInput으로 호출한다
    //
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoInputContainer);
