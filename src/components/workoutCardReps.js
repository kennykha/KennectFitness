import { useState } from "react";
import axios from "axios";

const WorkoutCardReps = ({ currentWorkoutData, set }) => {
  const [showEditForm, handleShowEditForm] = useState(false);
  const [repData, handleRepData] = useState(currentWorkoutData.rep_info);
  const [repValue, handleRepValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const repInfo = document.getElementById("rep-info").value;
    axios
      .post("/editWorkoutData", {
        id: currentWorkoutData.id,
        data: repInfo,
      })
      .then((success) => {
        handleShowEditForm(false);
        handleRepData(repValue);
      })
      .catch((err) => console.log(err));
  };

  const handleRepValueChange = (e) => {
    handleRepValue(e.target.value);
  };

  if (currentWorkoutData.current_set === set) {
    if (!showEditForm) {
      return (
        <td
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleShowEditForm(true);
          }}
          id={`${currentWorkoutData.id}`}
        >
          {repData}
        </td>
      );
    } else {
      return (
        <td>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={repData}
              id="rep-info"
              value={repValue}
              onChange={handleRepValueChange}
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </td>
      );
    }
  } else {
    return null;
  }
};

export default WorkoutCardReps;
