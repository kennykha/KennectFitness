import React from "react";
import UserCard from "./UserCard";

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
