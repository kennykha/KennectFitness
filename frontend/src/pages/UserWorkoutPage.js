import React, { useEffect, useState } from "react";
import { getUserWorkoutNames } from "../actions/users";
import AddWorkoutModal from "../components/addWorkout/modal";
import AddWorkoutButton from "../components/workouts/AddWorkoutButton";
import Summary from "../components/workouts/Summary";

const UserWorkoutPage = (props) => {
  const user = props.match.params.name;
  const [workoutNames, setWorkoutNames] = useState([]);

  useEffect(() => {
    getUserWorkoutNames(user)
      .then((result) => {
        setWorkoutNames(result.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <Summary workoutNames={workoutNames} user={user} />
      <AddWorkoutButton />
      <AddWorkoutModal />
    </>
  );
};

export default UserWorkoutPage;
