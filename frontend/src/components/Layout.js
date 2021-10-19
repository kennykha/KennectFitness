import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledGrid = styled(Grid)(() => ({
  padding: "40px 24px",
}));

export default function Layout({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}
