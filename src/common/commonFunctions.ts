// export function initLocalstorage() {
//   if (!window.localStorage.taskList) {
//     localStorage.setItem("taskList", "[]");
//   }
// }

export const localStorageWorker = {
  initialize: () => {
    if (!window.localStorage.taskList) {
      localStorage.setItem("taskList", "[]");
    }
  },
  saveTask: (newTask: string) => {
    const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
    taskList.push({
      id: 1,
      name: newTask,
      isDone: false
    });
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }
};
