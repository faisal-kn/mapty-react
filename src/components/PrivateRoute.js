import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Login";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  if (!isLoggedIn) {
    return <Login />;
  }
  return children;
}

export default PrivateRoute;
