import { Component } from "react";
import "../styles/styles.css";

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentDidMount() {
    //TODO: Get a list of challenges
  }

  render() {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <div className="container">
            Challenges go here
        </div>
      </>
    );
  }
}

export default Challenges;
