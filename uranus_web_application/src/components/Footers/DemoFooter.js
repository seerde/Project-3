import React from "react";
import "../../assets/css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DemoFooter() {
  return (
    <footer className="footer">
      <div className="site-footer">
        <ul className="social-icons">
          <a
            className="social-icon social-icon--github"
            href="https://git.generalassemb.ly/alyamaniedrees/uranus_web_application"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="social-icon social-icon--linkedin"
            href="https://www.linkedin.com/in/sarah-althobaiti/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            className="social-icon social-icon--twitter"
            href="https://twitter.com/hananalsahli02
"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
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
