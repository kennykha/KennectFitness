import { useEffect, useState } from "react";
import WorkoutCard from "./workoutCard";
import AddWorkoutModal from "./addWorkout/modal";
import { getUserWorkoutData } from "../actions/users";

const UserData = (props) => {
  const user = props.match.params.name;
  const [workoutData, setWorkout] = useState([]);

  useEffect(() => {
    getUserWorkoutData(user)
      .then((result) => {
        setWorkout(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(workoutData);

  const handleAddWorkout = () => {
    const modal = document.getElementById("workoutModal");
    modal.style.display = "block";
  };

  return (
    <div>
      This is the User Data Component for {user}
      {Object.keys(workoutData).map((workoutName) => {
        return (
          <WorkoutCard
            key={workoutName}
            currentWorkout={workoutName}
            currentWorkoutData={workoutData[workoutName]}
            user={user}
          />
        );
      })}
      <div
        className="dataCard"
        style={{ width: "50%", cursor: "pointer" }}
        onClick={handleAddWorkout}
      >
        +Add Workout
      </div>
      <AddWorkoutModal user={user} />
    </div>
  );
};

export default UserData;
