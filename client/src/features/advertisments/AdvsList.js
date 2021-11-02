import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { selectAllAdvs, fetchAdvs } from "./advsSlice";

const AdvExcerpt = ({ adv }) => {
  return (
      <Card key={adv.id} className="">
        <Card.Header as="h5">{adv.title}</Card.Header>
        <Card.Body>
          <Card.Title>Valid until: {adv.valid_until}</Card.Title>
          <Card.Text>
            <a href={adv.link} target="_blank"  rel="noreferrer">
              {adv.link}
            </a>{" "}
          </Card.Text>
          <Link
            to={`/advs/${adv.id}`}
            className="btn btn-outline-warning btn-sm mx-5"
            variant="outline-danger"
          >
            View Adv
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
    content = advs.map((adv) => <AdvExcerpt key={adv.id} adv={adv} />);
  } else if (advStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="advs-list">
      <h2>Advs</h2>
      <Row xs={1} md={2} className="g-4">
        {content}
        </Row>
    </section>
  );
};
