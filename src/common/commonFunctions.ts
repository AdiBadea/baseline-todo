/** Interfaces */
import { ITask } from "./commonInterfaces";
/** Constants */
import { LOCALSTORAGE_TASK_ARRAY_KEY } from "./constants";

interface IlocalStorageWorker {
  initialize: Function;
  updateTaskList: Function;
  getTaskList: Function;
}

export const localStorageWorker: IlocalStorageWorker = {
  initialize: (): void => {
    if (!window.localStorage.taskList) {
      localStorage.setItem(LOCALSTORAGE_TASK_ARRAY_KEY, "[]");
    }
  },
  updateTaskList: (newTaskList: ITask[]): void => {
    localStorage.setItem(
      LOCALSTORAGE_TASK_ARRAY_KEY,
      JSON.stringify(newTaskList)
    );
  },
  getTaskList: (): ITask[] => {
    const taskList = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_TASK_ARRAY_KEY) || "[]"
    );
    return taskList;
  }
};
