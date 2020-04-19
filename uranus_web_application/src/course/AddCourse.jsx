import {Form,Row,Col,Button} from 'react-bootstrap'
import React, { Component } from 'react'
export default class AddCourse extends Component {
    render() {
        //api/course/add
        return (
            <div>
               <Form className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Form.Row>
              <Col md={6}>
                <Form.Label>Course name</Form.Label>
                <Form.Control
                  placeholder="Course name"
                  name="courseName"
                //   onChange={(e) => onChangeInput(e)}
                />
              </Col>
              <Col md={6}>
                <Form.Label>Major</Form.Label>
                <Form.Control
                  placeholder="major"
                  name="major"
                  //onChange={(e) => onChangeInput(e)}
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Label>Description</Form.Label>
                {/* <Form.Control
                  placeholder="Course name"
                  name="courseName"
                //   onChange={(e) => onChangeInput(e)}
                /> */}
                  <textarea class="form-control" name="courseName" aria-label="With textarea"></textarea>

              </Col>
            </Form.Row>
            <Button className="mt-2"
              variant="primary"
              type="submit"
              //onClick={(e) => onSubmit(e)}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
                
            </div>
        )
    }
}
