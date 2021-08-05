import React, { useState } from "react";

import UsersList from "./UsersList";
import UserAddForm from "./UserAddForm";
import AddUserButton from "./AddUserButton";

export default function Users({ users }) {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="grid">
      <UsersList />
      <div id="addUser" className="card">
        {showEditForm ? (
          <UserAddForm />
        ) : (
          <AddUserButton onClick={() => setShowEditForm(true)} />
        )}
      </div>
    </div>
  );
}
