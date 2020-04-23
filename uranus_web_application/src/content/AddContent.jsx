import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Container,
  Card,
  Jumbotron,
} from "react-bootstrap";
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
    console.log("content", content);
    try {
      let contentAdded = await Axios.post(
        `/api/content/add/${props.match.params.id}`,
        content,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(contentAdded);
      props.history.push(`/coruseDetail/${props.match.params.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  //api/content/add
  return (
    <div>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/background2.jpg") + ")",
        }}
      >
        <Container className="course__container">
          <Jumbotron className="course__card2">
            <Form className="mt-5">
              <Row className="justify-content-center mt-5">
                <Col md={8}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>Content Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Content Title"
                        name="title"
                        onChange={(e) => onChangeInput(e)}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Content Description</Form.Label>
                      <Form.Control
                        placeholder="Content Description"
                        as="textarea"
                        style={{ height: "230px" }}
                        name="description"
                        onChange={(e) => onChangeInput(e)}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEducation">
                      <Form.Label>Video Link</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Video Link"
                        name="link"
                        onChange={(e) => onChangeInput(e)}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    className="button"
                    variant="primary"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                  >
                    Add Content
                  </Button>
                </Col>
              </Row>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    </div>
  );
};
