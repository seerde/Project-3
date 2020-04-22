import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import Axios from "axios";

export const Login = (props) => {
  const [login, setLogin] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  let onChangeInput = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };
  useEffect(() => {
    console.log(login);
  });

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3005/api/auth/login", login)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.userLogin();
          props.history.push("/home");
        } else {
           setIsLogin(true);
           setTimeout(() => {
             setIsLogin(false);
           }, 4000);
          console.log("email or password not correct");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isLogin && (
        <Alert variant={"danger"}>
          the email used . please change the email
        </Alert>
      )}
      {/* <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
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
        <span className="copyright">© 2020, made by Uranus Group</span>
      </div>
    </>
  );
};
