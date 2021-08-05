import React from "react";
import { connect } from "react-redux";

import UserCard from "./UserCard";

const UsersList = ({ users }) => {
  const list = React.useMemo(() => {
    users.filter((user) => !!user);
  }, []);

  return (
    <>
      {list.map((user) => (
        <UserCard key={user.user} name={user} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.list,
});

export default connect(mapStateToProps)(UsersList);
