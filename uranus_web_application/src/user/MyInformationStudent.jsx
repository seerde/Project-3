import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col ,Button } from "react-bootstrap";

export default class MyInformationStudent extends Component {
  state = {
    studentInfo: {},
  };

  componentDidMount() {
    console.log("user", this.props);
    Axios.get(`http://localhost:3005/api/auth/${this.props.user._id}`)
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
    return (
      <div>
        <Container>
          <Row className="mt-5">
            <Col md={5}>
              <h4>{this.state.studentInfo.firstName}</h4>
              <h4>{this.state.studentInfo.lastName}</h4>
              <h4>{this.state.studentInfo.email}</h4>
              <Button>Edit informations</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
