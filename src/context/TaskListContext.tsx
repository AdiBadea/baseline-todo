import { createContext, useState } from "react";

const mockTaskList = [{ id: 1, name: "test context", isDone: false }];
export const TaskListContext = createContext(mockTaskList);

function TaskListContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskListContext.Provider value={taskList}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
