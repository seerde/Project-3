import React, { Component } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class AllCourse extends Component {
  state = {
    allcourse: [],
    filter: "",
  };

  componentDidMount() {
    this.setState({ filter: this.props.filter });
    Axios.get(`/api/course/`)
      .then((res) =>
        this.setState({
          allcourse: res.data.courses,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.allcourse);
    let allcoursese = this.state.allcourse.map((course) => {
      if (this.state.filter === "all") {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{course.courseName}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button
                style={{ backgroundColor: "#f5593d", width: "10rem" }}
                as={Link}
                to={"/coruseDetail/" + course._id}
                variant="primary"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        );
      } else {
        return course.major === this.state.filter ? (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{course.courseName}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button
                style={{ backgroundColor: "#f5593d", width: "10rem" }}
                as={Link}
                to={"/coruseDetail/" + course._id}
                variant="primary"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        ) : null;
      }
    });
    return (
      <div>
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("../assets/img/background2.jpg") + ")",
          }}
        >
          <Container className="mt-5">
            <Row className="mt-5 justify-content-center">{allcoursese}</Row>
          </Container>
        </div>
      </div>
    );
  }
}
