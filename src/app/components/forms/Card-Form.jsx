import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import Form from "./Form";
import CardActionsContent from "./CardActionsContent";

const CardForm = ({
  title,
  subheader,
  fields,
  buttonText,
  signupText,
  buttonLink,
}) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <CardHeader
        title={title} //"Bem-vindo"
        subheader={subheader} //"Faça login com e-mail e senha"
        sx={{ textAlign: "center" }}
      />
      <CardContent>
        <Form fields={fields} />
      </CardContent>
      <CardActionsContent
        buttonText={buttonText}
        buttonLink={buttonLink}
        signupText={signupText}
      />
    </Card>
  );
};

export default CardForm;
