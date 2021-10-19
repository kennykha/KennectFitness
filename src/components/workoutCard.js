import { useState } from "react";
import WorkoutCardDate from "./workoutCardDate";
import WorkoutCardSet from "./workoutCardSets";
import axios from "axios";

const WorkoutCard = ({ currentWorkout, currentWorkoutData, user }) => {
  const [workoutData, handleWorkoutData] = useState(currentWorkoutData);
  console.log(handleWorkoutData);
  const uniqueSets = () => {
    const numberOfSets = [];
    workoutData.forEach((workout) => {
      if (!numberOfSets.includes(workout.current_set)) {
        numberOfSets.push(workout.current_set);
      }
    });

    numberOfSets.sort((a, b) => Number(a) - Number(b));
    return numberOfSets;
  };

  const uniqueDates = () => {
    const numberOfDates = [];
    workoutData.forEach((workout) => {
      if (!numberOfDates.includes(workout.date)) {
        numberOfDates.push(workout.date);
      }
    });

    return numberOfDates;
  };

  const numberOfSets = uniqueSets();
  const numberOfDates = uniqueDates();

  const handleSetAddition = (e) => {
    e.preventDefault();
    axios
      .post("/addSet", {
        user: user,
        dates: numberOfDates,
        currentWorkout: currentWorkout,
        setInfo: numberOfSets.length + 1,
      })
      .then((success) => handleWorkoutData(success.data))
      .catch((err) => console.log(err));
  };

  const handleDateAddition = (e) => {
    if (workoutData[workoutData.length - 1].date === "date") {
      e.preventDefault();
      alert("Please add a date to your previous workout first");
    } else {
      e.preventDefault(e);
      axios
        .post("/addDate", {
          user: user,
          currentWorkout: currentWorkout,
          sets: numberOfSets,
        })
        .then((success) => handleWorkoutData(success.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="dataCard">
      <table>
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
                currentWorkoutData={workoutData}
              />
            );
          })}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <form onSubmit={handleSetAddition}>
          <button type="submit">Add Set</button>
        </form>
        <form onSubmit={handleDateAddition}>
          <button type="submit">Add Date</button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutCard;
