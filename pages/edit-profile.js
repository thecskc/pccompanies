import React, { Component } from "react";
import "../styles/cards.css";
import "../styles/styles.css";
import Navbar from "../components/nav";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      resume_link: "",
      current_profession: "",
      recent_role_1: "",
      recent_role_2: ""
    };

    this.saveData = this.saveData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  saveData(event) {
    event.preventDefault();
  }
  handleChange(event) {
    event.preventDefault();
    const nameVal = event.target.name;
    const valueVal = event.target.value;
    this.setState({ [nameVal]: valueVal });
  }

  render() {
    return (
        <>
        <Navbar/>
          <br/><br/>
      <div className="container">

          <div style={{alignSelf:"center"}} className="heading-2">Edit Profile</div>
        <br/><br/>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
              alignItems:"center",
              width:"75%"
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
          /><br/><br/>
            <input
                type="url"
                name="resume_link"
                placeholder="Enter a link to your resume (Make it shareable)"
                value={this.state.resume_link}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
            /><br/><br/>

            <textarea style={{width:"75%"}} placeholder="Enter a bio (100 words limit)" type="text" name="bio" rows="5" required/>

          <br/><br/>

            <input
                type="url"
                name="recent_role_1"
                placeholder="Most Recent Role and Company"
                value={this.state.recent_role_1}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
            />
            <br/><br/>
            <input
                type="url"
                name="recent_role_2"
                placeholder="Second Most Recent Role and Company"
                value={this.state.recent_role_2}
                onChange={this.handleChange}
                style={{ width: "75%" }}
                required
            />

        </form>
      </div>
        </>
    );
  }
}

export default EditProfile;
