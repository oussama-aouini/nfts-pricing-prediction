import React from "react";

import Searchbar from "./Searchbar";

import logo from "../assets/logo.png";

import "./Topbar.css";

function Topbar() {
  return (
    <div className="Topbar">
      <img src={logo} />
      <Searchbar />
      <button
        onClick={() => {
          window.location.pathname = "login";
        }}
      >
        SIGN IN
      </button>
    </div>
  );
}

export default Topbar;
