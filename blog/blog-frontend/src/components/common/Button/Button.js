import React, { Component } from "react";

import styles from "./Button.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

//jsx에서 ...을 사용하면 내부에 있는 값들을 props로 넣어줍니다.
const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = "default" }) => {
  //to값이 존재하면 Link사용 그렇지 않으면 div 사용
  //비활성화 버튼일때도 Div사용
  const Element = to && !disabled ? Link : Div;
  //disabled값이 true가 되면 className에 disabled를 추가한다
  return (
    <Element
      to={to}
      className={cx("button", theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};
export default Button;
