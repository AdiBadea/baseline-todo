import { useEffect, createContext } from "react";
import "./styles.css";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { localStorageWorker } from "./common/commonFunctions";

export default function App() {
  const mockTaskList = [{ id: 1, name: "test context", isDone: false }];
  const TaskListContext = createContext(mockTaskList);

  useEffect((): void => {
    console.log("APP MOUNT");
    localStorageWorker.initialize();
  }, []);
  return (
    <div>
      <TaskListContext.Provider value={mockTaskList}>
        <DashboardPage />
      </TaskListContext.Provider>
    </div>
  );
}
