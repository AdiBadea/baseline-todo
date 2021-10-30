import { ADD_TASK } from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

function TasklistReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask: object = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };
      console.log(newTask);
      state.push(newTask);
      return state;
    default:
      throw new Error();
  }
}

export default TasklistReducer;
