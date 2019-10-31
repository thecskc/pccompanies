import React, { Component } from "react";
import Router from "next/router";
import Card from "../components/Card";
import "../styles/styles.css";
import "../styles/cards.css";
import firebase from "./firebase";


class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.dataItem = this.props.dataItem;
    this.viewSubmission = this.viewSubmission.bind(this);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      }
    });
  }

  viewSubmission(event, submissionLink) {
    event.preventDefault();
  }
  render() {
    let dataInfo;


    if(this.state.user) {
        if (this.props.user.uid === this.state.user.uid) {
            dataInfo = (
                <div className="paragraph-small">
                    Scores:
                    <br/>
                    <br/>
                    Customer Analysis - {this.dataItem.customer_analysis}
                    <br/>
                    Product Design - {this.dataItem["prod_design"]}
                    <br/>
                    Feasibility - {this.dataItem.feasibility}
                    <br/>
                    Competitive Strategy - {this.dataItem["competitive_strategy"]}
                    <br/>
                    Launch Plan - {this.dataItem["launch_plan"]}
                    <br/>
                </div>
            );
        } else {
            dataInfo = <div></div>;
        }


        return (
            <div
                className="card"
                style={{
                    width: "75%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px"
                }}
            >
                <div className="card-heading">{this.dataItem["challenge_title"]}</div>

                <div
                    style={{color: "blue"}}
                    className="card-subheading"
                    onClick={event =>
                        this.viewSubmission(event, this.dataItem["submission_link"])
                    }
                >
                    View Submission
                </div>

                {dataInfo}
            </div>
        );
    }
    else{
        return <div/>
    }
  }
}
export default PortfolioItem;
