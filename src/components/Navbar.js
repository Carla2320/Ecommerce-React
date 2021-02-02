import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import { useStateValue } from "../reducers/StateProvider";
import { useDispatch } from "react-redux";
import {UserContext} from "../hooks/UseContext"
import { updateDate, sesion } from "../actions/sesion";
export const Navbar = () => {
  const { color,setColor } = useContext(UserContext);
  const handleClick = () => {
    setColor(!color);
  };

  const dispatch = useDispatch();
  var [{ basket }] = useStateValue();
  const history = useHistory();
  const [t, i18n] = useTranslation("common");
  const sumaprecio=basket?.reduce((acum,item)=>{
      return parseFloat(item.precio)+acum;
  }, 0);
  const cambio = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    console.log(e.target.name);
    console.log(valor);
    i18n.changeLanguage(valor);
  };

  const handleLogout = () => {
    const cedula=localStorage.getItem('cedula');
    const token=localStorage.getItem('token');
    const inicio=localStorage.getItem('token-init-date');  
    const date=parseInt(new Date().getTime());
    if (basket.length===0) {
        const transaccion=null;
        console.log("vacio");
        dispatch(sesion(token,cedula,inicio,date,transaccion,10));
      }else{
        console.log("lleno");
        const transaccion=0;
        dispatch(sesion(token,cedula,inicio,date,transaccion,10));
      }
    dispatch(updateDate(token,date));
      //vaciar basket
      while(basket.length > 0)
        basket.pop(); 
     console.log("canasta",basket);

    dispatch(startLogout());

  };
  const carrito = () => {
    history.push("/step");
  };

  return (
    <div className = {`${color && "valor" }`}>
      <div className={`${color?"valor":"header-top theme1 bg-dark py-15  px-xl-90"}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 order-last order-md-first">
              <div className="static-info text-center text-md-left"></div>
            </div>
            <div className="col-lg-6 col-md-5">
              <nav className="navbar-top pb-2 pb-md-0 position-relative">
                <ul className="d-flex justify-content-center justify-content-md-end align-items-center">
                  <li>
                    <a
                      id="dropdown1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Setting <i className="ion ion-ios-arrow-down"></i>
                    </a>
                    <ul
                      className="topnav-submenu dropdown-menu"
                      aria-label="dropdown1"
                    >
                      <li>My account</li>
                      <li>
                        <a>Checkout</a>
                      </li>
                      <li>
                        <a>Sign out</a>
                      </li>
                    </ul>
                  </li>
                  <select onChange={cambio}>
                    <option
                      value="es"
                      name="es"
                      className="ion ion-ios-arrow-down"
                    >
                      Español
                    </option>
                    <option value="en" name="en">
                      ingles
                    </option>
                    <option value="ru" name="ru">
                      ruso
                    </option>
                  </select>

                  <button className="btn btn-primary" onClick = { handleClick }> color </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky"
        className="header-bottom custom-column custom-sticky theme1 py-30  px-xl-90"
      >
        <div className="container-fluid " >
          <div className="row align-items-center position-relative">
            <div className="col-xl-5 order-first position-lg-static position-relative">
              <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                <div className="logo mb-30 mb-sm-0 mr-50 pr-10 mr-pr-0">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-dark.jpg" alt="logo" />
                  </a>
                </div>
                <ul className="main-menu d-none d-lg-flex">
                  <li className="ml-0">
                    <NavLink
                      activeclassNameName="active"
                      classNameName="nav-item nav-link"
                      exact
                      to="/home"
                    >
                      {t("navbar.inicio")}
                    </NavLink>
                  </li>
                  <li className="position-static">
                    <NavLink
                      activeclassNameName="active"
                      classNameName="nav-item nav-link"
                      exact
                      to="/product"
                    >
                      {t("navbar.shop")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeclassNameName="active"
                      classNameName="nav-item nav-link"
                      exact
                      to="/profile"
                    >
                      {t("navbar.perfil")}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 position-relative">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-end">
                    <div className="cart-block-links theme1">
                        <ul className="d-flex">
                            <li className="none-in-xxl">
                                <Link className="search-toggle" onClick={ handleLogout }>
                                    <span className="position-relative">
                                        <i className="icon-logout"></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="mr-0 cart-block position-relative">
                                <Link onClick={ carrito }>
                                    <span className="position-relative">
                                        <i className="icon-bag"></i>
                                        <span className="badge cbdg1">{basket?.length}</span>
                                    </span>
                                    <span className="cart-total position-relative">${sumaprecio}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-toggle theme1 d-lg-none">
                        <Link href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                            <svg viewbox="0 0 800 600">
                                <path
                                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                    id="top"></path>
                                <path d="M300,320 L540,320" id="middle"></path>
                                <path
                                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                    id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318)">
                                </path>
                            </svg>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};