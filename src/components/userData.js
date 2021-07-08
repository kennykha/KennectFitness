import axios from "axios";
import { useEffect, useState } from "react";
import WorkoutCard from "./workoutCard";
import AddWorkoutModal from "./addWorkout/modal";

const UserData = (props) => {
  const user = props.match.params.name;
  const currentWorkoutList = [];
  const [workout, setWorkout] = useState([]);
  //   const [showWorkoutAddForm, setShowWorkoutAddForm] = useState(false);

  useEffect(() => {
    axios
      .get(`/user/${user}`)
      .then((success) => {
        console.log(success);
        setWorkout(success.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  workout.forEach((workout) => {
    if (!currentWorkoutList.includes(workout.workout)) {
      currentWorkoutList.push(workout.workout);
    }
  });

  const handleAddWorkout = () => {
    const modal = document.getElementById("workoutModal");
    modal.style.display = "block";
  };

  return (
    <div>
      This is the User Data Component for {user}
      {currentWorkoutList.map((currentWorkout) => {
        return (
          <WorkoutCard
            key={currentWorkout}
            currentWorkout={currentWorkout}
            allWorkoutData={workout}
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
