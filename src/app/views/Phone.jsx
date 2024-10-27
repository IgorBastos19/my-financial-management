import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Phone = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Cadastre seu telefone"
        subheader="Digite abaixo o número do seu telefone"
        fields={[
          {
            label: "Telefone",
            type: "tel",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        buttonLink="confirm-phone"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default Phone;
