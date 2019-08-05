import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../../static/css/Navbar.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="navDiv">
          <NavbarBrand className="navbarBrand ml-4" href="/">
            CRICKET <span>LEAGUE</span>
          </NavbarBrand>
          <NavbarToggler className="toggleButton" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mt-2" navbar>
              <NavItem>
                <NavLink href="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/fixtures" className="nav-link">
                  Fixtures
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register" className="nav-link">
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="nav-link">
                  Results
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
