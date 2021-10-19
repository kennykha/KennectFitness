import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./userCard";

const User = () => {
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

  const addUser = () => {
    setShowEditForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("addUserName").value;
    axios
      .post("/addUser", { name: name })
      .then((success) => {
        setUsers(success.data);
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  // On component render, API call to Express Server
  // Retrieve from SQL DB list of users to render
  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        console.log("Response from server/db: ", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("User State: ", users);

  return (
    <div className="grid">
      {users.map((user) => (
        <UserCard key={user.user} name={user} />
      ))}
      <div id="addUser" className="card">
        {showEditForm ? (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" id="addUserName" />
            <input type="submit" style={{ display: "none" }} />
          </form>
        ) : (
          <div onClick={() => addUser()} id="addUser">
            <h1>+ Add User</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
