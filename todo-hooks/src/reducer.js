import uuid from "uuid/v4";
import { ADD, DELETE, COMPLETE, UNCOMPLETE } from "./action";
export const initialState = {
  toDos: [],
  completed: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };

    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => {
          // console.log("current:",toDo.id, "target:",action.payload);
          return toDo.id !== action.payload;
        })
      };

    case COMPLETE:
      const target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }]
      };

      case UNCOMPLETE:
      const aTarget = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter(toDo => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...aTarget }]
      };
    
    
    default:
      throw new Error();
  }
};

export default reducer;
