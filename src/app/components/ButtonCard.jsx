// ButtonCard.jsx
import React from "react";
import { Button } from "@mui/material";

const ButtonCard = ({ nameButton }) => {
  return (
    <Button variant="contained" color="primary" fullWidth>
      {nameButton}
    </Button>
  );
};

export default ButtonCard;
