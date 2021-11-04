import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import moment from "moment";
import MenuItem from "@mui/material/MenuItem";
// import { addUserWorkout } from "../../actions/users";
// import Typography from "@mui/material/Typography";

export default function AddWorkoutDataButton({
  open,
  handleClose,
  handleOpen,
}) {
  //   const [workoutName, handleWorkoutName] = React.useState("");
  const today = moment().format("L");

  return (
    <div>
      <Button onClick={handleOpen}>+ Add New Workout</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={today}
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
            //   value={currency}
            //   onChange={handleChange}
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
          />

          <Button>Submit</Button>
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
