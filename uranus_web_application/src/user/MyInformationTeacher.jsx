import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Button, Tab, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditInformationsTeacher } from "./EditInformationsTeacher";
import Information from "./Information";
import Editpassword from "./Editpassword";
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
      <div>
        <h1 className="dashboard">Dashboard</h1>
        <Container className="information__container">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    User Information
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Update Information
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    Update Email and Password
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Information user={user} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <EditInformationsTeacher user={user} logout={logout} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <Editpassword user={user} logout={logout} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
