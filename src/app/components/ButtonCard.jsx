// ButtonCard.jsx
import React from "react";
import { Button } from "@mui/material";

const ButtonCard = ({ nameButton, buttonLink }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      component="a"
      href={buttonLink}
    >
      {nameButton}
    </Button>
  );
};

export default ButtonCard;
