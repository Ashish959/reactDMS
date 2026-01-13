import { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

  try {
   const res = await axios.post("/api/Login/Validate_User12", {
    Username: username,
    Password: password
  });

  localStorage.setItem("Emp_Id", res.data);
  navigate("/dashboard");

} catch (error) {
  setMessage("Invalid Username or Password ❌");
}
  };

  return (
    <div className="login-saas-wrapper">
      <div className="login-saas-container">
        {/* LEFT */}
        <div className="login-left">
          <h1>The World’s Most Powerful CRM</h1>
          <p>
            Manage leads, customers and sales performance from one powerful
            dashboard. Simple. Fast. Secure.
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Sign in now</h2>
            <span>Welcome back, please login</span>

            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Sign In</button>

            {message && <div className="login-message">{message}</div>}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Auth;

