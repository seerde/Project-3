import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import Axios from "axios";

export default function Editpassword(props) {
  const [user, setUser] = useState({});
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("something went wrong!");

  let update = async () => {
    let token = localStorage.getItem("token");
    try {
      let passwordUpdated = await Axios.put(
        `http://localhost:3005/api/auth/updatepassword/${props.user._id}`,
        user,
        { headers: { "x-auth-token": token } }
      );
      if (passwordUpdated.data.isMatch) {
        props.logout();
      } else {
        setMessage(passwordUpdated.data.message);
        setRegister(true);
        setTimeout(() => {
          setRegister(false);
        }, 4000);
      }
    } catch (error) {}
  };

  let onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {register && <Alert variant={"danger"}>{message}</Alert>}
      <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Old Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Old Password"
                  name="oldPassword"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>New Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" onClick={update} block>
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
