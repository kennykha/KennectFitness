import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserWorkoutNames, addUserWorkout } from "../actions/users";
import AddWorkoutButton from "../components/workouts/AddWorkoutButton";
import Summary from "../components/workouts/Summary";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
      <Link to="/" style={{ color: "inherit" }}>
        <ArrowBackIosIcon sx={style} />
      </Link>
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

const style = {
  position: "absolute",
  top: "8%",
  left: "15%",
  fontSize: "50px",
  cursor: "pointer",
  "&:hover": { color: "blue" },
};
