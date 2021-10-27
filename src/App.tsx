import { useEffect } from "react";
import "./styles.css";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

import { localStorageWorker } from "./common/commonFunctions";

export default function App() {
  useEffect(() => {
    localStorageWorker.initialize();
    console.log(window.localStorage);
  }, []);
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
