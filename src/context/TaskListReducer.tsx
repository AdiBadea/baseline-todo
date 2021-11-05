/** Context */
import { ADD_TASK, TOGGLE_TASK_STATUS, REMOVE_TASK } from "./ActionTypes";
/** Interfaces */
import {
  ITask,
  ITaskListReducerActions,
  ITaskListStore
} from "../common/commonInterfaces";
/** Utility */
import { localStorageWorker } from "../common/commonFunctions";
import { v4 as uuidv4 } from "uuid";

const taskListFromLocalStorage: ITask[] = localStorageWorker.getTaskList();

export const taskListStoreInitialState: ITaskListStore = {
  // Load the tasks saved in localStorage
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
      const taskIdToUpdate = action.payload;

      state.taskList = state.taskList.map((task) => {
        if (task.id === taskIdToUpdate) {
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
    case REMOVE_TASK:
      const taskIdToDelete = action.payload;
      const taskIndexToDelete = state.taskList.findIndex(
        (task) => task.id === taskIdToDelete
      );

      state.taskList.splice(taskIndexToDelete, 1);
      newState = { ...state };
      break;
    default:
      throw new Error();
  }

  return newState;
}

export default TasklistReducer;
