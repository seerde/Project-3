import React, { Component } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Jumbotron,
} from "react-bootstrap";
import Axios from "axios";
import "./course.css";
import { Link } from "react-router-dom";

export default class CourseDetails extends Component {
  state = {
    courseDet: {},
  };
 
  addCourse = () => {
    let token = localStorage.getItem("token");
    Axios.post(
      `http://localhost:3005/api/course/studentadd/${this.props.match.params.id}`,
      this.props.user,
      { headers: { "x-auth-token": token } }
    )

    .then((res) => {
      this.props.history.push("/MyInformationStudent");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  removeCourse = () => {
    let token = localStorage.getItem("token");
    Axios.delete(
      `http://localhost:3005/api/course/removeadd/${this.props.match.params.id}`,
      { headers: { "x-auth-token": token } }
    )

    .then((res) => {
      this.props.history.push("/MyInformationStudent");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  

  componentDidMount() {
    console.log(this.props);
    Axios.get(`/api/course/${this.props.match.params.id}`)

      .then((res) => {
        this.setState({
          courseDet: res.data.course,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.courseDet);
    const {
      courseName,
      major,
      link,
      description,
      duration,
      teacher,
      students,
      contents,
    } = this.state.courseDet;

    let editButtons = null;
    let addButton=null;
    let removeButton=null;
    if (this.props.user && teacher) {
      editButtons =
        teacher._id === this.props.user._id ? (
          <div className="course-details-button">
            <Button className="button" href={`/course/update/${this.props.match.params.id}`}>Edit Course</Button>
              
            <Button
              className="button"
              href={`/content/add/${this.props.match.params.id}`}
           >
              Add Content
            </Button>
          </div>
        ) : null 

           
        addButton = this.props.user.userType == "student" ? (<> 
           <Button onClick={this.addCourse}>Enroll</Button>
        </>):null

        removeButton = this.props.user.userType == "student" ? (<> 
           <Button onClick={this.removeCourse}>Remove</Button>
        </>):null
        
        
    }

    let contentsArray = [];
    if (contents) {
      contentsArray = contents.map((content) => {
        return (
          <Card as={Link} to={`/contentDetail/${content._id}`}>
            <Card.Body>{content.title}</Card.Body>
          </Card>
        );
      });
    }
    return (
      <div>
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("../assets/img/background2.jpg") + ")",
          }}
        >
          <Container className="course__container">
            <Jumbotron className="course__card2">
              {editButtons}
              {addButton}
              {removeButton}
              <h1>{courseName}</h1>
              <h3>Major</h3>
              <p>{major}</p>
              <h3>Course Description</h3>
              <p>{description}</p>
              <h3>Students</h3>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
              <h3>Course Contents</h3>
              <div>
                {contentsArray}
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
              </div>
            </Jumbotron>
          </Container>
          {/* <Card>
            <Card.Header>
              <h5>{this.state.courseDet.courseName}</h5>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> Description : {this.state.courseDet.description} </p>
                <cite title="Source Title">
                  <h8>Major : {this.state.courseDet.major}</h8>
                </cite>
              </blockquote>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    );
  }
}
