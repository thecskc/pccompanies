import React, { Component } from "react";
import Router from "next/router";
import Card from "../components/Card";
import "../styles/styles.css";
import "../styles/cards.css";

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.dataItem = this.props.dataItem;
    this.viewSubmission = this.viewSubmission.bind(this);
  }

  viewSubmission(event,submissionLink) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="card" style={{width:"75%",display:"flex",flexDirection:"column",padding:"16px"}}>
        <div className="card-heading">{this.dataItem["challenge_title"]}</div>

        <div
          style={{ color: "blue" }}
          className="card-subheading"
          onClick={(event)=>this.viewSubmission(event,this.dataItem["submission_link"])}
        >
          View Submission
        </div>

        <div className="paragraph-small">
          Scores:
          <br />
          <br />
          Innovativeness - {this.dataItem.innv}<br/>
          Product Design - {this.dataItem["prod_design"]}<br/>
          Feasibility - {this.dataItem.feasibility}<br/>
          Market Research and Competitive Analysis -{" "}
          {this.dataItem["market_research"]}<br/>
          Launch Plan - {this.dataItem["launch_plan"]}<br/>
        </div>
      </div>
    );
  }
}
export default PortfolioItem;