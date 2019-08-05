import React from "react";
import firebase from "../../config/fbConfig";
class AddFixtures extends React.Component {
  constructor() {
    super();
    this.state = {
      first_team: "",
      sec_team: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("fixtures").add({
      first_team: this.state.first_team,
      sec_team: this.state.sec_team
    });

    this.setState({
      first_team: "",
      sec_team: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="first_team"
          placeholder="First Team"
          onChange={this.handleChange}
          value={this.state.first_team}
        />
        <input
          type="teaxt"
          name="sec_team"
          placeholder="Second Team"
          onChange={this.handleChange}
          value={this.state.sec_team}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default AddFixtures;
