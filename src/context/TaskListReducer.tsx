import { ADD_TASK } from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

const mockTasks = [
  {
    id: 1,
    name: "mock 1",
    isDone: false
  },
  {
    id: 2,
    name: "mock 2",
    isDone: false
  }
];

export const initialState = {
  taskList: [...mockTasks]
};

function TasklistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask: any = {
        id: uuidv4(),
        name: action.payload,
        isDone: false
      };
      console.log(state);
      // state.push(newTask);
      return {
        ...state,
        taskList: state.taskList.concat(newTask)
      };
    // return state;
    default:
      throw new Error();
  }
}

export default TasklistReducer;

// export const ADD_BOOKING = "APP/BOOK_TABLE/ADD_BOOKING";

// export const initialState = {
//   bookings: []
// };

// export const addBooking = (booking) => ({
//   type: ADD_BOOKING,
//   booking
// });

// export const bookTableReducer = (state = initialState, action) => {
//   if (action.type === ADD_BOOKING) {
//     return {
//       ...state,
//       bookings: state.bookings.concat(action.booking)
//     };
//   }
// };
