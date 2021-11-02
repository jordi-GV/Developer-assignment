import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

import { addNewAdv } from "./advsSlice";



const AddAdvForm = () => {
  const [title, setTitle] = useState("");
  const [valid_until, setValidUntil] = useState("");
  const [link, setLink] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onValidUntilChanged = (e) => setValidUntil(e.target.value);
  const onLinkChanged = (e) => setLink(e.target.value);

  const canSave =
    [title, valid_until, link].every(Boolean) && addRequestStatus === "idle";

    
  const onSaveAdvClicked = async () => {
    if (canSave) {
      try {
        await dispatch(addNewAdv({ title, valid_until, link })).unwrap();
        setTitle("");
        setValidUntil("");
        setLink("");
        window.location.reload();

   } catch (err) {
        console.error("Failed to save the advertisement: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      <h5 className="text-center">Add a New Advertisement</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formAdv">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="advTitle"
            value={title}
            onChange={onTitleChanged}
            placeholder="Enter advertisement"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBValidUntil">
          <Form.Label>valid_until</Form.Label>
          <Form.Control
            type="date"
            name="advValid"
            value={valid_until}
            onChange={onValidUntilChanged}
            placeholder="valid_until"
          />
          <Form.Text className="text-muted">valid_until</Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formLink"
        >
          <Form.Label>Link</Form.Label>
          <Form.Control type="text" placeholder="Enter link" 
          value={link}
          onChange={onLinkChanged}
          />
        </Form.Group>

        <Button
          className="mb-5"
          variant="warning"
          disabled={!canSave}
          onClick={onSaveAdvClicked}
        >
          Save 
        </Button>
      </Form>
    </section>
  );
};

export default AddAdvForm;
