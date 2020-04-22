import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import "./user.css";


export default function Information(props) {
  const { firstName, lastName, email, major, education, userType} = props.user;
  let teacherCompond =
    userType === "teacher" ? (
      <>
        <tr>
          <td>Education</td>
          <td>{education}</td>
        </tr>
        <tr>
          <td>Major</td>
          <td>{major}</td>
        </tr>
      </>
    ) : null; 
  return (
    <div>
        <Row className="justify-content-center">
          <Col md={8}>
            <Table>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{email}</td>
                </tr>
                {teacherCompond}
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
    </div>
  );
}
