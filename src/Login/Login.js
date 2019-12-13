import React from "react";
import "./Login.css";

const Login = () => (
  <div class="login">
    <form class="login">
      <label for="email">Login</label>
      <input id="email" type="email" class="login__email" placeholder="Email" />
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        class="login__password"
        placeholder="Password"
      />
      <h3>Password strength</h3>
      <progress
        class="password-strength__progress"
        max="5"
        value="0"
      ></progress>
      <div class="password-strength__bar-container">
        <div class="password-strength__bar">
          <span class="password-strength__value"></span>
        </div>
      </div>
      <h3 class="login__error login__error--hide">Bad credentials</h3>
      <button class="login__button">Login</button>
    </form>
  </div>
);

export default Login;
