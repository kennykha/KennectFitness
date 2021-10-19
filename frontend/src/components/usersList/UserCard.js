import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";

const CustomCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: 400,
    margin: "0 auto",
  },
}));

const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "black",
}));

const UserCard = ({ user }) => {
  console.log(user);
  const { user: name, completed } = user;
  if (name) {
    return (
      <CustomCard variant="outlined">
        <CardContent>
          <CustomLink to={`/user/${name}`}>
            <Typography variant="h5" gutterBottom component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Workouts completed: {completed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last updated: {moment().format("ll")}
            </Typography>
          </CustomLink>
        </CardContent>
      </CustomCard>
    );
  }
  return null;
};

export default UserCard;
