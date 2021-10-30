import React, { useState, useReducer, useContext } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { localStorageWorker } from "../../../common/commonFunctions";

import { TaskListContext } from "../../../context/TaskListContext";
import TasklistReducer from "../../../context/TaskListReducer";
import { addTaskAction } from "../../../context/Actions";

/* Stylesheet */
import "../DashboardPage.scss";

function NewTaskSection() {
  const [newTaskName, setNewTaskName] = useState("");
  const { taskList } = useContext(TaskListContext);
  const [state, dispatch] = useReducer(TasklistReducer, taskList);

  // dispatch({type: 'decrement'})}
  // ADD_TASK

  const handleTaskAdd = () => {
    dispatch(addTaskAction(newTaskName));
    // localStorageWorker.saveTask(newTaskName);
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
