import React, { useState, useEffect } from "react";
import { getUserWorkoutData } from "../actions/users";
import moment from "moment";

const UserWorkoutDetailPage = (props) => {
  const [workoutData, handelWorkoutData] = useState([]);
  const { name, workout } = props.match.params;

  useEffect(() => {
    getUserWorkoutData(name, workout)
      .then((response) => {
        handelWorkoutData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name, workout]);

  console.log("WORKOUTDATA", workoutData);

  return (
    <div>
      {workoutData.map((data) => {
        console.log(moment(data.workoutDate).format("L"));
        return (
          <div
            key={data.id}
            style={{
              border: "1px solid black",
              margin: "2px",
              width: "600px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Date: {moment(data.workoutDate).format("L")}</div>
            <div>Workout: {data.workout}</div>
            <div>Set: {data.current_set}</div>
            <div>Reps: {data.rep_info}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserWorkoutDetailPage;
