import React, { useState, useEffect } from "react";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import Axios from "axios";

export const EditInformationsStudent = (props) => {
  const [user, setUser] = useState({}); // user info
  const [register, setRegister] = useState(false); // to show aleart

  let update = async () => {
    //    props.update(props.user);
    let token = localStorage.getItem("token");
    console.log(props);

    try {
      let userUpdated = await Axios.put(
        `/api/auth/updatestudent/${props.user._id}`,
        user,
        { headers: { "x-auth-token": token } }
      );
      console.log(userUpdated);
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
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
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
};
