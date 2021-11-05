/** Components */
import RemoveTaskButton from "./RemoveTaskButton";
/** MUI */
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
/** Context */
import TaskListStore from "../../../../context/TaskListStore";
import { toggleTaskStatusAction } from "../../../../context/Actions";

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
    <ListItem
      disablePadding
      onClick={() => handleTaskStatusToggle(taskId)}
      secondaryAction={<RemoveTaskButton taskId={taskId} />}
    >
      <ListItemButton>
        <ListItemIcon>
          {isDone ? (
            <CheckBoxIcon />
          ) : (
            <CheckBoxOutlineBlankIcon color="primary" />
          )}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default TaskListItem;
