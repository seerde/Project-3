import React, { Component } from 'react'
import { Container,Form, Row, Col, Button,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class AllCourse extends Component {
  state = {
    allcourse: [],
}

componentDidMount() {
  Axios.get(`http://localhost:3005/api/course/`)
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
    console.log(this.state.allcourse)
    let allcoursese = this.state.allcourse.map(course => {
    return <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>{course.courseName}</Card.Title>
      <Card.Text>
        {course.description}
      </Card.Text>
      <Button as={Link} to={"/course/"+ course._id} variant="primary">View</Button>
    </Card.Body>
  </Card>
    })
    return (
      <div>
         <Container className="mt-5">
         <Row className="mt-5 justify-content-center">

        

         {allcoursese}
        

         </Row>
          
         </Container>
      </div>
    )
  }
}
