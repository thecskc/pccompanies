import React, { Component } from "react";
import "../../styles/cards.css";
import "../../styles/styles.css";
import Navbar from "../../components/nav";
import Router from "next/router";
import PortfolioItem from "../../components/PortfolioItem";
import firebase from "../../components/firebase";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user: null,
      challengeData: null
    };
    this.getChallengeData.bind(this);
  }

  anonymizeData(challengeData) {}

  async getChallengeData(id) {
    firebase
      .firestore()
      .collection("Portfolios")
      .where("username", "==", id)
      .get()
      .then(docs => {
        console.log(docs);

        let arr = [];
        docs.forEach(function(doc){
          arr.push(doc.data())
        })
        this.setState({
          challengeData: arr[0].challenges
        });
      });
  }

  componentDidMount() {
    let url = window.location.href.split("/");
    console.log(url);
    let id = url[url.length - 1];
    console.log(id);

    let self = this;
    self.getChallengeData(id);
    firebase.auth().onAuthStateChanged(function(user) {
      self.setState({
        id: id,
        user: user
      });
    });
  }

  render() {
    console.log("Challenge Data", this.state.challengeData);
    console.log("Username", this.state.id);
    let challengeComponents = [];

    if (this.state.challengeData) {
      for (let i = 0; i < this.state.challengeData.length; i ++) {
        challengeComponents.push(
          <div
            className="row"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div className="col-50" style={{ alignItems: "center" }}>
              <PortfolioItem
                user={this.state.user}
                key={this.state.challengeData[i]["submission_link"]}
                dataItem={this.state.challengeData[i]}
              />
            </div>

          </div>
        );
      }
    }

    let retVal;
    if (this.state.id && this.state.challengeData) {
      retVal = (
        <>
          <Navbar />

          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center"
            }}
          >
            <div
              className="heading-2"
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
            >
              {this.state.id}'s Portfolio
            </div>
            {challengeComponents}
          </div>
        </>
      );
    } else {
      retVal = <div />;
    }
    return retVal;
  }
}

export default Portfolio;
