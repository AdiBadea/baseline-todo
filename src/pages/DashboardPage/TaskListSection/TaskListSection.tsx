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
import Divider from "@mui/material/Divider";
/** Context */
import TaskListStore from "../../../context/TaskListStore";
import { toggleTaskStatusAction } from "../../../context/Actions";
/** Interfaces */
import { ITask } from "../../../common/commonInterfaces";
/** Constants */
import { TASK_TYPES } from "../../../common/constants";

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

function TaskListSection() {
  const { taskListStore } = TaskListStore();
  const { taskList } = taskListStore;

  const buildTaskList = (taskType: string): void => {
    // TODO - Simplify this
    switch (taskType) {
      case TASK_TYPES.PENDING_TASKS:
        return taskList.map(
          (task: ITask): ReactElement => {
            if (!task.isDone) {
              return (
                <TaskListItem
                  name={task.name}
                  isDone={task.isDone}
                  key={task.id}
                  taskId={task.id}
                />
              );
            }
          }
        );
      case TASK_TYPES.COMPLETED_TASKS:
        return taskList.map(
          (task: ITask): ReactElement => {
            if (task.isDone) {
              return (
                <TaskListItem
                  name={task.name}
                  isDone={task.isDone}
                  key={task.id}
                  taskId={task.id}
                />
              );
            }
          }
        );
    }
  };

  return (
    <section className="task-list-section">
      <List>
        {buildTaskList(TASK_TYPES.PENDING_TASKS)}
        <Divider />
        {buildTaskList(TASK_TYPES.COMPLETED_TASKS)}
      </List>
    </section>
  );
}

export default TaskListSection;
