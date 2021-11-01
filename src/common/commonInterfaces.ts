export interface ITask {
  id: string;
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
