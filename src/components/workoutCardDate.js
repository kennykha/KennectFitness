import { useState } from "react";
import axios from "axios";

const WorkoutCardDate = ({ date, user, currentWorkout }) => {
  const [showEditForm, handleShowEditForm] = useState(false);
  const [currentDate, handleCurrentDate] = useState(date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateInfo = document.getElementById("date-info").value;
    axios
      .post("/editDate", {
        user: user,
        date: dateInfo,
        currentWorkout: currentWorkout,
        currentDate: currentDate,
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
