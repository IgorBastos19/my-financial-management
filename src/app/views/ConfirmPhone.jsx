import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const ConfirmEmail = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Confirme o seu Telefone"
        subheader="Enviamos um código PIN no telefone informado, via sms, favor inserir o código abaixo"
        fields={[
          {
            label: "Digite aqui o PIN",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        buttonLink="name"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default ConfirmEmail;
