import React, { useState, useEffect } from "react";
import { getUserWorkoutData } from "../actions/users";
import WorkoutDetail from "../components/workouts/workoutDetail";

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

  const handleWorkoutDataOpen = (OpenKey) => {
    const newWorkoutData = {};
    Object.keys(workoutData).forEach((key) => {
      if (key === OpenKey) {
        newWorkoutData[key] = {
          ...workoutData[key],
          open: !workoutData[key].open,
        };
      } else {
        newWorkoutData[key] = { ...workoutData[key] };
      }
    });

    handelWorkoutData(newWorkoutData);
    // console.log("NewWorkoutData:", newWorkoutData);
  };

  return (
    <div>
      <h2>{workout}</h2>
      <WorkoutDetail
        workoutData={workoutData}
        handleWorkoutDataOpen={handleWorkoutDataOpen}
      />
    </div>
  );
};

export default UserWorkoutDetailPage;
