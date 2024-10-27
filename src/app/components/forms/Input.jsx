// Input.jsx
import React from "react";
import { TextField } from "@mui/material";

const Input = ({ label, type, margin, variant }) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin={margin}
      variant={variant}
    />
  );
};

export default Input;
