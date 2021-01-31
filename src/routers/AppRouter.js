import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen";
import { RegisterUser } from "../components/registerUser";

import { DashboardRoutes } from "./DashboardRoutes";
import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Support } from "../components/Support";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { cheking, usuario } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (cheking) {
    return <h5>Wait...</h5>;
  }

  const suppModal = async () => {
    const r = await document.getElementsByClassName('applozic-launcher');
    console.log("Acá",r);
  }

  suppModal();

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={!!usuario}
        />
        <PublicRoute
          exact
          path="/registro"
          component={RegisterUser}
          isAuthenticated={!!usuario}
        />
        <PrivateRoute
          path="/"
          component={DashboardRoutes}
          isAuthenticated={!!usuario}
        />
      </Switch>
      <Support />
    </Router>
  );
};
