/** Core */
import { createContext, useReducer, useContext, ReactNode } from "react";
/** Interfaces */
import { ITaskListStore } from "../common/commonInterfaces";
/** Context */
import { taskListStoreInitialState } from "./TaskListReducer";
const TaskListContext = createContext(taskListStoreInitialState);
// TaskListContext.displayName = "TaskListContext"; // TODO - See what this does

export const TaskListStore = () => useContext(TaskListContext);

interface ITaskListStoreProviderProps {
  children: ReactNode;
  initialState: ITaskListStore;
  reducer: Function;
}

export function TaskListStoreProvider({
  children,
  initialState,
  reducer
}: ITaskListStoreProviderProps) {
  const [taskListStore, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskListContext.Provider value={{ taskListStore, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListStore;
