/** Context */
import TaskListStore from "../../../../context/TaskListStore";
import { removeTaskAction } from "../../../../context/Actions";
/** MUI */
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface IRemoveTaskButtonProps {
  taskId: string;
}

function RemoveTaskButton({ taskId }: IRemoveTaskButtonProps) {
  const { dispatch } = TaskListStore();

  const handleTaskRemoval = (taskId: string) => {
    dispatch(removeTaskAction(taskId));
  };

  return (
    <IconButton edge="end" onClick={() => handleTaskRemoval(taskId)}>
      <CloseIcon />
    </IconButton>
  );
}

export default RemoveTaskButton;
