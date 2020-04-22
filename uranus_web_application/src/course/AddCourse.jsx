import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
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
      props.history.push("/MyInformationTeacher");
    } catch (err) {
      console.log(err);
    }
  };

  //api/course/add
  return (
    <div>
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
                    className="input-select"
                    placeholder="Course Name"
                    type="text"
                    name="courseName"
                    onChange={(e) => onChangeInput(e)}
                  />

                  <label>Major</label>
                  <select
                    className="input-select"
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
                  </select>

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
