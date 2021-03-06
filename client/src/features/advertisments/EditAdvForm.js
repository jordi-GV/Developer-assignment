import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { advEdited } from "./advsSlice";

export const EditAdvForm = ({ advId }) => {
  console.log("MATCH", advId);
  const adv = useSelector((state) =>
    state.advs.advs.find(
      (advertisement) => String(advertisement.id) === String(advId)
    )
  );
  const [title, setTitle] = useState(adv.title);
  const [valid_until, setValidUntil] = useState(adv.valid_until);
  const [link, setLink] = useState(adv.link);
  const dispatch = useDispatch();
  const canSave =
  [title, valid_until, link].every(Boolean)

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onValidUntilChanged = (e) => setValidUntil(e.target.value);
  const onLinkChanged = (e) => setLink(e.target.value);

  const onSaveAdvClicked = async () => {
    if (canSave) {
      try {
        await dispatch(advEdited({ id: advId, title, valid_until, link }));
        window.location.reload();
      } catch (err) {
        console.error("Failed to edit the advertisement: ", err);
      }
    }
  };
  return (
    <section>
      <h3 className="mt-1 text-center">Edit Advertisement</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Advertisment: {title} </Form.Label>
          <Form.Control
            type="text"
            name="advTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>valid_until: {valid_until}</Form.Label>
          <Form.Control
            type="date"
            name="advValid"
            value={valid_until}
            onChange={onValidUntilChanged}
          />
          <Form.Text className="text-muted">valid_until</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link: {link}</Form.Label>
          <Form.Control
            type="text"
            value={link}
            onChange={onLinkChanged}
            placeholder="Enter link"
          />
        </Form.Group>

        <Button variant="primary" disabled={!canSave} onClick={onSaveAdvClicked}>
          Save Advertisement
        </Button>
      </Form>
    </section>
  );
};
