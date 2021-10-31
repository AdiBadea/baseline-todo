/** Core */
import React, { useState } from "react";
/** MUI */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/** Context */
import { addTaskAction } from "../../../context/Actions";
import TaskListStore from "../../../context/TaskListStore";
/** Stylesheet */
import "../DashboardPage.scss";

function NewTaskSection() {
  const [newTaskName, setNewTaskName] = useState("");
  const { dispatch } = TaskListStore();

  const handleTaskAdd = () => {
    dispatch(addTaskAction(newTaskName));
    setNewTaskName("");
  };

  return (
    <section className="new-task-section">
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
    </section>
  );
}

export default NewTaskSection;
