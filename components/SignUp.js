import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../styles/signup.css";
import "../styles/styles.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const customStyles = {};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      authenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //TODO: FINISH THIS
  }

  handleChange(event) {
    event.preventDefault();
    const nameVal = event.target.name;
    const valueVal = event.target.value;
    this.setState({ [nameVal]: valueVal });
  }
  render() {
    return (
      <div className="login-container">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          style={{ width: "75%", marginBottom: "3vh" }}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          style={{ width: "75%" }}
        />
        <br />
        <br />
        <div className="row" style={{justifyContent:"space-evenly"}}>
          <Button variant="contained" color="primary" style={{ width: "20%" }}>
            Sign Up
          </Button>
          <Button variant="contained" color="primary" style={{ width: "20%" }}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
