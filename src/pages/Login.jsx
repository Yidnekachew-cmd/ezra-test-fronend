import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./LoginAndSignup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login-form">
      <h1>EZRA Seminary</h1>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label>Email:</label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={isLoading}>Login</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
