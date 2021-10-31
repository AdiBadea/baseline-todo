export interface Task {
  id: number;
  name: string;
  isDone: boolean;
}

export interface TaskListReducerActions {
  type: string;
  payload: unknown;
}
