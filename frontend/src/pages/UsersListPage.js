import React, { useState, useEffect } from "react";
import { getUsers, addUser } from "../actions/users";
import UsersList from "../components/usersList/UsersList";
import AddUser from "../components/usersList/AddUser";

export default function UsersPage(props) {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddUser = (name) => {
    addUser(name)
      .then(() => getUsers())
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));

    handleClose();
  };

  return (
    <div className="grid" style={{ flexDirection: "column", width: "400px" }}>
      <UsersList users={users} />
      <AddUser
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleAddUser={handleAddUser}
      />
    </div>
  );
}
