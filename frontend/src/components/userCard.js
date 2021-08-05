import React from "react";
import { Link } from "react-router-dom";
const UserCard = ({ name }) => {
  // const [userClicked, setClicked] = useState(false);

  // const clicked = (e) => {
  //     console.log('clicked', e.target.innerText);
  //     setClicked(true);
  // }

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
