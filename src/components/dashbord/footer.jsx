import React from "react";
import "../../static/css//footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small unique-color-dark footer">
      <div className="social">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0">Get connected with us on social networks!</h6>
          </div>
          <div className="col-md-6 col-lg-5 text-center mb-1">
            <Link to="#">
              <img
                className="header--icon mr-4"
                src={require("../../static/icon/facebook.svg")}
                alt="phone"
              />
            </Link>
            <Link to="#">
              <img
                className="header--icon mr-4"
                src={require("../../static/icon/youtube.svg")}
                alt="youtube"
              />
            </Link>
            <Link to="#">
              <img
                className="header--icon mr-4"
                src={require("../../static/icon/twitter.svg")}
                alt="twitter"
              />
            </Link>
            <Link to="#">
              <img
                className="header--icon mr-4"
                src={require("../../static/icon/instagram.svg")}
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer--main">
        <div className="container text-center text-md-left mt-1 ">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 col-sm-3 col-5 mx-auto mb-4">
              <img
                className="footer--logo"
                src={require("../../static/image/logo_cric.png")}
                alt="Logo"
              />
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 col-sm-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold link--heading">
                Useful links
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link to="/register" className="link">
                  Register
                </Link>
              </p>
              <p>
                <Link to="#" className="link">
                  Teams
                </Link>
              </p>
              <p>
                <Link to="#" className="link">
                  Fixtures
                </Link>
              </p>
              <p>
                <Link to="/result" className="link">
                  Results
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 col-sm-5 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold link--heading">
                Contact
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p className="contact--detail">
                <img
                  className="svg--icon mr-1"
                  src={require("../../static/icon/home.svg")}
                  alt="phone"
                />
                PDPU High Rise Hostel
              </p>
              <p className="contact--detail">
                <img
                  className="svg--icon mr-3"
                  src={require("../../static/icon/email.svg")}
                  alt="phone"
                />
                cricleague@iiitv.ac.in
              </p>
              <p className="contact--detail">
                <img
                  className="svg--icon mr-3"
                  src={require("../../static/icon/phone.svg")}
                  alt="phone"
                />
                +91 9119637832
              </p>
              <p className="contact--detail">
                <img
                  className="svg--icon mr-3"
                  src={require("../../static/icon/printer-.svg")}
                  alt="phone"
                />
                +91 9119637832
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2019 Copyright: Yogender Jangir, Shubham Singh & Harsh Dwivedi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
