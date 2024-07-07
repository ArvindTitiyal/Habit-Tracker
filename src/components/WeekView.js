import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  const habitsState = useSelector((state) => state.habits);
  const habitId = Number(localStorage.getItem("id"));
  const habit = habitsState.find((habit) => habit.id === habitId) || {};

  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog?.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default WeekView;
