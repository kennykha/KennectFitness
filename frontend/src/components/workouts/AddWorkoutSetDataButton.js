import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
// import moment from "moment";
import MenuItem from "@mui/material/MenuItem";

export default function AddWorkoutSetDataButton({
  open,
  handleClose,
  handleOpen,
  date,
  //   handleAddUserWorkoutData,
}) {
  //   const today = moment();
  //   const [workoutDateValue, setWorkoutDateValue] = useState({ date });
  const [workoutSetValue, setWorkoutSetValue] = useState("");
  const [workoutRepValue, setWorkoutRepValue] = useState("");
  const [workoutWeightValue, setWorkoutWeightValue] = useState("");

  //   const resetLocalState = (
  //     workoutDateValue,
  //     workoutSetValue,
  //     workoutRepValue,
  //     workoutWeightValue
  //   ) => {
  //     workoutDateValue({ today });
  //     workoutSetValue("");
  //     workoutRepValue("");
  //     workoutWeightValue("");
  //   };

  //   console.log(workoutDateValue.date);

  return (
    <div>
      <Button
        onClick={(e) => {
          handleOpen();
          e.stopPropagation();
        }}
      >
        + Add New Set
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={style}>
          <TextField
            id="date"
            label="Date"
            type="date"
            disabled
            defaultValue={date}
            sx={innerBoxComponents}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-select-set"
            select
            label="Set"
            sx={innerBoxComponents}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setWorkoutSetValue(e.target.value)}
            value={workoutSetValue}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </TextField>

          <TextField
            id="outlined-reps"
            label="Reps"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: 0 } }}
            sx={innerBoxComponents}
            onChange={(e) => setWorkoutRepValue(e.target.value)}
            value={workoutRepValue}
          />

          <TextField
            id="outlined-weight"
            label="Weight"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{ inputProps: { min: 0 } }}
            sx={innerBoxComponents}
            onChange={(e) => setWorkoutWeightValue(e.target.value)}
            value={workoutWeightValue}
          />

          <Button
            onClick={() => {
              console.log(
                date,
                workoutSetValue,
                workoutRepValue,
                workoutWeightValue
              );
            }}
            // onClick={() => {
            //   handleAddUserWorkoutData(
            //     workoutDateValue,
            //     workoutSetValue,
            //     workoutRepValue,
            //     workoutWeightValue
            //   );
            //   resetLocalState(
            //     setWorkoutDateValue,
            //     setWorkoutSetValue,
            //     setWorkoutRepValue,
            //     setWorkoutWeightValue
            //   );
            // }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const innerBoxComponents = {
  width: "220px",
  margin: "10px",
};
