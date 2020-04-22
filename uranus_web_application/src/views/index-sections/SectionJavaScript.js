import React from "react";
import { Container } from "reactstrap";
import { Row, Button, Card } from "react-bootstrap";
import "../../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SectionJavaScript(props) {
  function handleShowCourses(e) {
    props.filter(e.target.name);
    props.history.push("/allcourse");
  }
  return (
    <>
      <div
        id="major"
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/background2.jpg") + ")",
        }}
      >
        <div className="content-center">
          <div className="majors-container">
            <h1 className="title">Majors</h1>
            <Row>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Math</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="math"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Computer Science</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="computer science"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>History</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="history"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Chemistry</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="chemistry"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Psychology</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="psychology"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Sciences</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="sciences"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Design</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="design"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
              <Card className="majors-card">
                <Card.Body>
                  <Card.Title>Physics</Card.Title>
                  <Button
                    style={{ backgroundColor: "#f5593d" }}
                    name="physics"
                    onClick={handleShowCourses}
                    variant="primary"
                  >
                    Show More
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionJavaScript;
