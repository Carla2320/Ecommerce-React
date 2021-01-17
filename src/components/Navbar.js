import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { startLogout } from "../actions/auth";
import { useTranslation } from "react-i18next";
import "../css/carrito.css"
export const Navbar = () => {
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation("common");
  const cambio = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(e.target.name);
    console.log(valor);
    i18n.changeLanguage(valor);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };
  const history = useHistory();

  const carrito = () => {
    history.push("/checkout");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2 className="navbar-brand">{t("navbar.ecommerce")}</h2>
      <div className="collapse navbar-collapse" id="navbarText">
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          exact
          to="/home"
        >
          {t("navbar.inicio")}
        </NavLink>

        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          exact
          to="/product"
        >
          {t("navbar.shop")}
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-item nav-link"
          exact
          to="/profile"
        >
          {t("navbar.perfil")}
        </NavLink>
        <div class="iconcarrito">
        <ShoppingCartIcon onClick={carrito}> </ShoppingCartIcon>
        </div>
        <button className="btn btn-outline-warning" onClick={handleLogout}>
          <span> {t("navbar.exit")} </span>
        </button>
      </div>
      <div>
        <select onChange={cambio}>
          <option value="es" name="es">
            Español
          </option>
          <option value="en" name="en">
            ingles
          </option>
        </select>
      </div>
    </nav>
  );
};
