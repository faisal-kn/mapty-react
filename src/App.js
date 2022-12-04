import "./App.css";
import { Routes, Route } from "react-router";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/Contactus";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
