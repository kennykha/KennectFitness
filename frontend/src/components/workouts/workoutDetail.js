import React, { useState } from "react";
import moment from "moment";
import AddWorkoutSetDataButton from "./AddWorkoutSetDataButton";

const WorkoutDetail = ({
  workoutData,
  handleWorkoutDataOpen,
  handleUserDeleteWorkoutData,
  handleAddUserWorkoutData,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {Object.keys(workoutData)
        .filter((key) => key !== "null")
        .map((key) => {
          return (
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
              {workoutData[key].open && (
                <div>
                  {workoutData[key].workout.map((data, idx) => {
                    const {
                      workoutDate,
                      current_set: currentSet,
                      rep_info: repInfo,
                      weight,
                      id: sqlId,
                    } = data;
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "5px",
                        }}
                        id={sqlId}
                      >
                        <div>Date: {moment(workoutDate).format("L")}</div>
                        <div>Set: {currentSet}</div>
                        <div>Reps: {repInfo}</div>
                        <div>Weight: {weight}</div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUserDeleteWorkoutData(sqlId);
                          }}
                        >
                          X
                        </div>
                      </div>
                    );
                  })}
                  <AddWorkoutSetDataButton
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    date={moment(key).format("yyyy-MM-DD")}
                    handleAddUserWorkoutData={handleAddUserWorkoutData}
                  />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutDetail;
