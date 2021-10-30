import { createContext, useState, useEffect } from "react";

import { localStorageWorker } from "../common/commonFunctions";

const tasksFromLocalStorage = localStorageWorker.getTaskList();
export const TaskListContext = createContext(tasksFromLocalStorage);

function TaskListContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log("CONTEXT LOADED");
  }, []);

  return (
    <TaskListContext.Provider value={taskList}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
