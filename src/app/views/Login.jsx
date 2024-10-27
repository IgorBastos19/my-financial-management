// Login.jsx
import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Login = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Bem-vindo"
        subheader="Faça login com e-mail e senha"
        fields={[
          {
            label: "Email",
            type: "email",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Senha",
            type: "password",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Logar" // Texto do botão
        buttonLink="dashboard/initial-page"
        signupText={{ text: "Cadastre-se aqui", href: "register" }} // Texto e link de cadastro
      />
    </div>
  );
};

export default Login;
