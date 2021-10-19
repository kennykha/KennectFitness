import React, { useState } from "react";
import { addUser } from "../../actions/users";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const UserEditForm = ({ setUsers }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => {
    setShowEditForm(true);
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

  // <div onClick={handleShowEditForm} id="addUser">
  //   <h1>+ Add User</h1>
  // </div>;
  if (showEditForm) {
    return (
      <div id="addUser" className="card">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" id="addUserName" />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    );
  }
  return (
    <AddCircleIcon
      onClick={handleShowEditForm}
      sx={{ fontSize: 60, position: "fixed", bottom: 40, right: 40 }}
    />
  );
};

export default UserEditForm;
