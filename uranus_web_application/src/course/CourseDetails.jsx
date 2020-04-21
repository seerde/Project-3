import React, { Component } from 'react'
import { Container,Form, Row, Col, Button,Card} from "react-bootstrap";
import Axios from "axios";



export default class CourseDetails extends Component {
    state = {
        courseDet: {},
      };

      componentDidMount() {
        console.log(this.props);
        Axios.get(`http://localhost:3005/api/course/${this.props.match.params.id}`)
         
          .then((res) => {
            this.setState({
                courseDet: res.data.course,
            })
        })
         
          .catch((err) => {
            console.log(err);
          });
      }
      
    render() {
        console.log(this.state.courseDet)
        return (
            <div>
            <Card>
<Card.Header><h5>{this.state.courseDet.courseName}</h5></Card.Header>
<Card.Body>
<blockquote className="blockquote mb-0">
  <p>
    {' '}
    Description : {this.state.courseDet.description}{' '}
  </p>
  <cite title="Source Title"><h8>Major : {this.state.courseDet.major}</h8></cite>
  
 
</blockquote>
</Card.Body>
</Card>
        </div>
        )
    }
}
