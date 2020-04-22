import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import Home from "./home/Home";
import Register from "./user/Register";
import Navb from "./navbar/Navb";
import PrivateRoute from "./PrivateRoute";
import Logout from "./user/Logout";
import MyInformationTeacher from "./user/MyInformationTeacher";
import MyInformationStudent from "./user/MyInformationStudent";
import { Login } from "./user/Login.jsx";
import { SignUpTeacher } from "./user/SignUpTeacher";
import { SignUpStudent } from "./user/SignUpStudent";
import { AddCourse } from "./course/AddCourse";
import { EditCourse } from "./course/EditCourse";
import AllCourse from "./course/AllCourse";
import CourseDetails from "./course/CourseDetails";
import ContentDetails from "./content/ContentDetails";
import { AddContent } from "./content/AddContent";
import { EditInformationsTeacher } from "./user/EditInformationsTeacher";
import IndexNavbar from "./components/Navbars/IndexNavbar.js";

// CSS assets
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";

export default class App extends Component {
  // const [isAuth, setIsAuth] = useState(false);
  state = {
    user: null,
    isLogin: false,
    message: "",
    filter: "all",
  };

  componentDidMount() {
    this.userLogin();
  }

  userLogin = () => {
    if (localStorage.token) {
      let token = localStorage.token;
      let user = jwt_decode(token, "SECRET").user;
      this.setState({
        user: user,
        isLogin: true,
      });
    } else {
      this.setState({
        user: null,
        isLogin: false,
      });
    }
  };

  logoutHandler = () => {
    // e.preventDefault();
    //delete tokem and reset state
    localStorage.removeItem("token");
    this.setState({
      isLogin: false,
      user: null,
      message: null,
    });
  };

  filterHandler = (e) => {
    this.setState({ filter: e });
  };

  render() {
    const { isLogin, message, user } = this.state;

    const errorMessage = message ? (
      <Alert variant="danger">{message}</Alert>
    ) : null;

    return (
      <div>
        {/* <Navb user={user} logout={this.logoutHandler} /> */}
        <IndexNavbar user={user} />
        {errorMessage}
        <Switch>
          {/* !important // add exact to Routes // */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route
            path="/home"
            render={(props) => (
              <Home filter={this.filterHandler} user={user} {...props} />
            )}
          />
          <Route path="/course/add" component={AddCourse} />
          <Route path="/course/update/:id" component={EditCourse} />
          <Route path="/register" component={Register} />
          <Route path="/allcourse">
            <AllCourse filter={this.state.filter} />
          </Route>
          <Route
            path="/coruseDetail/:id"
            render={(props) => <CourseDetails user={user} {...props} />}
          />
          <Route
            path="/contentDetail/:id"
            render={(props) => <ContentDetails {...props} />}
          />
          <Route
            path="/content/add/:id"
            render={(props) => <AddContent {...props} />}
          />
          <PrivateRoute
            exact
            path="/MyInformationTeacher"
            isLogin={isLogin}
            user={user}
            logout={this.logoutHandler}
            redirectTo="/login"
            component={MyInformationTeacher}
          />
          <PrivateRoute
            exact
            path="/MyInformationStudent"
            isLogin={isLogin}
            user={user}
            logout={this.logoutHandler}
            redirectTo="/login"
            component={MyInformationStudent}
          />
          <PrivateRoute
            exact
            path="/login"
            isLogin={!isLogin}
            userLogin={this.userLogin}
            redirectTo="/home"
            component={Login}
          />
          <PrivateRoute
            exact
            path="/logout"
            isLogin={isLogin}
            logout={this.logoutHandler}
            redirectTo="/login"
            component={Logout}
          />

          {/* <Route path="/registerTeacher" component={SignUpTeacher} /> */}
          {/* <Route path="/registerStudent" component={SignUpStudent} /> */}
          {/* <Route path="/Allmovie/:id" component={OneMovei} /> */}
        </Switch>
      </div>
    );
  }
}
