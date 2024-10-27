// Text.jsx
import React from "react";
import { Typography } from "@mui/material";

const Text = ({ text, href }) => {
  return (
    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
      <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {text}
      </a>
    </Typography>
  );
};

export default Text;
