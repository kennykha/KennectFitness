import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CustomLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "black",
}));

const UserCard = ({ name }) => {
  if (name) {
    return (
      <Card variant="outlined">
        <CardContent>
          <CustomLink to={`/user/${name.user}`}>
            <Typography align="center" variant="h5">
              {name.user}
            </Typography>
          </CustomLink>
        </CardContent>
      </Card>
    );
  }
  return null;
};

export default UserCard;
