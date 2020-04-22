import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class MyCourse extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    this.loadCourses();
  }

  loadCourses = async () => {
    try {
      let courses = await Axios.get(
        `http://localhost:3005/api/course/user/${this.props.user._id}`
      );

      console.log("courses", courses.data.courses);
      this.setState({
        courses: courses.data.courses,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const cards = this.state.courses.map((course) => {
      return (
        <Col md={4}>
          <Card className="justify-content-center mb-5">
            {/* <Card.Img
              variant="top"
              src="https://place-hold.it/100x180"
            /> */}
            <Card.Body>
              <Card.Title>{course.courseName}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button
                style={{ backgroundColor: "#f5593d" }}
                as={Link}
                to={"/coruseDetail/" + course._id}
                variant="primary"
              >
                View
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row className="scrollable">{cards}</Row>
        </Container>
      </div>
    );
  }
}
