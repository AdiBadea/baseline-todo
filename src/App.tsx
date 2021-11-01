/** Core */
import { useEffect } from "react";
/** Components */
import DashboardPage from "./pages/DashboardPage/DashboardPage";
/** Context */
import { TaskListStoreProvider } from "./context/TaskListStore";
import TasklistReducer, {
  taskListStoreInitialState
} from "./context/TaskListReducer";
/** Utility */
import { localStorageWorker } from "./common/commonFunctions";
/** Stylesheet */
import "./styles.css";

export default function App() {
  useEffect(() => {
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
