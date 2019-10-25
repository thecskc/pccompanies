import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav";
import firebase from "../components/firebase";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      doc: {}
    };
  }

  componentDidMount() {
    let self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("Profiles")
          .doc(user.uid)
          .get()
          .then(function(doc) {
            self.setState({
              user: user,
              doc: doc
            });
          });
      }
    });
  }

  render() {
    if (this.state.user) {
      return (
        <>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div style={{ alignSelf: "center" }} className="heading-2">
              Jobs
            </div>
          </div>
        </>
      );
    } else {
      return <div />;
    }
  }
}

export default Jobs;
