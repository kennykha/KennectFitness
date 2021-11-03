// import WorkoutCard from "../workoutCard";
import { Link } from "react-router-dom";

const WorkoutSummary = ({ workoutNames, user }) => {
  console.log("Inside Summary for WorkoutNames", workoutNames);
  return (
    <div>
      {workoutNames.map((workout) => {
        const workoutName = workout.workout;
        return (
          <Link
            to={`/users/${user}/workouts/${workoutName}`}
            className="card"
            key={workoutName}
          >
            <h1>{workoutName}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default WorkoutSummary;
