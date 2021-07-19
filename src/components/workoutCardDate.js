import { useState } from "react";
import axios from "axios";

const WorkoutCardDate = ({ date, user, currentWorkout }) => {
  const [showEditForm, handleShowEditForm] = useState(false);
  const [previousDate, handlePreviousDate] = useState("");

  const handleSubmit = (e) => {
    const dateInfo = document.getElementById("date-info").value;
    // console.log(dateInfo, user, currentWorkout, previousDate);
    axios
      .post("/editDate", {
        user: user,
        date: dateInfo,
        currentWorkout: currentWorkout,
        previousDate: previousDate,
      })
      .then((success) => console.log(success))
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
      >
        {date}
      </td>
    );
  } else {
    return (
      <td>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder={date} id="date-info" />
        </form>
      </td>
    );
  }
};

export default WorkoutCardDate;
