/** Context */
import { ADD_TASK } from "./ActionTypes";
/** Interfaces */
import {
  ITask,
  ITaskListReducerActions,
  ITaskListStore
} from "../common/commonInterfaces";
/** Utility */
import { v4 as uuidv4 } from "uuid";

const mockTasks: ITask[] = [
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

export const taskListStoreInitialState: ITaskListStore = {
  taskList: [...mockTasks]
};

function TasklistReducer(
  state = taskListStoreInitialState,
  action: ITaskListReducerActions
) {
  switch (action.type) {
    case ADD_TASK:
      console.log(action);
      const newTask: ITask = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };
      return {
        ...state,
        // taskList: state.taskList.concat(newTask)
        taskList: state.taskList.concat(newTask)
      };
    default:
      throw new Error();
  }
}

export default TasklistReducer;
