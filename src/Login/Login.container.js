import React, { useState, useEffect } from "react";
import "./Login.css";
import Login from "./Login";

const hasMaj = word => word.match(/[A-Z]/);
const hasMin = word => word.match(/[a-z]/);
const hasAlpha = word => word.match(/\W/);
const hasNumber = word => word.match(/\d/);
const isMoreThan8 = word => word.length > 8;
const passwordStrength = word =>
  Object.values({
    hasMaj: hasMaj(word),
    hasMin: hasMin(word),
    hasAlpha: hasAlpha(word),
    hasNumber: hasNumber(word),
    isMoreThan8: isMoreThan8(word)
  }).filter(Boolean).length;

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pswdStrength, setPswdStrength] = useState(0);

  useEffect(() => {
    let passwdStrengthValue = passwordStrength(password);
    console.log(passwdStrengthValue);
    setPswdStrength(passwdStrengthValue);
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
