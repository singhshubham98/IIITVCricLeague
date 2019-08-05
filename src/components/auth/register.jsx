import React, { Component } from "react";
import { connect } from "react-redux";
import { SignUpPlayer } from "../../store/actions/authActions";
import Navigation from "../dashbord/Navbar";
import "../../static/css/register.css";
import Footer from "../dashbord/footer";
import image from "../../static/image/register.png";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      redirect: false,
      firstname: "",
      lastname: "",
      batch: "",
      email: "",
      phoneNumber: "",
      errors: {
        firstname: "",
        lastname: "",
        batch: "",
        phoneNumber: "",
        email: "",
        disabled: true
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.SignUpPlayer(this.state);
    this.setState({
      redirect: true
    });
  };

  handleBlur = e => {
    const { errors, ...inputs } = this.state;
    this.validation(inputs);
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  validation = ({ firstname, lastname, batch, phoneNumber, email }) => {
    const errors = {
      firstname: "",
      lastname: "",
      batch: "",
      phoneNumber: "",
      email: "",
      disabled: false
    };

    if (
      (firstname.length < 3 || firstname.length > 20) &&
      firstname.length !== 0
    ) {
      errors.firstname = "Name should be 3-20 characters";
      errors.disabled = true;
    } else if (lastname.length < 3 && lastname.length !== 0) {
      errors.lastname = "Last Name should be greater than 3 characters";
      errors.disabled = true;
    } else if (lastname.length > 10 && lastname.length !== 0) {
      errors.lastname = "Last Name is not more then 10 characters";
      errors.disabled = true;
    } else if (
      email.split("").filter(x => x === "@").length !== 1 &&
      email.length !== 0
    ) {
      errors.email = "Email should contain a @";
      errors.disabled = true;
    } else if (parseInt(batch) < 2016 && batch.length !== 0) {
      errors.batch = "Batch should be b/w 2016 to 2022";
      errors.disabled = true;
    } else if (parseInt(batch) > 2022 && batch.length !== 0) {
      errors.batch = "Batch should be b/w 2016 to 2022";
      errors.disabled = true;
    } else if (!parseInt(phoneNumber) && phoneNumber.length !== 0) {
      errors.phoneNumber = "Tel. Number should contain only numbers";
      errors.disabled = true;
    }

    this.setState({ errors });

    return errors;
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <React.Fragment>
          <div className="teamDiv">
            <Navigation />
            <div className="row">
              <div className="col-md-6 col-lg-6 col-12 offset-md-1  offset-lg-1 mt-4">
                <div className="formWrapper">
                  <form
                    className="text-center p-5"
                    onSubmit={this.handleSubmit}
                  >
                    <p className="h4 mb-4">Sign up</p>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control mb-4"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.firstname}</p>

                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control mb-4"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      placeholder="Last Name"
                    />

                    <p className="text-danger">{this.state.errors.lastname}</p>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control mb-4"
                      placeholder="E-mail"
                      onBlur={this.handleBlur}
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                    <input
                      type="text"
                      id="batch"
                      name="batch"
                      className="form-control mb-4"
                      placeholder="Batch"
                      value={this.state.batch}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.batch}</p>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control mb-4"
                      placeholder="Phone number"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">
                      {this.state.errors.phoneNumber}
                    </p>

                    <button
                      className="btn button"
                      disabled={this.state.errors.disabled}
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <img
                  src={image}
                  alt="register_image"
                  className="registerImage"
                />
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SignUpPlayer: player => dispatch(SignUpPlayer(player))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Register);
