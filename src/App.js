import "./App.css";
import { Routes, Route } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Spinner />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
