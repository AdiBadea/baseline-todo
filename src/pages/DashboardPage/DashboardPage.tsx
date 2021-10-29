import React from "react";

import NewTaskSection from "./NewTaskSection/NewTaskSection";
import TaskListSection from "./TaskListSection/TaskListSection";

function DashboardPage() {
  return (
    <div className="DashboardPage">
      <NewTaskSection />
      <TaskListSection />
    </div>
  );
}

export default DashboardPage;
