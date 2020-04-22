import React from "react";
// import { Row, Container } from "reactstrap";
import "../../assets/css/main.css";

function DemoFooter() {
  return (
    <footer className="footer">
      <div className="site-footer">
        <ul className="social-icons">
          <a
            className="social-icon social-icon--github"
            href="https://git.generalassemb.ly/alyamaniedrees/uranus_web_application"
          >
            <i className="fa fa-github"></i>
          </a>
          <a className="social-icon social-icon--linkedin" href="https://www.linkedin.com/in/sarah-althobaiti-607420198/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="social-icon social-icon--twitter" href="https://twitter.com/hananalsahli02">
            <i className="fa fa-twitter"></i>
          </a>
        </ul>
        <span className="copyright">
          © 2020, made with
          <i className="fa fa-heart heart" /> by Uranus Group
        </span>
      </div>
    </footer>
  );
}

export default DemoFooter;
