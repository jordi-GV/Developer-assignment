import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { EditAdvForm } from "./EditAdvForm";
import { useDispatch, useSelector } from "react-redux";

import { deleteAdv } from "./advsSlice";

export const SingleAdvPage = ({ match }) => {
  const dispatch = useDispatch();
  const [toggleForm, setTog] = useState(false);
  const { advId } = match.params;
  const advertisement = useSelector((state) =>
    state.advs.advs.find((a) => String(a.id) === String(advId))
  );

  const onDeleteClicked = async (advId) => {
    if (advId) {
      try {
        await dispatch(deleteAdv(advId)).unwrap();
        window.location.reload();
      } catch (err) {
        console.error("Failed to delete the advertisement: ", err);
      }
    }
  };

  const toggle = () => setTog(!toggleForm);

  if (!advertisement) {
    console.log("not found=>" + advId, advertisement);
    return (
      <section>
        <h6 className="my-5">Advertisement deleted or not found!</h6>
      </section>
    );
  }
  return (
    <section>
      <article className="advertisement mt-3">
        <h2>{advertisement.title}</h2>
        <p>Title: {advertisement.title}</p>
        <p>Valid until: {advertisement.valid_until}</p>
        <p>Link: {advertisement.link}</p>
      </article>
      <Button className="m-2 btn-sm"  onClick={toggle}>
        Edit
      </Button>
      <Button
        className="m-2 btn-sm"
        variant="danger"
        onClick={() => dispatch(onDeleteClicked(advertisement.id))}
      >
        Delete
      </Button>

      {toggleForm === false ? "" : <EditAdvForm advId={advId} />}
    </section>
  );
};
