import React from "react";

import NewTaskSection from "./NewTaskSection/NewTaskSection";
import TaskListSection from "./TaskListSection/TaskListSection";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewTaskSection />
      <TaskListSection />
    </div>
  );
}

export default DashboardPage;
