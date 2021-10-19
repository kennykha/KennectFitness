import React from "react";
import UserCard from "./userCard";

const UsersList = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.user} name={user} />
      ))}
    </>
  );
};

export default UsersList;
