import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav";
import firebase from "../components/firebase";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      doc: {}
    };
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
  }

  componentDidMount() {
    let self = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .firestore()
          .collection("Profiles")
          .doc(user.uid)
          .get()
          .then(function(doc) {
            self.setState({
              user: user,
              doc: doc
            });
          });
      }
    });
  }

  handlePortfolioClick(event){
      event.preventDefault();
      const username = this.state.doc.data().username;
      window.open("/portfolio/"+username);

  }

  resumeClick(event, url) {
    event.preventDefault();
    window.open(url);
    // window.location.href=url;
  }

  render() {
    if (this.state.user) {
      return (
        <>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div style={{ alignSelf: "center" }} className="heading-2">
              Profile
            </div>

            <div className="row" style={{ width: "100vw", height: "100vh" }}>
              <div className="col-30" style={{ margin: "2vw" }}>
                <div
                  className="row card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px",


                  }}
                >
                  <div>
                    <div className="card-heading">
                      {this.state.doc.data().name}
                    </div>
                    <div
                      className="card-subheading"
                      onClick={event =>
                        this.resumeClick(
                          event,
                          this.state.doc.data().resume_link
                        )

                      }
                      style={{color:"blue"}}
                    >
                      Click for resume
                    </div>
                  </div>
                  <div
                    className="button-cta"
                    style={{ width: "33%", alignSelf: "center" }}
                    onClick={this.handlePortfolioClick}
                  >
                    View Portfolio
                  </div>
                </div>

                <div
                  className="row card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px"
                  }}
                >
                  <div className="paragraph">{this.state.doc.data().bio}</div>
                </div>
              </div>

              <div className="col-60" style={{ margin: "2vw" }}>
                <div
                  className="row card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px"
                  }}
                >
                  <div className="card-heading">Overall Scores</div>
                </div>
                <div
                  className="row card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",


                  }}
                >
                  <div className="card-heading" style={{alignSelf:"flex-start"}}>Recent Roles</div>
                    <br/><br/>
                  <div className="card-subheading">
                    1) {this.state.doc.data().recent_role_1}
                  </div>
                    <br/><br/>


                  <div className="card-subheading">
                    2) {this.state.doc.data().recent_role_2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div/>;
    }
  }
}

export default Profile;
