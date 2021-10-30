import { ADD_TASK } from "./ActionTypes";

function TasklistReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      console.log(ADD_TASK);
      return state;
    default:
      throw new Error();
  }
}

export default TasklistReducer;
