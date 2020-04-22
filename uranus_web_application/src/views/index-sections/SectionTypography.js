import React from "react";
import { Container } from "reactstrap";
import "../../assets/css/main.css";


function SectionTypography() {
  return (
    <>
      <div
        id="about"
        className="page-header section-dark"
        style={{
          backgroundColor: "#595959",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="about-container">
              <h1 className="title">About</h1>
              <h1 className="about-text">
                Our purpose is Increased access to <br></br> high-quality education for
                everyone, everywhere and enhance teaching and learning online
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;
