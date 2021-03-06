import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { Navbar } from "../components/Navbar";
import { Profile } from "../components/Profile";
import RegisterProduct from "../components/registerProduct";
import ProductosLista from "../containers/ProductosLista";
import Pago from "../components/Pago";
import Checkout from "../components/Checkout";
import DetalleProducto from "../components/DetalleProducto";
import HorizontalLabelPositionBelowStepper from "../components/Step";

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
          <Route
            exact
            path="/detalleproducto/:id"
            component={DetalleProducto}
          />
          <Route exact path="/pago" component={Pago} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/step" component={ HorizontalLabelPositionBelowStepper }/>
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
