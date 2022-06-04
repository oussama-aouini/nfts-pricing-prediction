import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-description">
        <h1>aNalyFTs</h1>
        <p>
          Predict the future & make the best buying and sellign descisions using
          machine learning.
        </p>
      </div>
      <div className="login-form">
        <form action="">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Log In</button>
          <div className="sing-up">
          </div>
        </form>
        <button style={{width: "100px"}}
              onClick={() => {
                window.location.pathname = "/signup";
              }}
            >
              Sing Up
            </button>
      </div>
    </div>
  );
};

export default Login;
