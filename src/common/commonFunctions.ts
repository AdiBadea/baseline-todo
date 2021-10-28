import { v4 as uuidv4 } from "uuid";
export const localStorageWorker = {
  initialize: (): void => {
    if (!window.localStorage.taskList) {
      console.log("INIT RAN");
      localStorage.setItem("taskList", "[]");
    }
  },
  saveTask: (newTask: string): void => {
    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList.push({
      id: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      name: newTask,
      isDone: false
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  },
  getTaskList: () => {
    // TODO - Add return type of func
    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    return taskList;
  }
};
