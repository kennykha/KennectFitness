import React, { useState, useEffect } from "react";
import { getUserWorkoutData } from "../actions/users";

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
  return (
    <div>
      {workoutData.map((data) => (
        <div key={data.id}>Hi</div>
      ))}
    </div>
  );
};

export default UserWorkoutDetailPage;
