import React, { useState } from "react";
// import { addUser } from "../../actions/users";
import AddUserModal from "./AddUserModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function UserEditForm({ setUsers }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleOpen = () => {
    setShowEditForm(true);
  };

  const handleClose = () => {
    setShowEditForm(false);
  };

  if (showEditForm) {
    return (
      <AddUserModal
        open={showEditForm}
        onClose={handleClose}
        setUsers={setUsers}
        setShowEditForm={setShowEditForm}
      />
    );
  }
  return (
    <AddCircleIcon
      onClick={handleOpen}
      sx={{
        fontSize: 60,
        position: "fixed",
        bottom: 40,
        right: 40,
        cursor: "pointer",
      }}
    />
  );
}
