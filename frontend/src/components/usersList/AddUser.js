import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Modal from "@mui/material/Modal";

export default function AddUser({
  open,
  handleClose,
  handleOpen,
  handleAddUser,
}) {
  const [user, setUser] = React.useState("");

  return (
    <div>
      <Button onClick={handleOpen}>Add User</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Input
            placeholder="User Name"
            onChange={(e) => setUser(e.target.value)}
          />
          <Button
            onClick={() => {
              handleAddUser(user);
              setUser("");
            }}
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
  justifyContent: "space-between",
};
