import WorkoutCardDate from "./workoutCardDate";
import WorkoutCardSet from "./workoutCardSets";
import axios from "axios";

const WorkoutCard = ({ currentWorkout, allWorkoutData, user }) => {
  // console.log(allWorkoutData)
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

  const uniqueDates = () => {
    const numberOfDates = [];
    allWorkoutData.forEach((workout) => {
      if (workout.workout === currentWorkout) {
        if (!numberOfDates.includes(workout.date)) {
          numberOfDates.push(workout.date);
        }
      }
    });

    return numberOfDates;
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
  const numberOfDates = uniqueDates();
  const currentWorkoutData = mapCurrentWorkout();

  const handleSetAddition = () => {
    // console.log(numberOfSets);
    // console.log(numberOfDates);
    axios
      .post("/addSet", {
        user: user,
        dates: numberOfDates,
        currentWorkout: currentWorkout,
        setInfo: numberOfSets.length + 1,
      })
      .then((success) => console.log(success))
      .catch((err) => console.log(err));
  };

  return (
    <div className="dataCard">
      <table className="dataCard">
        <thead>
          <tr>
            <th colSpan="3">{currentWorkout}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            {numberOfDates.map((date) => {
              return (
                <WorkoutCardDate
                  key={`${currentWorkout}-${date}`}
                  date={date}
                  user={user}
                  currentWorkout={currentWorkout}
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
      <div>
        <form onSubmit={handleSetAddition}>
          <button type="submit">Add Set</button>
        </form>
        <button>Add Date</button>
      </div>
    </div>
  );
};

export default WorkoutCard;
