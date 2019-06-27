import React from "react";

import { useDispatch } from "../context";
import { DELETE, UNCOMPLETE, COMPLETE } from "../action";
export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <span
        role="img"
        aria-label=""
        onClick={() => dispatch({ type: DELETE, payload: id })}
      >
        ❌
      </span>
      <span
        role="img"
        aria-label=""
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? " 🙅🏼‍♂️" : "✅"}
      </span>
    </li>
  );
};
