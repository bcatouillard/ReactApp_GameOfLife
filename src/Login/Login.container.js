import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Login from "./Login";
import passwordStrength from "./Login.pure";

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pswdStrength, setPswdStrength] = useState(0);
  const [styleProgressBar, setStyleProgressBar] = useState({});
  const history = useHistory();

  const formHandler = e => {
    e.preventDefault();
    if (email === "bcatouillard@gmail.com" && password === "123abc123") {
      history.push("/dashboard");
    } else {
    }
  };

  useEffect(() => {
    let passwordStrengthValue = passwordStrength(password);
    setPswdStrength(passwordStrengthValue);
    setStyleProgressBar({
      width: `${passwordStrengthValue * 20}%`,
      backgroundColor: `rgb(
        ${(255 / 5) * (5 - passwordStrengthValue)}, 
        ${(255 / 5) * passwordStrengthValue}, 
        ${0}
      )`
    });
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
      styleProgressBar={styleProgressBar}
      formHandler={formHandler}
    />
  );
};

export default EnhanceLogin;
