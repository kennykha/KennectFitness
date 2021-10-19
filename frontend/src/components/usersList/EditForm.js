import React, { useState } from "react";
import { addUser } from "../../actions/users";

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

  return (
    <div id="addUser" className="card">
      {showEditForm ? (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" id="addUserName" />
          <input type="submit" style={{ display: "none" }} />
        </form>
      ) : (
        <div onClick={handleShowEditForm} id="addUser">
          <h1>+ Add User</h1>
        </div>
      )}
    </div>
  );
};

export default UserEditForm;
