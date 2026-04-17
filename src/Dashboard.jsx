import { useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import "./App.css";

function Dashboard() {
  const [form, setForm] = useState({
    hours: "",
    attendance: "",
    marks: ""
  });

  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const predict = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}` // 🔥 MUST BE THIS
          }
        }
      );

      setResult(res.data.prediction);
      setHistory(prevHistory => [...prevHistory, { prediction: res.data.prediction }]);

    } catch (error) {
      console.error("ERROR:", error.response?.data);
      alert("Unauthorized! Please login again");
    }
  };

  return (
    <div className="container">
      <h2>🎓 Student Performance Predictor</h2>

      <input
        name="hours"
        placeholder="Study Hours"
        onChange={handleChange}
      /><br /><br />

      <input
        name="attendance"
        placeholder="Attendance"
        onChange={handleChange}
      /><br /><br />

      <input
        name="marks"
        placeholder="Previous Marks"
        onChange={handleChange}
      /><br /><br />

      <button onClick={predict}>Predict</button>

      {result && <h3>📊 Predicted Marks: {result}</h3>}

      {history.length > 0 && (
        <div className="chart-box">
          <Chart history={history} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;