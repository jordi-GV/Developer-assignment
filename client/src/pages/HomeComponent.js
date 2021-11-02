import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AddAdvForm from "../features/advertisments/AddAdvsForm";
import { AdvsList } from "../features/advertisments/AdvsList";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className=" my-5">
            <h1>Advertisements</h1>
          </Col>
          <Col className="blue my-2">
            <AddAdvForm />
          </Col>
        </Row>
        <Row>
          <AdvsList />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
