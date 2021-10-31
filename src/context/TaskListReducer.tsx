import { ADD_TASK } from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

const mockTasks = [
  {
    id: 1,
    name: "mock 1",
    isDone: false
  },
  {
    id: 2,
    name: "mock 2",
    isDone: false
  }
];

export const taskListStoreInitialState = {
  taskList: [...mockTasks]
};

function TasklistReducer(state = taskListStoreInitialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask: any = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };
      console.log("= NEW TASK CREATED =");
      console.log(state);
      return {
        ...state,
        taskList: state.taskList.concat(newTask)
      };
    default:
      throw new Error();
  }
}

export default TasklistReducer;
