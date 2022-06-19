import React, { useState, useContext } from "react";

import AuthContext from "../context/UserContext";

import "./Login.css";

const Login = ({history}) => {

  const {auth, setAuth} = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loged, setLoged] = useState(false)

  const get_user = async () => {
    const response = await fetch(`http://127.0.0.1:8000/user/1`)
    const data = await response.json()
    setAuth(data)
  }

  const login = () => {
    get_user()
    setLoged(true)
  }

  if (loged) {
    history.push('/')
  }

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
          <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={login}>Log In</button>
          <div className="sing-up">
          </div>
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
