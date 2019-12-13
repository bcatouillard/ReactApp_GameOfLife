import React from "react";
import "./Login.css";
import Header from "../layout/Header/Header";

const subtitle = "Login";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  pswdStrength,
  styleProgressBar,
  formHandler,
  hideErrorMessage
}) => (
  <>
    <Header subtitle={subtitle} />
    <div className="login">
      <form className="login" onSubmit={formHandler}>
        <label for="email">Login</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login__email"
          placeholder="Email"
        />
        <label for="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="login__password"
          placeholder="Password"
        />
        <h3>Password strength</h3>
        <div className="password-strength__bar-container">
          <div className="password-strength__bar " style={styleProgressBar}>
            <span className="password-strength__value">{pswdStrength}</span>
          </div>
        </div>
        <h3 className="login__error " style={hideErrorMessage}>
          Bad credentials
        </h3>
        <button className="login__button">Login</button>
      </form>
    </div>
  </>
);

export default Login;
