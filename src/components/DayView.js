import React from "react";
import { useDispatch } from "react-redux";
import {
  habitDone,
  habitNone,
  habitUnDone,
} from "../redux/features/habitSlice";
import { toast } from "react-toastify";

const DayView = ({ day }) => {
  const dispatch = useDispatch();
  const today = new Date();
  const todayDay = today.getDay();
  const date = new Date(day.yyyy, day.mm, day.dd);

  // Mark day as done
  const markToDone = () => {
    if (day.id > todayDay) {
      return toast.warning("You cannot change your next days status");
    }
    dispatch(habitDone(day.id));
  };

  // Mark day as undone
  const markToUnDone = () => {
    if (day.id > todayDay) {
      return toast.warning("You cannot change your next days status");
    }
    dispatch(habitUnDone(day.id));
  };

  // Mark day as none
  const markToNone = () => {
    if (day.id > todayDay) {
      return toast.warning("You cannot change your next days status");
    }
    dispatch(habitNone(day.id));
  };

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <i
        className={
          day.isDone === true
            ? "fa-solid fa-circle-check circle-icon active"
            : "fa-solid fa-circle-check circle-icon"
        }
        onClick={markToDone}
      ></i>
      <i
        className={
          day.isDone === false
            ? "fa-solid fa-circle-xmark circle-icon notactive"
            : "fa-solid fa-circle-xmark circle-icon"
        }
        onClick={markToUnDone}
      ></i>
      <i
        className={
          day.isDone === ""
            ? "fa-solid fa-circle-minus circle-icon nonactive"
            : "fa-solid fa-circle-minus circle-icon"
        }
        onClick={markToNone}
      ></i>
    </div>
  );
};

export default DayView;
