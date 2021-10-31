export interface ITask {
  id: number;
  name: string;
  isDone: boolean;
}

export interface ITaskListStore {
  taskList: Array<ITask>;
}

export interface ITaskListReducerActions {
  type: string;
  payload: string | null;
}
