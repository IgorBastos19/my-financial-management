// Login.jsx
import React from "react";
import CardForm from "../components/forms/Card-Form.jsx";

const Adress = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardForm
        title="Qual o seu Endereço?"
        subheader="Preencha os campos abaixo com o seu endereço"
        fields={[
          {
            label: "CEP",
            type: "number",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Nome da rua",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Numero",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Bairro",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Cidade",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
          {
            label: "Estado",
            type: "text",
            margin: "normal",
            variant: "outlined",
          },
        ]}
        buttonText="Finalizar o Cadastro" // Texto do botão
        buttonLink="../dashboard/initial-page"
        signupText={null} // Texto e link de cadastro
      />
    </div>
  );
};

export default Adress;
