import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function LoginHome() {
  const logOut = function () {
    localStorage.clear();
  };
  return (
    <div className="container-login" style={{ marginTop: "40%" }}>
      <form>
        <ul>
          <li type="none">
            <Link to="/accountLogin">
              <button
                className="loginBtn"
                style={localStorage.getItem("username") && { display: "none" }}
              >
                Login
              </button>
            </Link>
          </li>
          <li type="none">
            <Link to="/">
              <button
                className="loginBtn"
                style={localStorage.getItem("username") && { display: "none" }}
              >
                Vistor
              </button>
            </Link>
          </li>
          <li type="none">
            <Link to="/register">
              <button
                className="loginBtn"
                style={localStorage.getItem("username") && { display: "none" }}
              >
                Register
              </button>
            </Link>
          </li>
          <li type="none">
            <button className="loginBtn" onClick={logOut}>
              Logout
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
