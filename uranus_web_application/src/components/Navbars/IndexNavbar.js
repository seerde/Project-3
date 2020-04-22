import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const authNavDetails = props.user ? (
    <>
      <Nav navbar>
        <NavItem>
          <Link to="/MyInformationTeacher">
            <Button className="btn-round" color="danger" href="#pablo">
              {props.user.firstName}
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/logout">
            <Button className="btn-round" color="danger" href="#pablo">
              Logout
            </Button>
          </Link>
        </NavItem>
      </Nav>
    </>
  ) : (
    <>
      <Nav navbar>
        <NavItem>
          <Link to="/login">
            <Button className="btn-round" color="danger">
              Signin
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/register">
            <Button className="btn-round" color="danger">
              Signup
            </Button>
          </Link>
        </NavItem>
      </Nav>
    </>
  );

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
            title="view contact us"
          >
            Home
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/home#major"
            title="view all majors"
          >
            Majors
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/home#about"
            title="view about us"
          >
            About
          </NavbarBrand>
          <NavbarBrand data-placement="bottom" href="" title="view contact us">
            Contact
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/allcourse"
            title="view contact us"
          >
            Courses
          </NavbarBrand>
        </div>
        {authNavDetails}
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
