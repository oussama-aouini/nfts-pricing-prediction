import React from "react";

import Searchbar from "./Searchbar";

import logo from "../assets/logo.png";

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

import "./Topbar.css";

function Topbar() {
  const {auth} = useContext(AuthContext)

  return (
    <div className="Topbar">
      <img src={logo} />
      <Searchbar />
      <button
        onClick={() => {
          window.location.pathname = "login";
        }}
      >
        {auth.username? auth.username :" SIGN IN"}
      </button>
    </div>
  );
}

export default Topbar;
