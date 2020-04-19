import React, { useState } from 'react';
import Home from "./home/Home";
import Register from "./auth/Register"
import Login from "./auth/Login"
import ErrorPage from "./ErrorPage"
import { Switch, Route, Redirect } from "react-router-dom"
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/register" component={Register} />
        <Route
          path="/login"
          render={() =>
            isAuth ? (
              <Redirect to="/allmovie" />
            ) : (
                <Login login={this.loginHandler} />
              )
          }
        />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
