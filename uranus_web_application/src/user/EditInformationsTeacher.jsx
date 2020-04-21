import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export const EditInformationsTeacher = (props) => {
  const [user, setUser] = useState({}); // user info
  const [register, setRegister] = useState(false); // to show aleart

  let update = async () => {
    //    props.update(props.user);
    let token = localStorage.getItem("token");
    console.log(props);

    try {
      let userUpdated = await Axios.put(
        `http://localhost:3005/api/auth/updateteachr/${props.user._id}`,
        user,
        { headers: { "x-auth-token": token } }
      );
      console.log(userUpdated);
      props.history.push("/logout");
      props.logout();
    } catch (err) {
      console.log(err);
    }
  };

  //to add the input inside user
  let onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  //==================================================
  return (
    <>
      {register && (
        <Alert variant={"danger"}>the email used . plz change the email</Alert>
      )}
      <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={6}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder="First name"
                  name="firstName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  placeholder="Last name"
                  name="lastName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Education</Form.Label>
                <Form.Control
                  placeholder="Education"
                  name="education"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" onClick={update} block>
              Update Information
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
