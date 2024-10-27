// Form.jsx
import React from "react";
import Input from "./Input";

const Form = ({ fields }) => {
  return (
    <form noValidate autoComplete="off">
      {fields.map((field, index) => (
        <Input
          key={index}
          label={field.label}
          type={field.type}
          margin={field.margin || "normal"}
          variant={field.variant || "outlined"}
        />
      ))}
    </form>
  );
};

export default Form;

/* 
    <TextField
  label="Senha"
  type="password"
  fullWidth
  margin="normal"
  variant="outlined"
/>
*/
