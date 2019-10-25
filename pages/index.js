import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import firebase from "../components/firebase";
import Login from "./login";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        });
        window.location.href="/profile";
      } else {
        window.location.href = "/login";
      }
    });
  }

  render() {



    if (this.state.user) {
      return <div>Home</div>;
    } else {
      return <div> Not Logged In</div>;
    }
  }
}

export default Home;
