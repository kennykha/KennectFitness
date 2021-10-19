import WorkoutCard from "../workoutCard";

const WorkoutSummary = ({ workoutData, user }) => {
  return (
    <div>
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
    </div>
  );
};

export default WorkoutSummary;
