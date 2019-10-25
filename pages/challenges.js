import { Component } from "react";
import "../styles/styles.css";
import Navbar from "../components/nav";
import firebase from "../components/firebase";
import "../styles/cards.css";
import ChallengeItem from "../components/ChallengeItem";
import React from "react";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      user: null
    };
    this.getChallenges.bind(this);
  }

  getChallenges() {
    const self = this;
    firebase
      .firestore()
      .collection("Challenges")
      .get()
      .then(function(snapshot) {
        let arrVal = [];
        snapshot.forEach(function(doc) {
          arrVal.push(<ChallengeItem key={doc.id} dataItem={doc.data()} />);
        });
        self.setState({
          challenges: arrVal
        });
      });
  }
  componentDidMount() {
    //TODO: Get a list of challenges

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        });
      }
    });

    this.getChallenges();
  }

  render() {
    if (this.state.user) {
      return (
        <>
          <Navbar />
          <br />
          <br />
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div className="heading-2">Challenges</div>
              <br/><br/>

            {this.state.challenges}
          </div>
        </>
      );
    } else {
      return <div />;
    }
  }
}

export default Challenges;
