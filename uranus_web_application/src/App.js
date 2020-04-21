import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import Home from "./home/Home";
import Register from "./user/Register";
import Navb from "./navbar/Navb";
import PrivateRoute from "./PrivateRoute";
import Logout from "./user/Logout";
import MyInformationTeacher from "./user/MyInformationTeacher";
import { Login } from "./user/Login.jsx";
import { SignUpTeacher } from "./user/SignUpTeacher";
import { SignUpStudent } from "./user/SignUpStudent";
import { AddCourse } from "./course/AddCourse";
import { EditInformationsTeacher } from "./user/EditInformationsTeacher";

export default class App extends Component {
  // const [isAuth, setIsAuth] = useState(false);
  state = {
    user: null,
    isLogin: false,
    message: "",
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

  render() {
    const { isLogin, message, user } = this.state;

    const errorMessage = message ? (
      <Alert variant="danger">{message}</Alert>
    ) : null;

    return (
      <div>
        <Navb user={user} logout={this.logoutHandler} />
        {errorMessage}
        <Switch>
          <Route path="/home" render={() => <Home name={""} />} />
          <Route path="/course/add" render={() => <AddCourse />} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            exact
            path="/MyInformationTeacher"
            isLogin={isLogin}
            user={user}
            logout={this.logoutHandler}
            component={MyInformationTeacher}
          />
          <PrivateRoute
            exact
            path="/EditInformationsTeacher"
            isLogin={isLogin}
            user={user}
            logout={this.logoutHandler}
            component={EditInformationsTeacher}
          />
          <PrivateRoute
            exact
            path="/login"
            isLogin={!isLogin}
            userLogin={this.userLogin}
            component={Login}
          />
          <PrivateRoute
            exact
            path="/logout"
            isLogin={isLogin}
            logout={this.logoutHandler}
            component={Login}
          />

          {/* <Route path="/registerTeacher" component={SignUpTeacher} /> */}
          {/* <Route path="/registerStudent" component={SignUpStudent} /> */}
          {/* <Route path="/Allmovie/:id" component={OneMovei} /> */}
        </Switch>
      </div>
    );
  }
}
