import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import AuthContext from "./context/auth-context";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/Contactus";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

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
          <NavBar/>
        <Routes>
          <Route
            path="/login"
            element={<Login logStateHandler={logHandler} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
          <Route path='/' element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
          <Footer/>
      </div>
    </AuthContext.Provider>
    // <Aboutus/>
    // <OurTeam/>
  );
}

export default App;
