import { useState } from "react";
import axios from "axios";

function Login() {
    debugger
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "https://devapi.massistcrm.com/api/Login/Validate_User12",
  {
    Username: username,
    Password: password,
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);


      // ✅ LOGIN SUCCESS
      setMessage("Login Successful ✅");
      console.log("Emp_Id:", res.data);

      // Agar chaho to save kar sakte ho
      localStorage.setItem("Emp_Id", res.data);

    } catch (err) {
      if (err.response && err.response.status === 401) {
        setMessage("Invalid Username or Password ❌");
      } else {
        setMessage("Server Error ❌");
      }

      console.log(err.response);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      
      <h2>Real Project Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="submit">Login</button>

      <p>{message}</p>
    </form>
  );
}

export default Login;
