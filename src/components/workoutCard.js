import WorkoutCardDate from "./workoutCardDate";
import WorkoutCardSet from "./workoutCardSets";

const WorkoutCard = ({ currentWorkout, allWorkoutData }) => {
  const uniqueSets = () => {
    const numberOfSets = [];
    allWorkoutData.forEach((workout) => {
      if (workout.workout === currentWorkout) {
        if (!numberOfSets.includes(workout.current_set)) {
          numberOfSets.push(workout.current_set);
        }
      }
    });

    numberOfSets.sort((a, b) => Number(a) - Number(b));
    return numberOfSets;
  };

  const mapCurrentWorkout = () => {
    const currentWorkoutData = [];
    allWorkoutData.forEach((workout) => {
      if (workout.workout === currentWorkout) {
        currentWorkoutData.push(workout);
      }
    });

    return currentWorkoutData;
  };

  const numberOfSets = uniqueSets();
  const currentWorkoutData = mapCurrentWorkout();

  return (
    <table className="dataCard">
      <thead>
        <tr>
          <th colSpan="3">{currentWorkout}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          {currentWorkoutData.map((workout) => {
            return (
              <WorkoutCardDate
                key={`${currentWorkout}-${workout.date}`}
                date={workout.date}
              />
            );
          })}
        </tr>
        {numberOfSets.map((set) => {
          return (
            <WorkoutCardSet
              key={`${currentWorkout}-${set}`}
              set={set}
              currentWorkoutData={currentWorkoutData}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default WorkoutCard;
