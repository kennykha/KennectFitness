import React from "react";
import { connect } from "react-redux";

import { addUser } from "../../actions/users";

/*
  - since the user add form is the only component that handles submitting a user.
    there is no need for other components (including the parent /users/index.js) to know
  - we encapsulate all of the add user logic in this file
  - the added benefit is that if a bug shows up or we need to make additions to the add form,
    we automatically know to come to this component in the future
*/

const UserAddForm = ({ addUser }) => {
  const [name, setName] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    addUser(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        id="addUserName"
        onChange={handleChange}
      />
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (name) => dispatch(addUser(name)),
});

export default connect(null, mapDispatchToProps)(UserAddForm);
