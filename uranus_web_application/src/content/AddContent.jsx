import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
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
        `http://localhost:3005/api/content/add/${props.match.params.id}`,
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
        <div className="filter" />
        <Container>
          <Col className="ml-auto mr-auto" lg="4">
            <Card className="card-register ml-auto mr-auto">
              <h3 className="title mx-auto">Add Content</h3>
              <Form className="register-form">
                <Row>
                  <Col>
                    <Form.Row>
                      <Col>
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
                          style={{ height: "230px" }}
                          name="description"
                          onChange={(e) => onChangeInput(e)}
                        />
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
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
            </Card>
          </Col>
        </Container>
      </div>
    </div>
  );
};
