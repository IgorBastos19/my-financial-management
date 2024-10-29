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
          required={field.required || false} // Adiciona o atributo "required" caso seja necessário
        />
      ))}
    </form>
  );
};

export default Form;
