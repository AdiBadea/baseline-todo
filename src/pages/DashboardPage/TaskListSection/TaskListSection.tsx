/** Core */
import React, { ReactElement } from "react";
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
/** Interfaces */
import { ITask } from "../../../common/commonInterfaces";

interface ITaskListItemProps {
  name: string;
  isDone: boolean;
}

function TaskListItem({ name, isDone }: ITaskListItemProps) {
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
  console.log(TaskListStore());
  const { taskListStore } = TaskListStore();
  const { taskList } = taskListStore;

  return (
    <section className="task-list-section">
      <List>
        {taskList.map(
          (task: ITask, index: number): ReactElement => {
            console.log(task);
            return (
              <TaskListItem name={task.name} isDone={task.isDone} key={index} />
            );
          }
        )}
      </List>
    </section>
  );
}

export default NewTaskSection;
