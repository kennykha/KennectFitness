import React from "react";
import { connect } from "react-redux";

import { addUser } from "../../actions/users";

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
