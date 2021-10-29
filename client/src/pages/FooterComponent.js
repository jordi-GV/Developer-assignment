import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand href="">Advertisements</Navbar.Brand>
        <span className="date text">October 2021</span>
      </Container>
    </Navbar>
  );
}

export default Footer;
