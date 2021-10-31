import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext
} from "react";

// import { localStorageWorker } from "../common/commonFunctions";

import TaskListReducer from "./TaskListReducer";

// const tasksFromLocalStorage = localStorageWorker.getTaskList();

export const TaskListContext = createContext([]);
TaskListContext.displayName = "TaskListContext";

export const TaskListStore = () => useContext(TaskListContext);

export function TaskListStoreProvider({ children, initialState, reducer }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskListContext.Provider value={{ globalState, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListStore;
