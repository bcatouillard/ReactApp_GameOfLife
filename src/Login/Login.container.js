import React, { useState, useEffect } from "react";
import "./Login.css";
import Login from "./Login";
import passwordStrength from "./Login.pure";

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pswdStrength, setPswdStrength] = useState(0);

  useEffect(() => {
    setPswdStrength(passwordStrength(password));
  }, [password]);

  return (
    <Login
      {...props}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      pswdStrength={pswdStrength}
      setPswdStrength={setPswdStrength}
    />
  );
};

export default EnhanceLogin;
