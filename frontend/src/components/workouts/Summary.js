// import WorkoutCard from "../workoutCard";
import { Link } from "react-router-dom";

const WorkoutSummary = ({ workoutNames, user }) => {
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
