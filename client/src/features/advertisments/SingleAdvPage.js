import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { EditAdvForm } from "./EditAdvForm";

export const SingleAdvPage = ({ match }) => {
  const [tog, setTog] = useState(false);
  const { advId } = match.params;
  const adv = useSelector((state) =>
    state.advs.advs.find((a) => String(a.id) === String(advId))
  );

  const toggle = () => setTog(!tog);

  if (!adv) {
    console.log("not found=>" + advId, adv);
    return (
      <section>
        <h2>Advertisement not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="adv mt-3">
        <h2>{adv.title}</h2>
        <p className="adv-content">{adv.valid_until}</p>
        <p className="adv-content">{adv.link}</p>
      </article>
      <Button onClick={toggle}>Edit</Button>

      {tog === false ? "" : <EditAdvForm advId={advId} />}
    </section>
  );
};
