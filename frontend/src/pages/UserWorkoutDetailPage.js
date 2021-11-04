import React, { useState, useEffect } from "react";
import { getUserWorkoutData } from "../actions/users";
import WorkoutDetail from "../components/workouts/workoutDetail";
import AddWorkoutDataButton from "../components/workouts/AddWorkoutDataButton";

const UserWorkoutDetailPage = (props) => {
  const [workoutData, handelWorkoutData] = useState([]);
  const { name, workout } = props.match.params;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUserWorkoutData(name, workout)
      .then((response) => {
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
  };

  const handleAddUserWorkoutData = (date, set, rep, weight) => {
    console.log(date, set, Number(rep), Number(weight));

    handleClose();
  };

  return (
    <div>
      <h2>{workout}</h2>
      <WorkoutDetail
        workoutData={workoutData}
        handleWorkoutDataOpen={handleWorkoutDataOpen}
      />
      <AddWorkoutDataButton
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleAddUserWorkoutData={handleAddUserWorkoutData}
      />
    </div>
  );
};

export default UserWorkoutDetailPage;
