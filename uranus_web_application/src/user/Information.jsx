import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function Information(props) {
  const { firstName, lastName, email, major, education } = props.user;
  return (
    <div>
      <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={firstName} disabled />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} disabled />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} disabled />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEducation">
                <Form.Label>Education</Form.Label>
                <Form.Control type="text" value={education} disabled />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEducation">
                <Form.Label>major</Form.Label>
                <Form.Control type="text" value={major} disabled />
              </Form.Group>
            </Form.Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
