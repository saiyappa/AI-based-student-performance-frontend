import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const res = await axios.post("https://ai-based-student-performance-prediction-ytk1.onrender.com/register", form);
      alert(res.data.message);
    } catch (err) {
      console.log(err.response.data); // 👈 IMPORTANT
      alert(err.response.data.error); // 👈 show actual error
    }
  };

  return (
    <div className="container">
      <h2>📝 Register</h2>

      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;