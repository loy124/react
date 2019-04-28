import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

//액션타입 정의
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

//액션 생성 함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

//리듀서 초기상태
const initialState = List([
  Map({
    id: 0,
    text: "리액트 공부하기",
    done: true
  }),
  Map({
    id: 1,
    text: "컴포넌트 스타일링 해보기",
    done: false
  })
]);

//리듀서
export default handleActions({
  [INSERT]: (state, action) => {
    //payload 안에 있는 id, text, done의 레퍼런스를 만들어준다 바로 push(Map(action.payload))를 해도되지만 코드를 볼시에 어떤데이터를 처리함을 쉽게 볼수있게
    const { id, text, done } = action.payload;

    return state.push(
      Map({
        id,
        text,
        done
      })
    );
  },
  [TOGGLE]: (state, action) => {
    const { payload: id } = action;
    // const id = action.payload
    // 비구조화 할당을 통해 id레퍼런스에 action.payload라는 값을 넣는다
    //payload의 어떤값을 의미하는지 이해하기 쉽다.

    //전달 받은 id로 index를 조회한다
    const index = state.findIndex(todo => todo.get("id") === id);

    //updateIn을 통해 현재값을 참조하여 반대값으로 설정합니다
    return state.updateIn([index, "done"], done => !done);
    // return state.setIn([index, 'done'], !state.getIn([0, index]));
  },
  [REMOVE]: (state, action) => {
    const { payload: id } = action;
    const index = state.findIndex(todo => todo.get("id") === id);
    return state.delete(index);
  }
}, initialState)
