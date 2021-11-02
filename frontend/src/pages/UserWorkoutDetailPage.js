import React, { useState, useEffect } from "react";
import { getUserWorkoutData } from "../actions/users";
import moment from "moment";

const UserWorkoutDetailPage = (props) => {
  const [workoutData, handelWorkoutData] = useState([]);
  const { name, workout } = props.match.params;

  useEffect(() => {
    getUserWorkoutData(name, workout)
      .then((response) => {
        console.log(response);
        handelWorkoutData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name, workout]);

  console.log("Workout Data: ", workoutData);

  return (
    <div>
      <h2>{workout}</h2>
      <div>
        {Object.keys(workoutData).map((key) => (
          <div
            key={key}
            style={{
              border: "1px solid black",
              margin: "2px",
              width: "600px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Date: {moment(key).format("L")}</div>
            <div>Max Set: {workoutData[key].maxSet}</div>
            <div>Max Rep: {workoutData[key].maxRep}</div>
            <div>Max Weight: {workoutData[key].maxWeight}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWorkoutDetailPage;
