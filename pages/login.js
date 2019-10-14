import React, { Component } from "react";
import Router from "next/router";
import Card from "../components/Card";
import "../styles/styles.css";
import "../styles/cards.css";
import SignUp from "../components/SignUp";
import Navbar from "../components/nav";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className="container"
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "32px"
          }}
        >
          <div className="heading" style={{ marginBottom: "3vh" }}>
            Sign Up/Log In
          </div>

          <SignUp />
        </div>
      </>
    );
  }
}

export default Login;
