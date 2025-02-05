import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import { toast } from "react-toastify";

const Navbar = ({ name }) => {
  const dispatch = useDispatch();
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // Add a new habit
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value.trim();
    if (!habitName) {
      return toast.warning("Write something in your habit.");
    }
    dispatch(addHabit(habitName));
    document.getElementById("habitName").value = "";
    toast.success("Your habit added successfully");
  };

  // Get greeting based on the time of day
  const getGreeting = () => {
    if (hour <= 12) return "Morning";
    if (hour <= 17) return "Afternoon";
    if (hour <= 21) return "Evening";
    return "Night";
  };

  return (
    <>
      <div className="navbar">
        <h3>{getGreeting()}</h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* Modal for adding a habit */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="habitName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
