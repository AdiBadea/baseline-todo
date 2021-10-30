import { useEffect } from "react";
import "./styles.css";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { localStorageWorker } from "./common/commonFunctions";

export default function App() {
  useEffect((): void => {
    console.log("APP MOUNT");
    localStorageWorker.initialize();
  }, []);
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
