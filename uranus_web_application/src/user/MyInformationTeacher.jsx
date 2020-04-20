import React, { Component } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default class MyInformationTeacher extends Component {
                 state = {
                   teacherInfo: {},
                 };

                 componentDidMount() {
                    console.log(this.props.user);
                   Axios.get(
                     `http://localhost:3005/api/auth/${this.props.user.id}`
                   )
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
                           </Col>
                         </Row>
                       </Container>
                     </div>
                   );
                 }
               }
