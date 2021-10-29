import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {  useDispatch } from 'react-redux'

import {deleteAdvertisement} from '../redux/ActionCreators';


const tableAdvertisements = (advertisements, dispatch) => {

  return advertisements.map((adv) => (
    <tr key={adv.id}>
      <td>{adv.id}</td>
      <td>{adv.title}</td>
      <td>{adv.valid_until}</td>
      <td>
        <Container>
          <Row>
            <Col sm={8}><a href={adv.link} target="_blank" rel="noreferrer">{adv.link}</a></Col>
            <Col sm={4}>
              <span variant="outline-primary" className="mx-2">
                <img
                  src="/assets/images/icons8-editar-24.png"
                  alt="icon"
                  className="icon"
                />
              </span>
              <span
                variant="outline-danger"
                onClick={() => dispatch(deleteAdvertisement(adv.id))}
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

function Home({advertisements}) {
  const dispatch = useDispatch();
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
        <tbody>{tableAdvertisements(advertisements, dispatch)}</tbody>
      </Table>
      </Container>
    </React.Fragment>
  );
}

export default Home;
