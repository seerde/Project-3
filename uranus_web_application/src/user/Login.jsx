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
    Axios.post(`/api/auth/login`, login)
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
                <h3 className="title mx-auto" style={{ fontSize: "34px" }}>
                  Welcome
                </h3>
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
        <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()}, made by Uranus Group</h6>
        </div>
      </div>
    </>
  );
};
