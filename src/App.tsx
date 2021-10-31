/** Components */
import DashboardPage from "./pages/DashboardPage/DashboardPage";
/** Context */
import { TaskListStoreProvider } from "./context/TaskListStore";
import TasklistReducer, {
  taskListStoreInitialState
} from "./context/TaskListReducer";
/** Stylesheet */
import "./styles.css";

export default function App() {
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
