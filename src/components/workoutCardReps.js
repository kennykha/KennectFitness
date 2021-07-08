const WorkoutCardReps = ({ currentWorkoutData, set }) => {
  if (currentWorkoutData.current_set === set) {
    return <td>{currentWorkoutData.rep_info}</td>;
  } else {
    return null;
  }
};

export default WorkoutCardReps;
