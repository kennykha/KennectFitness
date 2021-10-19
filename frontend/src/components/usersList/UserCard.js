import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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

const UserCard = ({ name }) => {
  if (name) {
    return (
      <CustomCard variant="outlined">
        <CardContent>
          <CustomLink to={`/user/${name.user}`}>
            <Typography align="center" variant="h5">
              {name.user}
            </Typography>
          </CustomLink>
        </CardContent>
      </CustomCard>
    );
  }
  return null;
};

export default UserCard;
