import React, { Component } from "react";
import Router from "next/router";
import Card from "../components/Card";
import "../styles/styles.css";
import "../styles/cards.css";

class ChallengeItem extends Component {
    constructor(props) {
        super(props);
        this.dataItem = this.props.dataItem;
        this.viewSubmission = this.viewSubmission.bind(this);
    }

    viewSubmission(event,submissionLink) {
        event.preventDefault();
        window.location.href=submissionLink;
    }

    getDate(dateObj){
        const strVal = dateObj.toDate().toString();
        const dateArr = strVal.split(" ");
        const retVal = dateArr[0]+" "+dateArr[1]+" "+dateArr[2]+" "+dateArr[3];
        return retVal;
    }
    render() {
        return (
            <div className="card" style={{width:"40%",display:"flex",flexDirection:"column",padding:"16px"}}>
                <div className="card-heading">{this.dataItem["challenge_title"]}</div>

                <div
                    style={{ color: "blue",marginBottom:"2vh" }}
                    className="card-subheading"
                    onClick={(event)=>this.viewSubmission(event,this.dataItem["challenge_url"])}
                >
                    Solve the challenge
                </div>

                <div
                    style={{ color: "red",marginBottom:"2vh" }}
                    className="card-subheading"

                >
                    Expiry Date - {this.getDate(this.dataItem["challenge_expiry"])}
                </div>



                <div className="paragraph-small">
                    {this.dataItem["challenge_description"]}
                </div>
            </div>
        );
    }
}
export default ChallengeItem;