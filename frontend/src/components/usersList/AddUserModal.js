import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { addUser } from "../../actions/users";

export default function AddUserModal({
  open,
  onClose,
  setUsers,
  setShowEditForm,
}) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("addUserName").value;

    addUser(name)
      .then((success) => {
        setUsers(success.data);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          width: !mobile ? 400 : "100%",
        },
      }}
    >
      <DialogTitle id="responsive-dialog-title">Add User</DialogTitle>
      <DialogContent>
        <TextField
          value={value}
          placeholder="Name"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
