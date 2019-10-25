import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav";
import firebase from "../components/firebase";
import Button from "@material-ui/core/Button";

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

  handlePortfolioClick(event) {
    event.preventDefault();
    const username = this.state.doc.data().username;
    window.open("/portfolio/" + username);
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
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px",
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <div>
                    <div className="card-heading">
                      {this.state.doc.data().name}
                    </div>
                    <br />
                    <br />

                    <div className="paragraph">{this.state.doc.data().bio}</div>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "30%", alignSelf: "center" }}
                    onClick={event =>
                      this.resumeClick(event, this.state.doc.data().resume_link)
                    }
                  >
                    View Resume
                  </Button>
                </div>
              </div>

              <div className="col-60" style={{ margin: "2vw" }}>
                <div
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    width: "100%",
                      height:"60%"
                  }}
                >
                  <div
                    className="card-heading"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Overall Scores
                  </div>

                    <br/>

                    <div className="paragraph-small">
                        Scores:
                        <br />

                        Innovativeness - 7/7<br/>
                        Product Design - 6/7<br/>
                        Feasibility - 6/7<br/>
                        Market Research and Competitive Analysis - 7/7<br/>
                        Launch Plan - 7/7<br/>
                    </div>

                    <br/><br/>

                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "20%" }}
                    onClick={this.handlePortfolioClick}
                  >
                    View Portfolio
                  </Button>
                </div>
                <div
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    width: "100%",
                      height:"40%"
                  }}
                >
                  <div
                    className="card-heading"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Recent Roles
                  </div>
                  <br />
                  <br />
                  <div className="card-subheading">
                    1) {this.state.doc.data().recent_role_1}
                  </div>
                  <br />
                  <br />

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
      return (
        <div>
          {" "}
          <Navbar />
          <div />
        </div>
      );
    }
  }
}

export default Profile;
