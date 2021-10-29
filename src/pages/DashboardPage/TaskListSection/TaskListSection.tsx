import React, { useState, useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { localStorageWorker } from "../../../common/commonFunctions";

function TaskListItem({ name, isDone }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {isDone ? CheckBoxIcon : <CheckBoxOutlineBlankIcon />}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

function NewTaskSection() {
  const [taskList, setTaskList] = useState([]);

  // Initialize the component
  useEffect((): void => {
    async function initializeComponent() {
      const tasksFromLocalStorage = localStorageWorker.getTaskList();
      setTaskList(tasksFromLocalStorage);
    }
    // window.addEventListener("storage", () => {
    // });
    initializeComponent();
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("taskList", taskList);
  // }, [taskList]);

  return (
    <section>
      <List>
        {taskList.map((task, index) => {
          console.log(task);
          return (
            <TaskListItem name={task.name} isDone={task.isDone} key={index} />
          );
        })}
      </List>
    </section>
  );
}

export default NewTaskSection;
