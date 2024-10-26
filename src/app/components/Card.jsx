import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Form from "./forms/Form";

const LoginCard = ({ title, subheader }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: 2 }}>
      <CardHeader
        title={title} //"Bem-vindo"
        subheader={subheader} //"Faça login com e-mail e senha"
        sx={{ textAlign: "center" }}
      />
      <CardContent>
        <Form />
      </CardContent>
      <CardActions sx={{ flexDirection: "column", alignItems: "center" }}>
        <Button variant="contained" color="primary" fullWidth>
          Logar
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          Cadastre-se <a href="#signup">aqui</a>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default LoginCard;
