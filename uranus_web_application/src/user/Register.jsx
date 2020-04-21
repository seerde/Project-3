import React, { useState } from "react";
import { SignUpTeacher } from "./SignUpTeacher";
import { SignUpStudent } from "./SignUpStudent";
import { Switch, Route } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";

export default function Register(props) {
  const [registerAs, setRegisterAs] = useState("student");

  function handleRegisterAs(e) {
    // console.log(e.target.value);
    setRegisterAs(e.target.value);
  }

  const display =
    // registerAs == "student" ? (
    //   <Route path="/registerStudent" component={SignUpStudent} />
    // ) : (
    //   <Route path="/registerTeacher" component={SignUpTeacher} />
    // );
    registerAs === "student" ? (
      <SignUpStudent history={props.history} />
    ) : (
      <SignUpTeacher history={props.history} />
    );
  return (
    <div>
      <Row className="justify-content-center mt-5">
        <Col className="justify-content-center" md={8}>
          <Button className="mr-3" value="student" onClick={handleRegisterAs}>
            Register As a Student
          </Button>

          <Button value="teacher" onClick={handleRegisterAs}>
            Register As a Teacher
          </Button>
        </Col>
      </Row>
      <Switch>{display}</Switch>
    </div>
  );
}
