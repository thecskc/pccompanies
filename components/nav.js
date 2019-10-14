import React, { Component } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import Router from "next/router";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(event, path) {
        event.preventDefault();
        window.location.href = path;
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">
                <div onClick={event => this.handleClick(event, "/")}>Profile</div>
                <div onClick={event => this.handleClick(event, "/bravura")}>
                    Challenges
                </div>

            </div>
        );
    }
}

export default Navbar;
