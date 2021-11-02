import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <span className="textBrand">ADVERTISEMENTS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll " />
          <Navbar.Collapse id="responsive-navbar-nav navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/table">Table</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="http://localhost:3004/advertisements"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text">json</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
