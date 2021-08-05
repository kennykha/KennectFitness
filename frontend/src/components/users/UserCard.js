import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ name }) {
  return (
    <Link to={`/user/${name.user}`} className="card">
      <h1>{name.user}</h1>
    </Link>
  );
}
