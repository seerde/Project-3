import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
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
      <Form className="mt-5">
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
      </Form>
    </div>
  );
};
