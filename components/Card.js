import React, {Component} from 'react'
import "../styles/cards.css"
import "../styles/styles.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.onClickViewProfile = this.onClickViewProfile.bind(this);
        this.fullProfile = this.props.fullProfile;


    }


    onClickViewProfile() {

        //todo:finish this. ok will finish later.


    }


    render() {

        return (


            <div className="card" style={{"display":"flex","flex-direction":"column"}}>

                <div style={{"width":"100%","margin-bottom":"3%"}}>
                    <h1>{this.fullProfile.name}</h1>
                    <h2>Score - {this.fullProfile.overall_score}</h2>

                </div>

                <button style={{"width":"25%","alignSelf":"center"}} onClick={this.onClickViewProfile}>View Profile</button>




            </div>


        )


    }


}

export default Card;


