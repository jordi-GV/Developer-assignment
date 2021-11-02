import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { EditAdvForm } from "./EditAdvForm";



export const SingleAdvPage = ({ match }) => {
  const [toggleForm, setTog] = useState(false);
  const { advId } = match.params;
  const advertisement = useSelector((state) =>
    state.advs.advs.find((a) => String(a.id) === String(advId))
  );

  const toggle = () => setTog(!toggleForm);

  if (!advertisement) {
    console.log("not found=>" + advId, advertisement);
    return (
      <section>
        <h2>Advertisement not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="advertisement mt-3">
        <h2>{advertisement.title}</h2>
        <p>Title: {advertisement.title}</p>
        <p >Valid until: {advertisement.link}</p>
        <p >Link: {advertisement.link}</p>
      </article>
      <Button onClick={toggle}>Edit</Button>

      {toggleForm === false ? "" : <EditAdvForm advId={advId} />}
    </section>
  );
};
