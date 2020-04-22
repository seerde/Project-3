import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function Information(props) {
  const { firstName, lastName, email, major, education, userType} = props.user;
  let teacherCompond = userType === "teacher" ? (
    <>
      <Row className="my-information-row">
            <h4>Education: {education}</h4>
          </Row>
          <Row className="my-information-row">
            <h4>major: {major}</h4>
          </Row>
     </>
  ) : null 
  return (
    <div>
      <Row>
        <Col md={8}>
          <Row className="my-information-row">
            <h4>First Name: {firstName}</h4>
          </Row>
          <Row className="my-information-row">
            <h4>Last Name: {lastName}</h4>
          </Row>
          <Row className="my-information-row">
            <h4>Email: {email}</h4>
          </Row>
          {teacherCompond}
        </Col>
      </Row>
    </div>
  );
}
