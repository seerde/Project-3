import React, { Component } from "react";
import Axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  Tab,
  Tabs,
  ListGroup,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { EditInformationsStudent } from "./EditInformationsStudent";
import Information from "./Information";
import Editpassword from "./Editpassword";
import MyCourse from "../course/MyCourse";
import { AddCourse } from "../course/AddCourse";
import "./user.css";

export default class MyInformationStudent extends Component {
  state = {
    studentInfo: {},
  };

  componentDidMount() {
    console.log("user", this.props);
    Axios.get(`/api/auth/${this.props.user._id}`)
      .then((res) =>
        this.setState({
          studentInfo: res.data.user,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/background2.jpg") + ")",
          display: "block",
        }}
      >
        <div className="dashboard">
          <h1 className="dashboard-title">Dashboard</h1>
          {/* <Container className="information__container">
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      My Information
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Update Information
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      Change Email and Password
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                      Show Courses
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <Information user={user} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <EditInformationsStudent user={user} logout={logout} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <Editpassword user={user} logout={logout} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <MyCourse user={user} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container> */}
          <Container className="information__container">
            <Tabs
              className="nav nav-tabs nav-justified mb-5"
              defaultActiveKey="#link4"
            >
              <Tab
                className="dashboard"
                eventKey="#link1"
                title="My Information"
              >
                <Information user={user} />
              </Tab>
              <Tab eventKey="#link2" title="Update Information">
                <EditInformationsStudent user={user} logout={logout} />
              </Tab>
              <Tab eventKey="#link3" title="Change Email and Password">
                <Editpassword user={user} logout={logout} />
              </Tab>
              <Tab eventKey="#link4" title="Show Courses">
                <MyCourse user={user} />
              </Tab>
            </Tabs>
          </Container>
          <span className="copyright">© 2020, made by Uranus Group</span>
        </div>
      </div>
    );
  }
}
