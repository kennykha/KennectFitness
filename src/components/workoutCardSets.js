import WorkoutCardReps from "./workoutCardReps";

const WorkoutCardSet = ({ set, currentWorkoutData }) => {
  return (
    <tr>
      <td>Set {set}</td>
      {currentWorkoutData.map((workout, idx) => {
        return (
          <WorkoutCardReps
            key={`${workout}-${idx}`}
            currentWorkoutData={workout}
          />
        );
      })}
    </tr>
  );
};

export default WorkoutCardSet;
