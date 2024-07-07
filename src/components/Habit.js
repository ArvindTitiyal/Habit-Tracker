import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Habit = ({ habit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todayDay = new Date().getDay();

  // Count the number of days the habit was done
  const countDone = habit.weekLog.reduce((count, day) => (day.isDone === true ? count + 1 : count), 0);

  // Delete the habit
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    toast.success("Your habit deleted successfully");
  };

  // Set current habit ID to local storage and navigate to week view page
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-heart-circle-bolt"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">
            {countDone}/{todayDay + 1} days
          </p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week"></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
