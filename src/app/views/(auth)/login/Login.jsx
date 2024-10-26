export default function Login() {
  return (
    <div className="container">
      <div className="login-card">
        <h1>Bem-vindo à My Financial Management</h1>
        <p>Faça o login para iniciar sua sessão</p>
        <form action="" method="post">
          <input type="text" name="email" placeholder="E-mail" required />
          <input type="password" name="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <h2>
          Cadestre-se <a href="/register">aqui.</a>
        </h2>
      </div>
    </div>
  );
}
