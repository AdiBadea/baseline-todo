/** Core */
import { useState, SyntheticBaseEvent } from "react";
/** MUI */
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import AddTaskIcon from "@mui/icons-material/AddTask";
import IconButton from "@mui/material/IconButton";
/** Context */
import { addTaskAction } from "../../../context/Actions";
import TaskListStore from "../../../context/TaskListStore";
/** Constants */
import { NO_VARCHAR } from "../../../common/constants";
/** Stylesheet */
import "../DashboardPage.scss";

function NewTaskSection() {
  const [newTaskName, setNewTaskName] = useState(NO_VARCHAR);
  const [inputError, setInputError] = useState({
    isDisplayed: false,
    duration: 3000,
    message: NO_VARCHAR,
    location: { vertical: "bottom", horizontal: "center" }
  });
  const { dispatch } = TaskListStore();

  const handleTaskAdd = (): void => {
    if (newTaskName === NO_VARCHAR) {
      setInputError({
        ...inputError,
        isDisplayed: true,
        message: "Cannot add empty task!"
      });
    } else {
      dispatch(addTaskAction(newTaskName));
      setNewTaskName(NO_VARCHAR);
    }
  };

  const handleKeyPress = (event: SyntheticBaseEvent): void => {
    const keyCodeForSubmit: number = 13;
    /**
     * The event.which property normalizes event.keyCode
     * and event.charCode. It is recommended to watch
     * event.which for keyboard key input.
     */
    if (event.which === keyCodeForSubmit) {
      handleTaskAdd();
    }
  };

  return (
    <section className="new-task-section">
      <TextField
        label="Task name"
        variant="standard"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        className="new-task-section-submit-button"
        color="primary"
        size="large"
        onClick={handleTaskAdd}
      >
        <AddTaskIcon fontSize="large" />
      </IconButton>
      <Snackbar
        open={inputError.isDisplayed}
        anchorOrigin={inputError.location}
        autoHideDuration={inputError.duration}
        onClose={() =>
          setInputError({
            ...inputError,
            isDisplayed: false
          })
        }
        message={inputError.message}
      />
    </section>
  );
}

export default NewTaskSection;
