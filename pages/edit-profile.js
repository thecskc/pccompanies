import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav";
import firebase from "../components/firebase";
import Button from "@material-ui/core/Button";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      resume_link: "",
      recent_role_1: "",
      recent_role_2: "",
      username: "",
      user: null
    };

    this.saveData = this.saveData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createNewStateObj = this.createNewStateObj.bind(this);
  }

  createNewStateObj() {
    const obj = {};
    for (let key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        obj[key] = this.state[key];
      }
    }
    return obj;
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        });
      }
    });
  }

  saveData(event) {
    const self = this;
    event.preventDefault();
    const collection = "Profiles";
    const saveDoc = this.createNewStateObj();
    delete saveDoc["user"];
    firebase
      .firestore()
      .collection(collection)
      .where("username", "==", self.state.username)
      .get()
      .then(function(docs) {
        if (docs.size === 0) {
          firebase
            .firestore()
            .collection(collection)
            .doc(self.state.user.uid)
            .set(saveDoc)
            .then(() => {
              console.log("doc written");
              alert("Saved!");
            });
        } else {
          alert("Username already exists");
        }
      });
  }
  handleChange(event) {
    event.preventDefault();
    const nameVal = event.target.name;
    const valueVal = event.target.value;
    this.setState({ [nameVal]: valueVal });
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
              Edit Profile
            </div>
            <br />
            <br />
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                width: "75%"
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
              />
              <br />
              <br />
              <input
                type="text"
                name="username"
                placeholder="Enter a username"
                value={this.state.username}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
              />
              <br />
              <br />
              <input
                type="url"
                name="resume_link"
                placeholder="Enter a link to your resume (Make it shareable)"
                value={this.state.resume_link}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
              />
              <br />
              <br />

              <textarea
                style={{ width: "75%" }}
                placeholder="Enter a bio (100 words limit)"
                type="text"
                name="bio"
                rows="5"
                onChange={this.handleChange}
                value={this.state.bio}
                required
              />

              <br />
              <br />

              <input
                type="url"
                name="recent_role_1"
                placeholder="Most Recent Role and Company"
                value={this.state.recent_role_1}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
              />
              <br />
              <br />
              <input
                type="url"
                name="recent_role_2"
                placeholder="Second Most Recent Role and Company"
                value={this.state.recent_role_2}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
              />
              <br/><br/>
              <Button
                variant="contained"
                color="primary"
                onClick={this.saveData}
              >
                Save{" "}
              </Button>
            </form>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default EditProfile;
