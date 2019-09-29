import React, {Component} from 'react'
import "../styles/cards.css"
import "../styles/styles.css"

class Card extends Component{
    constructor(props) {
        super(props);
        this.onClickViewProfile = this.onClickViewProfile.bind(this);
        this.fullProfile = this.props.fullProfile;

    }


    onClickViewProfile(){


    }


    render(){

        return(



            <div className="card">

                <div className="card-container">



                </div>



            </div>



        )




    }



}


