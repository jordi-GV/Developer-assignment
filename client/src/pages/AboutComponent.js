import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function About() {
  return (
    <Container>
      <Row>
        <Col className="info yellow my-5">
          <h3>React</h3>
          <p>stand in folder Advertisements/client</p>
          <p>$ npm start</p>
          <p>
            Open{" "}
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noreferrer"
            >
              http://localhost:3000{" "}
            </a>
            to view it in the browser.
          </p>
        </Col>
        <Col className="info  my-5">
          <h3>json server</h3>
          <p>stand in folder Advertisements/api</p>
          <p>$ json-server --watch db.json --port 3004</p>
          <p>
            Open{" "}
            <a
              href="http://localhost:3004/advertisements"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              http://localhost:3004/advertisements{" "}
            </a>
            to view it in the browser.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
