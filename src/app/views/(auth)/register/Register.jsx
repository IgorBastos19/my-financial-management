export default function Register() {
  return (
    <div className="container">
      <div className="login-card">
        <h1>Cadastre seu e-mail </h1>
        <p>Preencha com seu e-mail que usará como login para continuar</p>
        <form action="" method="post">
          <input type="text" name="email" placeholder="E-mail" required />
          <button type="submit">Avançar</button>
        </form>
      </div>
    </div>
  );
}
