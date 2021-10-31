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

export const useStore = () => useContext(TaskListContext);

export function TaskListStoreProvider({ children, initialState, reducer }) {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskListContext.Provider value={{ globalState, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
}

export default useStore;

// import React from "react";

// const Store = React.createContext();
// Store.displayName = "Store";

// export const useStore = () => React.useContext(Store);

// export const StoreProvider = ({ children, initialState, reducer }) => {
//   const [globalState, dispatch] = React.useReducer(reducer, initialState);

//   return (
//     <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
//   );
// };
