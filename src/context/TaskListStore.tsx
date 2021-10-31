/** Core */
import { createContext, useReducer, useContext } from "react";
/** Context */
import { taskListStoreInitialState } from "./TaskListReducer";

const TaskListContext = createContext(taskListStoreInitialState);
// TaskListContext.displayName = "TaskListContext"; // TODO - See what this does

export const TaskListStore = () => useContext(TaskListContext);

export function TaskListStoreProvider({ children, initialState, reducer }) {
  const [taskListStore, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskListContext.Provider value={{ taskListStore, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListStore;
