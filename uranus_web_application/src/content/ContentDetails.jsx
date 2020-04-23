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
import "./content.css";

export default class ContentDetails extends Component {
  state = {
    content: {
      title: "",
      link: "",
      description: "",
    },
  };
  componentDidMount() {
    Axios.get(`/api/content/show/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          content: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { title, link, description } = this.state.content;
    return (
      <div>
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("../assets/img/background2.jpg") + ")",
          }}
        >
          <Container className="content__container">
            <Jumbotron className="content__card">
              {/* {editButtons} */}
              <h1 style={{ textAlign: "center" }}>{title}</h1>
              <h3>Content Description</h3>
              <p>{description}</p>
              <h3>Video</h3>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/sBws8MSXN7A"
              ></iframe>
            </Jumbotron>
          </Container>
        </div>
      </div>
    );
  }
}
