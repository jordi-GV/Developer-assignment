import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { selectAllAdvs, fetchAdvs, deleteAdv } from "./advsSlice";


function tableAdvertisements(advs, dispatch) {
  const onDeleteClicked = async (idAdv) => {
    if (idAdv) {
      try {
        await dispatch(deleteAdv(idAdv)).unwrap();
        window.location.reload();
      } catch (err) {
        console.error("Failed to delete the advertisement: ", err);
      }
    }
  };

  return advs.map((adv) => (
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
                onClick={() => dispatch(onDeleteClicked(adv.id))}
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
}

function TableAdvs() {
  const dispatch = useDispatch();
  const advs = useSelector(selectAllAdvs);

  const advStatus = useSelector((state) => state.advs.status);
  const error = useSelector((state) => state.advs.error);

  useEffect(() => {
    if (advStatus === "idle") {
      dispatch(fetchAdvs);
    }
  }, [advStatus, dispatch]);

  let content;

  if (advStatus === "loading") {
    content = <p>"Loading..." </p>;
  } else if (advStatus === "succeeded" && advs) {
    content = tableAdvertisements(advs, dispatch);
  } else if (advStatus === "failed") {
    content = <div>{error}</div>;
  }
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
          <tbody>{tableAdvertisements(advs, dispatch)}</tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}
export default TableAdvs;
