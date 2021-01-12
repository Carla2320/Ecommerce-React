import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../components/homeScreen";
import { Navbar } from "../components/Navbar";
import { Profile } from "../components/Profile";
import RegisterProduct from "../components/registerProduct";
import ProductosLista from "../containers/ProductosLista";
import Pago from "../components/Pago";
import Checkout from "../components/Checkout";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/product" component={RegisterProduct} />
          <Route exact path="/visualizar" component={ProductosLista} />
          <Route exact path="/pago" component={Pago} />
          <Route exact path="/checkout" component={Checkout} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
