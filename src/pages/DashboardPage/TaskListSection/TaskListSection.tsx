/** Core */
import React from "react";
/** MUI */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
/** Context */
import TaskListStore from "../../../context/TaskListStore";

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
  const { globalState } = TaskListStore();
  const { taskList } = globalState;

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
