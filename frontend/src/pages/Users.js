import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/users";

import UsersList from "../components/usersList";

/* this page is somewhat unnecessary, but it's usually nice to keep the "overarching"
 logic like fetching all users here. Generally want to do this once per refresh */

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
