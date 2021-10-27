import { useEffect } from "react";
import "./styles.css";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

export default function App() {
  useEffect(() => {
    console.log(window.localStorage);
  }, []);
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
