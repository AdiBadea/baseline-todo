/** Components */
import TaskListItem from "./components/TaskListItem";
/** MUI */
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
/** Context */
import TaskListStore from "../../../context/TaskListStore";
/** Interfaces */
import { ITask } from "../../../common/commonInterfaces";
/** Constants */
import { TASK_TYPES } from "../../../common/constants";

function TaskListSection() {
  const { taskListStore } = TaskListStore();
  const { taskList } = taskListStore;

  const buildTaskList = (taskType: string): void => {
    // TODO - Simplify this
    switch (taskType) {
      case TASK_TYPES.PENDING_TASKS:
        return taskList.map((task: ITask) => {
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
        });
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
