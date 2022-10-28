import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import AuthContext from "./context/auth-context";

function App() {
  const [logState, setLogState] = useState(false);
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");

  const logHandler = (state, id, username) => {
    setLogState(state);
    setId(id);
    setUsername(username);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: logState,
        id,
        username,
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<Login logStateHandler={logHandler} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
