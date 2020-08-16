import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("Inside private route");
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   console.log("Inside private route effect");
  //   // let token = localStorage.getItem("token");
  //   if (user) {
  //     // let tokenExpiration = localStorage.getItem("tokenExp");
  //     // let dateNow = new Date();

  //     // if (tokenExpiration < dateNow.getTime() / 1000) {
  //     //   setIsAuthenticated(false);
  //     // } else {
  //     //   setIsAuthenticated(true);
  //     // }
  //     setIsAuthenticated(true);
  //   } else {
  //     console.log("Inside else");
  //     setIsAuthenticated(false);
  //   }
  //   // eslint-disable-next-line
  // });

  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        !user ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
