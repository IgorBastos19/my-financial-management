import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Name = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Qual o seu nome?"
        subheader="Digite abaixo como você deseja ser chamado"
        fields={[
          {
            label: "Digit aqui o seu nome",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Avançar" // Texto do botão
        buttonLink="address"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default Name;
