import React from "react";
import { Link } from "react-router-dom";
const UserCard = ({ name }) => {
  if (name) {
    return (
      <Link to={`/user/${name.user}`} className="card">
        <h1>{name.user}</h1>
      </Link>
    );
  } else {
    return null;
  }
};

export default UserCard;
