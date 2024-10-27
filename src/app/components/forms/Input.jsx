// Input.jsx
"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";

const Input = ({ label, type, margin, variant }) => {
  const [error, setError] = useState(false); // Estado para controlar o erro
  const [helperText, setHelperText] = useState(""); // Texto de ajuda para exibir o erro

  // Função para validar o e-mail
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar o e-mail
    return emailRegex.test(value);
  };

  // Função para verificar a validade no evento onBlur
  const handleBlur = (event) => {
    if (type === "email") {
      const isValid = validateEmail(event.target.value);
      setError(!isValid);
      setHelperText(isValid ? "" : "Por favor, insira um e-mail válido.");
    }
  };

  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin={margin}
      variant={variant}
      error={error} // Exibe o erro no campo se `error` for true
      helperText={helperText} // Exibe o texto de ajuda se houver erro
      onBlur={handleBlur} // Chama a validação quando o campo perde o foco
    />
  );
};

export default Input;
