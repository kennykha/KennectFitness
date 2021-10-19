import React from "react";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard";

const UsersList = ({ users }) => {
  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid key={user.user} item xs={12}>
          <UserCard name={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
