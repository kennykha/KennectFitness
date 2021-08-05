import React, { useState } from "react";

import UsersList from "./UsersList";
import UserAddForm from "./UserAddForm";
import AddButton from "./AddButton";

/*
  - we moved most of the actions logic to the actions folder
  - generally in components we'd try to keep the components are pure as possible
  - it's more "modular" if you keep particular components in their own files
  - each component is responsible for its own logic
    - see UserAddForm.js for more info
  - this can be refactored further, but I'll let you figure it out
*/

export default function Users() {
  // since we show/hide the "add user button" here, we can use local state here
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="grid">
      <UsersList />
      <div id="addUser" className="card">
        {showEditForm ? (
          <UserAddForm />
        ) : (
          <AddButton onClick={() => setShowEditForm(true)} />
        )}
      </div>
    </div>
  );
}
