import { ADD_TASK, TOGGLE_TASK_STATUS } from "./ActionTypes";
import { ITaskListReducerActions } from "../common/commonInterfaces";

// TASK LIST SECTION
export function addTaskAction(newTaskName: string): ITaskListReducerActions {
  return { type: ADD_TASK, payload: newTaskName };
}

export function toggleTaskStatusAction(
  taskId: string
): ITaskListReducerActions {
  return { type: TOGGLE_TASK_STATUS, payload: taskId };
}
