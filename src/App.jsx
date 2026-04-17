import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Chart from "./Chart"; // 👈 we will create this

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (!loggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {showRegister ? (
          <Register />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}

        <br />
        <button onClick={() => setShowRegister(!showRegister)}>
          {showRegister ? "Go to Login" : "Go to Register"}
        </button>
      </div>
    );
  }

  return <Dashboard />;
}

export default App;