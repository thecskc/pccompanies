import React, { Component } from "react";
import "../../styles/cards.css";
import "../../styles/styles.css";
import Navbar from "../../components/nav";
import Router from "next/router";
import PortfolioItem from "../../components/PortfolioItem";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.challengeData = [];
    this.getChallengeData.bind(this);
  }

  getChallengeData(id) {
    const challenges = [
      {
        challenge_title: "The Binance Challenge",
        innv: "7/7",
        prod_design: "6/7",
        feasibility: "7/7",
        market_research: "6/7",
        competitive_analysis: "7/7",
        launch_plan: "6/7",
        submission_link: "https://google.com"
      },
      {
        challenge_title: "The Coding Bootcamp Challenge",
        innv: "7/7",
        prod_design: "6/7",
        feasibility: "7/7",
        market_research: "6/7",
        competitive_analysis: "7/7",
        launch_plan: "6/7",
        submission_link: "https://google.com"
      }
    ];

    return challenges;
  }

  componentDidMount() {
    let url = window.location.href.split("/");
    console.log(url);
    let id = url[url.length - 1];
    console.log(id);
    this.setState({
      id: id
    });

    this.challengeData = this.getChallengeData(this.state.id);
  }

  render() {
    console.log(this.challengeData);
    let challengeComponents = [];
    for (let i = 0; i < this.challengeData.length - 1; i += 2) {
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
              key={this.challengeData[i]["submission_link"]}
              dataItem={this.challengeData[i]}
            />
          </div>
          <div className="col-50" style={{ alignItems: "center" }}>
            <PortfolioItem
              key={this.challengeData[i + 1]["submission_link"]}
              dataItem={this.challengeData[i + 1]}
            />
          </div>
        </div>
      );
    }

    return (
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
          <div className="heading-2" style={{marginTop:"5vh",marginBottom:"5vh"}}>{this.state.id}'s Portfolio</div>
          {challengeComponents}
        </div>
      </>
    );
  }
}

export default Portfolio;
