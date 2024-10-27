// Login.jsx
import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Login = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Vamos Começar"
        subheader="Cadastre seu e-mail"
        fields={[
          {
            label: "Email",
            type: "email",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default Login;
