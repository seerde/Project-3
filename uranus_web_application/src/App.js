import React, { Component } from "react";
import Home from "./home/Home";
import { Login } from "./user/Login.jsx";
import { SignUpTeacher } from "./user/SignUpTeacher";
import { SignUpStudent } from "./user/SignUpStudent";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";

export default class App extends Component {
  // const [isAuth, setIsAuth] = useState(false);
  state = {
    user: null,
    isLogin: false,
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
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" render={() => <Home name={""} />} />

          <Route
            path="/login"
            render={(props) => <Login {...props} userLogin={this.userLogin} />}
          />
          <Route path="/registerTeacher" component={SignUpTeacher} />
          <Route path="/registerStudent" component={SignUpStudent} />
          {/* <Route path="/Allmovie/:id" component={OneMovei} /> */}
          {this.state.isLogin ? (
            <>
              {" "}
              {/* <Route exact path="/Allmovie" component={Allmovies} />{" "} */}
            </>
          ) : (
            <>
              {" "}
              <Redirect to="/login" />{" "}
            </>
          )}
        </Switch>
      </div>
    );
  }
}
