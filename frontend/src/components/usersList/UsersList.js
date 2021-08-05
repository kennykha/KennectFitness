import React from "react";
import { connect } from "react-redux";

import UserCard from "./UserCard";

// props now includes props from parents AND props from our redux store bc of mapStateToProps
const UsersList = ({ users }) => {
  const list = React.useMemo(() => {
    return users.filter((user) => !!user);
  }, []);

  return (
    <>
      {list.map((user) => (
        <UserCard key={user.user} name={user} />
      ))}
    </>
  );
};

// mapStateToProps is important! It takes the state from our redux store/reducers and merges it with the props object
// state is the return object of reducers/rootReducer.js
const mapStateToProps = (state) => ({
  users: state.users.list,
});

// general redux syntax, if you don't connect this commponent to redux then it won't listen to any of the store updates
export default connect(mapStateToProps)(UsersList);
