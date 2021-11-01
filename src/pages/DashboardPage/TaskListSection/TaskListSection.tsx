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
import { toggleTaskStatusAction } from "../../../context/Actions";
/** Interfaces */
import { ITask } from "../../../common/commonInterfaces";

interface ITaskListItemProps {
  name: string;
  isDone: boolean;
  taskId: string;
}

function TaskListItem({ name, isDone, taskId }: ITaskListItemProps) {
  const { dispatch } = TaskListStore();

  const handleTaskStatusToggle = (taskId: string): void => {
    dispatch(toggleTaskStatusAction(taskId));
  };

  return (
    <ListItem disablePadding onClick={() => handleTaskStatusToggle(taskId)}>
      <ListItemButton>
        <ListItemIcon>
          {isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

function NewTaskSection() {
  const { taskListStore } = TaskListStore();
  const { taskList } = taskListStore;

  return (
    <section className="task-list-section">
      <List>
        {taskList.map(
          (task: ITask): ReactElement => {
            return (
              <TaskListItem
                name={task.name}
                isDone={task.isDone}
                key={task.id}
                taskId={task.id}
              />
            );
          }
        )}
      </List>
    </section>
  );
}

export default NewTaskSection;
