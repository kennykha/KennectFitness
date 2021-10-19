// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { getUsers } from "../actions/users";
import UsersList from "../components/usersList/UsersList";
import EditForm from "../components/usersList/EditForm";
import { users } from "../mocks/test";

export default function UsersPage(props) {
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        console.log("Response from server/db: ", response.data);
        // setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid">
      <UsersList users={users} />
      <EditForm />
      {/* <EditForm setUsers={setUsers} /> */}
    </div>
  );
}
