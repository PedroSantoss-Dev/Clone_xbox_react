import "./Login.css";
import { useState } from "react";
import axios from "axios";
import iXbox from "./xbox.jpg";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: password,
    };

    axios.post("/auth/login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    });
  };
  return (
    <div className="login">
      <img src={iXbox} alt="logo xbox" className="login_logo"/>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e-mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="login-ok">
            <a href="!#">
              <span>Esqueceu sua senha?</span>
            </a>
            <input type="submit" value="Fazer login" />
          </div>
        </form>
        <div className="login-create">
          <span>Ainda não possui uma conta?</span>
          <a className="btn-create" href="/register">
            Criar uma conta 
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
