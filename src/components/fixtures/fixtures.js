import React, { Component } from "react";
import "../../static/css/fixture.css";
import firebase from "../../config/fbConfig";
import Navigation from "../dashbord/Navbar";
import Footer from "../dashbord/footer";
class Fixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    var db = firebase.firestore();
    var teams = [];

    db.collection("fixtures")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          teams.push(doc.data());
        });
        this.setState({
          fixtures: teams,
          loading: false
        });
      })
      .catch(error => ({
        error: error
      }));
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="fixtureDiv">
          <Navigation />
          <div className="container">
            <img
              className="loading"
              src={require("../../static/image/loading.gif")}
              alt="Loading..."
            />
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="fixtureDiv">
            <Navigation />
            <section className="wrapper">
              <div className="container">
                <div className="row">
                  {this.state.fixtures.map(fixture => (
                    <div className="col-xs-12 col-sm-4" key={fixture.id}>
                      <div className="card">
                        <div className="card-content">
                          <div className="content">
                            <h4>
                              <span>{fixture.first_team}</span>{" "}
                            </h4>
                            <div className="versus">
                              <img
                                src={require("../../static/icon/vs.png")}
                                alt="Icon"
                              />
                            </div>
                            <h4 className="secondTeam">{fixture.sec_team} </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Fixture;
