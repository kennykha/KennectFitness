import React, { useEffect, useState } from "react";
import { getUserWorkoutData } from "../actions/users";
import AddWorkoutModal from "../components/addWorkout/modal";
import AddWorkoutButton from "../components/workouts/AddWorkoutButton";
import Summary from "../components/workouts/Summary";

const UserWorkoutPage = (props) => {
  const user = props.match.params.name;
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    getUserWorkoutData(user)
      .then((result) => {
        setWorkoutData(result.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <Summary workoutData={workoutData} user={user} />
      <AddWorkoutButton />
      <AddWorkoutModal />
    </>
  );
};

export default UserWorkoutPage;
