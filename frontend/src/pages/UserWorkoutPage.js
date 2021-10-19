import React, { useEffect, useState } from "react";
import { getUserWorkoutData } from "../actions/users";

const UserWorkoutPage = (props) => {
  const user = props.match.params.name;
  const currentWorkoutList = [];
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    getUserWorkoutData(user)
      .then((result) => {
        setWorkoutData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
};

export default UserWorkoutPage;
