import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../assets/css/main.css";
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
      props.history.push("/MyInformationTeacher"); //*****************************************/
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
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  className="input-select"
                  placeholder="Course Name"
                  type="text"
                  name="courseName"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Major</Form.Label>
                <Form.Control
                  className="input-select"
                  as="select"
                  custom
                  name="major"
                  onChange={(e) => onChangeInput(e)}
                >
                  <option value="math">Math</option>
                  <option value="computer science">Computer Science</option>
                  <option value="history">History</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="psychology">Psychology</option>
                  <option value="sciences">Sciences</option>
                  <option value="design">Design</option>
                  <option value="physics">Physics</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEducation">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  placeholder="Duration"
                  name="duration"
                  type="number"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEducation">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Description"
                  as="textarea"
                  name="description"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Button
                className="button"
                color="danger"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                Add Course
              </Button>
            </Form.Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
