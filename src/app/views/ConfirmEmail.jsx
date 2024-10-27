import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const ConfirmEmail = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Confirme o seu e-mail"
        subheader="Enviamos um código PIN no email informado, via e-mail, favor inserir o código abaixo"
        fields={[
          {
            label: "Digite aqui o PIN",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        buttonLink="password"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default ConfirmEmail;
