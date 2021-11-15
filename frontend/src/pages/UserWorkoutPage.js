import React, { useEffect, useState } from "react";
import { getUserWorkoutNames, addUserWorkout } from "../actions/users";
import AddWorkoutButton from "../components/workouts/AddWorkoutButton";
import Summary from "../components/workouts/Summary";

const UserWorkoutPage = (props) => {
  const user = props.match.params.name;
  const [open, setOpen] = useState(false);
  const [workoutNames, setWorkoutNames] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUserWorkoutNames(user)
      .then((result) => {
        setWorkoutNames(result.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const handleAddUserWorkout = (workoutName) => {
    addUserWorkout(user, workoutName)
      .then(() => getUserWorkoutNames(user))
      .then((result) => {
        setWorkoutNames(result.data);
      })
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <>
      <Summary workoutNames={workoutNames} user={user} />
      <AddWorkoutButton
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleAddUserWorkout={handleAddUserWorkout}
      />
    </>
  );
};

export default UserWorkoutPage;
