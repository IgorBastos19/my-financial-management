import { TextField } from "@mui/material";
export default function Form() {
  return (
    <form noValidate autoComplete="off">
      <TextField
        label="E-mail"
        type="email"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}
