import React, { Component } from "react";
import Axios from "axios";
import {
  Container,
  Tab,
  Tabs,
} from "react-bootstrap";
import { EditInformationsTeacher } from "./EditInformationsTeacher";
import Information from "./Information";
import Editpassword from "./Editpassword";
import MyCourse from "../course/MyCourse";
import { AddCourse } from "../course/AddCourse";
import "./user.css";

export default class MyInformationTeacher extends Component {
  state = {
    teacherInfo: {},
  };

  componentDidMount() {
    console.log("user", this.props);
    Axios.get(`http://localhost:3005/api/auth/${this.props.user._id}`)
      .then((res) =>
        this.setState({
          teacherInfo: res.data.user,
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
                <EditInformationsTeacher user={user} logout={logout} />{" "}
              </Tab>
              <Tab eventKey="#link3" title="Change Email and Password">
                <Editpassword user={user} logout={logout} />
              </Tab>
              <Tab eventKey="#link4" title="Show Courses">
                <MyCourse user={user} />
              </Tab>
              <Tab eventKey="#link5" title="Add Course">
                <AddCourse {...this.props} />
              </Tab>
            </Tabs>
          </Container>
          <span className="copyright">© 2020, made by Uranus Group</span>
        </div>
      </div>
    );
  }
}
