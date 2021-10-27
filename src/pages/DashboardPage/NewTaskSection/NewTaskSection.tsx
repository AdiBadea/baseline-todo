import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { localStorageWorker } from "../../../common/commonFunctions";

function NewTaskSection() {
  const [newTaskName, setNewTaskName] = useState("");

  const handleTaskAdd = () => {
    localStorageWorker.saveTask(newTaskName);
  };

  return (
    <div>
      <TextField onChange={(event) => setNewTaskName(event.target.value)} />
      <Button variant="contained" onClick={handleTaskAdd}>
        Contained
      </Button>
    </div>
  );
}

export default NewTaskSection;
