import WorkoutCardDate from "./workoutCardDate";
import WorkoutCardSet from "./workoutCardSets";
import axios from "axios";

const WorkoutCard = ({ currentWorkout, currentWorkoutData, user }) => {
  const uniqueSets = () => {
    const numberOfSets = [];
    currentWorkoutData.forEach((workout) => {
      if (!numberOfSets.includes(workout.current_set)) {
        numberOfSets.push(workout.current_set);
      }
    });

    numberOfSets.sort((a, b) => Number(a) - Number(b));
    return numberOfSets;
  };

  const uniqueDates = () => {
    const numberOfDates = [];
    currentWorkoutData.forEach((workout) => {
      if (!numberOfDates.includes(workout.date)) {
        numberOfDates.push(workout.date);
      }
    });

    return numberOfDates;
  };

  const numberOfSets = uniqueSets();
  const numberOfDates = uniqueDates();

  const handleSetAddition = () => {
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

  const handleDateAddition = () => {
    axios
      .post("/addDate", {
        user: user,
        currentWorkout: currentWorkout,
        sets: numberOfSets,
      })
      .then((success) => console.log(success))
      .catch((err) => console.log(err));
  };

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
        <tr>
          <td>
            <form onSubmit={handleSetAddition}>
              <button type="submit">Add Set</button>
            </form>
          </td>
          <td>
            <form onSubmit={handleDateAddition}>
              <button type="submit">Add Date</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WorkoutCard;
