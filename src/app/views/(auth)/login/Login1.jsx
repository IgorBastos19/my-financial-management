import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 500, minHeight: 600 }}>
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          sx={{ color: "text.primary", fontSize: 45 }}
        >
          Bem vindo!
        </Typography>
        <Typography align="center" sx={{ color: "text.secondary", mb: 1.5 }}>
          Faça login com e-mail e senha
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Senha"
          variant="outlined"
          margin="normal"
          type="password"
        />
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="large" width="50%">
          Learn More
        </Button>
      </CardActions>
      <Box display="block" width="100%">
        <Typography align="center">
          Cadastre-se <a href="">aqui.</a>
        </Typography>
      </Box>
    </Card>
  );
}
