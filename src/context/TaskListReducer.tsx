/** Context */
import { ADD_TASK, TOGGLE_TASK_STATUS } from "./ActionTypes";
/** Interfaces */
import {
  ITask,
  ITaskListReducerActions,
  ITaskListStore
} from "../common/commonInterfaces";
/** Utility */
import { localStorageWorker } from "../common/commonFunctions";
import { v4 as uuidv4 } from "uuid";

const mockTasks: ITask[] = [
  {
    id: "1",
    name: "Mock task 1",
    isDone: false
  },
  {
    id: "2",
    name: "Mock task 2",
    isDone: false
  }
];

const taskListFromLocalStorage: ITask[] = localStorageWorker.getTaskList();

export const taskListStoreInitialState: ITaskListStore = {
  taskList: [...taskListFromLocalStorage]
};

function TasklistReducer(
  state = taskListStoreInitialState,
  action: ITaskListReducerActions
) {
  let newState = {};

  switch (action.type) {
    case ADD_TASK:
      const newTask: ITask = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };

      state.taskList = state.taskList.concat(newTask);

      // Update the tasklist in localStorage also.
      localStorageWorker.updateTaskList(state.taskList);
      newState = { ...state };
      break;
    case TOGGLE_TASK_STATUS:
      const targetTaskId = action.payload;

      state.taskList = state.taskList.map((task) => {
        if (task.id === targetTaskId) {
          return {
            ...task,
            isDone: !task.isDone
          };
        } else {
          return task;
        }
      });

      // Update the tasklist in localStorage also.
      localStorageWorker.updateTaskList(state.taskList);
      newState = { ...state };
      break;
    default:
      throw new Error();
  }

  return newState;
}

export default TasklistReducer;
