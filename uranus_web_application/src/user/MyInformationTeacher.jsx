import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col md={5}>
              <h4>{this.state.teacherInfo.firstName}</h4>
              <h4>{this.state.teacherInfo.lastName}</h4>
              <h4>{this.state.teacherInfo.email}</h4>
              <h4>{this.state.teacherInfo.major}</h4>
              <h4>{this.state.teacherInfo.education}</h4>
              <Button as={Link} to={"/EditInformationsTeacher"}>
                Edit informations
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
