import React from "react";
import moment from "moment";

const WorkoutDetail = ({ workoutData, handleWorkoutDataOpen }) => {
  console.log(workoutData);
  return (
    <div>
      {Object.keys(workoutData).map((key) => (
        <div
          key={key}
          id={key}
          onClick={() => handleWorkoutDataOpen(key)}
          style={{
            border: "1px solid black",
            margin: "2px",
            width: "600px",
            display: "flex",
            flexDirection: workoutData[key].open && "column",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          {!workoutData[key].open && (
            <>
              <div>Date: {moment(key).format("L")}</div>
              <div>Max Set: {workoutData[key].maxSet}</div>
              <div>Max Rep: {workoutData[key].maxRep}</div>
              <div>Max Weight: {workoutData[key].maxWeight}</div>
            </>
          )}

          {workoutData[key].open &&
            workoutData[key].workout.map((data, idx) => {
              const {
                workoutDate,
                current_set: currentSet,
                rep_info: repInfo,
                weight,
              } = data;
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px",
                  }}
                >
                  <div>Date: {moment(workoutDate).format("L")}</div>
                  <div>Set: {currentSet}</div>
                  <div>Reps: {repInfo}</div>
                  <div>Weight: {weight}</div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default WorkoutDetail;
