/** Context */
import { ADD_TASK } from "./ActionTypes";
/** Interfaces */
import { Task, TaskListReducerActions } from "../common/commonInterfaces";
/** Utility */
import { v4 as uuidv4 } from "uuid";

const mockTasks: Task[] = [
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

function TasklistReducer(
  state = taskListStoreInitialState,
  action: TaskListReducerActions
) {
  switch (action.type) {
    case ADD_TASK:
      console.log(action);
      const newTask: any = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };
      return {
        ...state,
        taskList: state.taskList.concat(newTask)
      };
    default:
      throw new Error();
  }
}

export default TasklistReducer;
