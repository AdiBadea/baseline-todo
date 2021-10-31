import { useEffect } from "react";
import "./styles.css";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { localStorageWorker } from "./common/commonFunctions";

import { TaskListStoreProvider } from "./context/TaskListStore";
import TasklistReducer, {
  taskListStoreInitialState
} from "./context/TaskListReducer";

export default function App() {
  useEffect((): void => {
    console.log("APP MOUNT");
    localStorageWorker.initialize();
  }, []);
  return (
    <div>
      <TaskListStoreProvider
        initialState={taskListStoreInitialState}
        reducer={TasklistReducer}
      >
        <DashboardPage />
      </TaskListStoreProvider>
    </div>
  );
}
