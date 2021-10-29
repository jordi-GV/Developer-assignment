import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
 import * as actions from "../redux/ActionCreators";

const tableAdvertisements = (advertisements, dispatch) => {
  return advertisements.map((adv) => (
    <tr key={adv.id}>
      <td>{adv.id}</td>
      <td>{adv.title}</td>
      <td>{adv.valid_until}</td>
      <td>
        <Container>
          <Row>
            <Col sm={11}>
              <a href={adv.link} target="_blank" rel="noreferrer">
                {adv.link}
              </a>
            </Col>
            <Col sm={1}>

              <span
                variant="outline-danger"
                onClick={() => dispatch(actions.deleteAdvertisement(adv.id))}
              >
                <img
                  src="/assets/images/icons8-papelera.png"
                  alt="icon"
                  className="icon"
                />
              </span>
            </Col>
          </Row>
        </Container>
      </td>
    </tr>
  ));
};

function Home() {
  const dispatch = useDispatch();
  const adv = useSelector((state) => state.advertisements)
  return (
    <React.Fragment>
      <Container>
        <h6 className="mt-5">Advertisements Table</h6>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>valid_until</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>{tableAdvertisements(adv, dispatch)}</tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default Home;
