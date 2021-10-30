import { ADD_TASK } from "./ActionTypes";

// TASK LIST SECTION
export function addTaskAction(newTaskName: string): object {
  return { type: ADD_TASK, payload: newTaskName };
}
