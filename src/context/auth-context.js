import React from "react";

const AuthContext = React.createContext({
  token: "",
  id: "",
  username: "",
});

export default AuthContext;
