import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import Axios from "axios";

export const SignUpStudent = (props) => {
  const [user, setUser] = useState({}); // user info
  const [register, setRegister] = useState(false); // to show aleart

  //to add the input inside user
  let onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // to add the user info to database
  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:3005/api/auth/registerStudent`, user)
      .then((res) => {
        if (res.data.register) {
          console.log(props.history);
          props.history.push("/login");
        } else {
          setRegister(true);
          setTimeout(() => {
            setRegister(false);
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
  };
  //==================================================
  return (
    <>
      {register && (
        <Alert variant={"danger"}>
          the email used . please change the email
        </Alert>
      )}
      {/* <Form className="mt-5">
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
            </Form.Row>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form> */}

      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/background2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form">
                  <label>First Name</label>
                  <Input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Last Name</label>
                  <Input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                  >
                    SignUp
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Uranus Group
          </h6>
        </div>
      </div>
    </>
  );
};
