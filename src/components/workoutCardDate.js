import { useState } from "react";
import axios from "axios";

const WorkoutCardDate = ({ date, user, currentWorkout }) => {
  const [showEditForm, handleShowEditForm] = useState(false);
  const [currentDate, handleCurrentDate] = useState(date);
  const [previousDate, handlePreviousDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateInfo = document.getElementById("date-info").value;
    // console.log(dateInfo, user, currentWorkout, previousDate);
    axios
      .post("/editDate", {
        user: user,
        date: dateInfo,
        currentWorkout: currentWorkout,
        previousDate: previousDate,
      })
      .then((success) => {
        console.log(success);
        handleShowEditForm(false);
        handleCurrentDate(dateInfo);
      })
      .catch((err) => console.log(err));
  };

  if (!showEditForm) {
    return (
      <td
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleShowEditForm(true);
          handlePreviousDate(date);
        }}
        value={currentDate}
      >
        {currentDate}
      </td>
    );
  } else {
    return (
      <td>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={currentDate} id="date-info" />
        </form>
      </td>
    );
  }
};

export default WorkoutCardDate;
