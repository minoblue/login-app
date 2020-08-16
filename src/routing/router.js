import React, { useEffect } from "react";
import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter,
  useHistory,
  Router,
} from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import history from "../utils/history";
import LoginForm from "../containers/login.jsx";
import Home from "../containers/home.jsx";
import AdminHome from "../containers/adminHome.jsx";
import Books from "../containers/books.jsx";

import PrivateRoute from "../components/PrivateRoute";

// const PrivateRoute = ({ path, component: Component }) => {
//   return !localStorage.getItem("token") ? (
//     <Redirect to="/login" />
//   ) : (
//     <Route exact path={path} component={Component} />
//   );
// };

const RouterComponent = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/adminHome" component={AdminHome} />
        <PrivateRoute path="/books" component={Books} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
