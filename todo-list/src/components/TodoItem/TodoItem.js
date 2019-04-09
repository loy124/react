import React, { Component } from "react";
import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class TodoItem extends Component {
  //컴포넌트 최적화하기
  //컴포넌트 배열이 렌덜이되는 리스트 컴포넌트일떄
  // 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일때
  // 하위 컴포넌트 개수가 많으며 리렌더링 말아야 할 상황해서도 리렌더링 될떄
  // shouldComponentUpdate를 사용
shouldComponentUpdate(nextProps, nextState) {
  return this.props.done !== nextProps.done;
}
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    // 비구조화 할당을 이용해서 레퍼런스를 만들었다.
    // this.props.onToggle
    return (
      <div className={cx("todo-item")} onClick={onToggle}>
        {/* checkbox를 렌더링해야하므로type 설정 input의 이벤트가 아닌 상위 div요소의 클릭이벤트로 관리하기때문에 readOnly */}
        <input className={cx("tick")} type="checkbox" checked={done} readOnly />
        {/* done값이 참이면 done클래스를 적용해 추후 text클래스와 done 클래스가 함께있으면 중간선을 긋도록 작성  */}
        <div className={cx("text", { done })}>{children}</div>
        <div className={cx("delete")} onClick={(e) => {
          onRemove();
          e.stopPropagation();
        }}>[지우기]</div>
      </div>
    );
  }
}
