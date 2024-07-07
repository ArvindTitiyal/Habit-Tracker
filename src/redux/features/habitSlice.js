import { createSlice } from "@reduxjs/toolkit";

let id = 1; // Initialize habit ID

// Slice for managing habits
export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    // Reducer to add a new habit
    addHabit: (state, action) => {
      const today = new Date();
      const day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const habit = {
        id: id++, // Increment habit ID
        name: action.payload,
        weekLog: [
          { id: 0, day: "Sunday", dd: day, mm: month, yyyy: year, isDone: "" },
          { id: 1, day: "Monday", dd: day + 1, mm: month, yyyy: year, isDone: "" },
          { id: 2, day: "Tuesday", dd: day + 2, mm: month, yyyy: year, isDone: "" },
          { id: 3, day: "Wednesday", dd: day + 3, mm: month, yyyy: year, isDone: "" },
          { id: 4, day: "Thursday", dd: day + 4, mm: month, yyyy: year, isDone: "" },
          { id: 5, day: "Friday", dd: day + 5, mm: month, yyyy: year, isDone: "" },
          { id: 6, day: "Saturday", dd: day + 6, mm: month, yyyy: year, isDone: "" },
        ],
      };

      return [...state, habit]; // Add new habit to state
    },

    // Reducer to delete a habit
    deleteHabit: (state, action) => {
      return state.filter((habit) => habit.id !== action.payload);
    },

    // Reducer to mark a habit as done for a specific day
    habitDone: (state, action) => {
      const habitId = Number(localStorage.getItem("id"));
      return state.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              weekLog: habit.weekLog.map((log) =>
                log.id === action.payload ? { ...log, isDone: true } : log
              ),
            }
          : habit
      );
    },

    // Reducer to mark a habit as undone for a specific day
    habitUnDone: (state, action) => {
      const habitId = Number(localStorage.getItem("id"));
      return state.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              weekLog: habit.weekLog.map((log) =>
                log.id === action.payload ? { ...log, isDone: false } : log
              ),
            }
          : habit
      );
    },

    // Reducer to mark a habit as none for a specific day
    habitNone: (state, action) => {
      const habitId = Number(localStorage.getItem("id"));
      return state.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              weekLog: habit.weekLog.map((log) =>
                log.id === action.payload ? { ...log, isDone: "" } : log
              ),
            }
          : habit
      );
    },
  },
});

// Export actions
export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } = habitSlice.actions;

// Export reducer
export default habitSlice.reducer;
