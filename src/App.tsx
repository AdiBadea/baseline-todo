/** Core */
import { useEffect } from "react";
/** Components */
import DashboardPage from "./pages/DashboardPage/DashboardPage";
/** Context */
import { TaskListStoreProvider } from "./context/TaskListStore";
import TasklistReducer, {
  taskListStoreInitialState
} from "./context/TaskListReducer";
/** MUI */
import { createTheme, ThemeProvider } from "@mui/material/styles";
/** Utility */
import { localStorageWorker } from "./common/commonFunctions";
/** Style */
import CustomTheme from "./common/CustomTheme";
import "./styles.css";

const CustomMuiTheme = createTheme(CustomTheme);

export default function App() {
  useEffect(() => {
    localStorageWorker.initialize();
  }, []);

  return (
    <ThemeProvider theme={CustomMuiTheme}>
      <TaskListStoreProvider
        initialState={taskListStoreInitialState}
        reducer={TasklistReducer}
      >
        <DashboardPage />
      </TaskListStoreProvider>
    </ThemeProvider>
  );
}
