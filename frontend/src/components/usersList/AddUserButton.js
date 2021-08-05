import React from "react";

export default function AddUserButton({ onClick }) {
  return (
    <div onClick={onClick} id="addUser">
      <h1>+ Add User</h1>
    </div>
  );
}
