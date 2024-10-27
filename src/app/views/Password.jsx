import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Password = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Cadastre sua senha"
        subheader="Crie uma senha de login"
        fields={[
          {
            label: "Password",
            type: "password",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Confirm-Password",
            type: "password",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        buttonLink="phone"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default Password;
