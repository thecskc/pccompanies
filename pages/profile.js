import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav"

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <Navbar/>
          <br/><br/>
      <div className="container">

        <div style={{alignSelf:"center"}} className="heading-2">Profile</div>

        <div className="row" style={{ width: "100vw", height: "100vh" }}>
          <div className="col-30" style={{ margin: "2vw" }}>
            <div className="row card" style={{display:"flex",flexDirection:"column",padding:"16px"}}>
                <div className="card-heading">Name</div>
            </div>

            <div className="row card" style={{display:"flex",flexDirection:"column",padding:"16px"}}>
                <div className="card-heading">Bio</div>

            </div>
          </div>

          <div className="col-60" style={{ margin: "2vw" }}>
              <div className="row card" style={{display:"flex",flexDirection:"column",padding:"16px"}}>
                  <div className="card-heading">Overall Scores</div>

              </div>
              <div className="row card" style={{display:"flex",flexDirection:"column",padding:"16px"}}>
                  <div className="card-heading">Recent Roles</div>

              </div>
          </div>
        </div>
      </div>
          </>
    );
  }
}

export default Profile;
