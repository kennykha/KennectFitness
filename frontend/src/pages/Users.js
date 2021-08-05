import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/users";

import UsersList from "../components/users";

const Users = ({ fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return <UsersList />;
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(null, mapDispatchToProps)(Users);
