import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { selectAllAdvs, fetchAdvs } from "./advsSlice";


const AdvExcerpt = ({ advertisement }) => {
  return (
      <Card key={advertisement.id} className="">
        <Card.Header as="h5">{advertisement.title}</Card.Header>
        <Card.Body>
          <Card.Title>Valid until: {advertisement.valid_until}</Card.Title>
          <Card.Text>
            <a href={advertisement.link} target="_blank"  rel="noreferrer">
              {advertisement.link}
            </a>{" "}
          </Card.Text>
          <Link
            to={`/advs/${advertisement.id}`}
            className="btn btn-outline-warning btn-sm mx-5"
            variant="outline-danger"
          >
            View advertisement
          </Link>
        </Card.Body>
      </Card>

  );
};


export const AdvsList = () => {
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
    content = advs.map((advertisement) => <AdvExcerpt key={advertisement.id} advertisement={advertisement} />);
  } else if (advStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="advs-list">
      <Row xs={1} md={3} className="g-4">
        {content}
        </Row>
    </section>
  );
};
