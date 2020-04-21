import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";

export const AddContent = (props) => {
  const [content, setContent] = useState({});

  let onChangeInput = ({ target: { name, value } }) => {
    setContent({
      ...content,
      [name]: value,
    });
    console.log(content);
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");

    try {
      let contentAdded = await Axios.post(
        `http://localhost:3005/api/content/add/${props.course._id}`,
        content,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(contentAdded);
    } catch (err) {
      console.log(err);
    }
  };

  //api/content/add
  return (
    <div>
      <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={4}>
                <Form.Label>Content Title</Form.Label>
                <Form.Control
                  placeholder="Content Title"
                  name="title"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Content Description</Form.Label>
                <Form.Control
                  placeholder="Content Description"
                  as="textarea"
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col md={4}>
                <Form.Label>Video Link</Form.Label>
                <Form.Control
                  placeholder="Video Link"
                  name="link"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Add Content
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
