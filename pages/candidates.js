import React, {Component} from 'react'
import Router from "next/router";
import Card from "../components/Card"
import "../styles/styles.css"
import "../styles/cards.css"


class Candidates extends Component {

    constructor(props) {
        super(props);
        this.fullProfile = this.props.fullProfile;

    }


    render() {

        const mockProfiles=[mockProfile,mockProfileTwo];
        const mockProfile = {
            "name": "Santhosh",
            "overall_score": "6.5/7",
            "challenges": [
                {
                    "challenge": "binance_challenge",
                    "innv": "7/7",
                    "prod_design": "6/7",
                    "feasibility": "7/7",
                    "market_research": "6/7",
                    "competitive_analysis": "7/7",
                    "launch_plan": "6/7",
                    "submission_link": "https://google.com"
                },
                {
                    "challenge": "coding_bootcamp_challenge",
                    "innv": "7/7",
                    "prod_design": "6/7",
                    "feasibility": "7/7",
                    "market_research": "6/7",
                    "competitive_analysis": "7/7",
                    "launch_plan": "6/7",
                    "submission_link": "https://google.com"
                }

            ]
        };
        const mockProfileTwo = {
            "name": "KC",
            "overall_score": "6.5/7",
            "challenges": [
                {
                    "challenge": "binance_challenge",
                    "innv": "7/7",
                    "prod_design": "6/7",
                    "feasibility": "7/7",
                    "market_research": "6/7",
                    "competitive_analysis": "7/7",
                    "launch_plan": "6/7",
                    "submission_link": "https://google.com"
                },
                {
                    "challenge": "coding_bootcamp_challenge",
                    "innv": "7/7",
                    "prod_design": "6/7",
                    "feasibility": "7/7",
                    "market_research": "6/7",
                    "competitive_analysis": "7/7",
                    "launch_plan": "6/7",
                    "submission_link": "https://google.com"
                }

            ]
        };

        let cards=[];
        for(let i=0;i<mockProfiles.length;i++){
            cards.push(<Card fullProfile={mockProfiles[i]} key={i}/>)

        }


        return (
            <>

                <div className="container">

                    <div className="card-container" style={{"flex-direction": "row", "flex-wrap": "wrap"}}>

                        {cards}

                    </div>

                </div>


            </>
        )

    }


}

export default Candidates;
