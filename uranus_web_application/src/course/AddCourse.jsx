import React, { useState, useEffect } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
// import React, { Component } from 'react'
import Axios from "axios";


export const AddCourse = (props) => {
  const [course, setCourse] = useState({});
  let onChangeInput = ({ target: { name, value } }) => {
    setCourse({ ...course, [name]: value });
    console.log(course);
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");

    try {
      let courseAdded = await Axios.post(
        `http://localhost:3005/api/course/add`,
        course,
        { headers: { "x-auth-token": token } }
      );
      console.log(courseAdded);
      props.history.push("/MyInformationTeacher");
    } catch (err) {
      console.log(err);
    }
  };

  //api/course/add
  return (
    <div>
      {/* <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={4}>
                <Form.Label>Course name</Form.Label>
                <Form.Control
                  placeholder="Course name"
                  name="courseName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Major</Form.Label>
                <Form.Control
                  placeholder="major"
                  name="major"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  placeholder="Duration"
                  name="duration"
                  type="number"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Course name"
                  as="textarea"
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>
            <Button
              className="mt-2"
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
                <h3 className="title mx-auto">Add Course</h3>
                <Form className="register-form">
                  <label>Course Name</label>
                  <Input
                    placeholder="Course Name"
                    type="text"
                    name="courseName"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Major</label>
                  <Input
                    placeholder="major"
                    type="text"
                    name="major"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Duration</label>
                  <Input
                    placeholder="Duration"
                    name="duration"
                    type="number"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Description</label>
                  <Input
                    placeholder="Description"
                    as="textarea"
                    name="description"
                    onChange={(e) => onChangeInput(e)}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                    onClick={(e) => onSubmit(e)}
                  >
                    Add Course
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
    </div>
  );
};
