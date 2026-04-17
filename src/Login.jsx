import { useState } from "react";
import axios from "axios";
import "./App.css";

function Login({ setLoggedIn }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", form);

      // ✅ ADD HERE (inside function)
      console.log("FULL RESPONSE:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("Saved token:", res.data.token);

        alert("Login successful ✅");
        setLoggedIn(true);
      } else {
        alert("Token not received ❌");
      }

    } catch (err) {
      console.error("Login error:", err.response?.data);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      /><br /><br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      /><br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;