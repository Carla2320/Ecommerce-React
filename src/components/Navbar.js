import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import { useStateValue } from "../reducers/StateProvider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from "react-redux";
import { sesion } from '../actions/sesion';
export const Navbar = () => {
  var dateFormat = require("dateformat");
  const dispatch = useDispatch();
  const [{ basket }] = useStateValue();
  const history = useHistory();
  const [t, i18n] = useTranslation("common");
  const cambio = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(e.target.name);
    console.log(valor);
    i18n.changeLanguage(valor);
  };
  const cedula=localStorage.getItem('cedula');
  const fecha_incial=localStorage.getItem('token-init-date');
  const fecha_final=new Date().toLocaleString();
  const token=localStorage.getItem('token');
  
  var Currentdate=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
console.log("Currentdate");  //2020-05-07 22:58:11
  console.log(fecha_incial);

  const handleLogout = () => {
    dispatch(startLogout());
    if (basket.length===0) {
      const transaccion=null;
      console.log("vacio");
      dispatch(sesion(token,cedula,Currentdate,Currentdate,transaccion,10));
            
    }else{
      console.log("lleno");
      const transaccion=0;
      dispatch(sesion(token,cedula,Currentdate,Currentdate,transaccion,10));
    }
  };
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
        
        <button className="btn btn-outline-warning" onClick={handleLogout}>
          <span> {t("navbar.exit")} </span>
        </button>
      </div>
      <div className="traduce">
        <select onChange={cambio}>
          <option value="es" name="es">
            Español
          </option>
          <option value="en" name="en">
            ingles
          </option>
        </select>
        
       
      </div>
      <div class="iconcarrito">
        <ShoppingCartIcon onClick={carrito}> </ShoppingCartIcon>
        </div>
        <span >{basket?.length}</span>
    </nav>
  );
};
