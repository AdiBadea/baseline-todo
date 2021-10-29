import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { localStorageWorker } from "../../../common/commonFunctions";

/* Stylesheet */
import "../DashboardPage.scss";

function NewTaskSection() {
  const [newTaskName, setNewTaskName] = useState("");

  const handleTaskAdd = () => {
    localStorageWorker.saveTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="new-task-section">
      <TextField
        label="Task name"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
      />
      <Button
        className="new-task-section-submit-button"
        variant="contained"
        onClick={handleTaskAdd}
      >
        Add
      </Button>
    </div>
  );
}

export default NewTaskSection;
