import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)(() => ({
  margin: 0,
  lineHeight: 1.15,
  fontWeight: 300,
}));

const Link = styled("a")(() => ({
  "&:hover, &:focus, &:active": {
    textDecoration: "underline",
  },
}));

export default function Header() {
  return (
    <StyledTypography className="title" align="center" variant="h4">
      Kennect
      <Link href="/">Fitness</Link>
    </StyledTypography>
  );
}
