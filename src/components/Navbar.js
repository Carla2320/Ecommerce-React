import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useTranslation } from "react-i18next";
import "../css/navbar.css";
import { useStateValue } from "../reducers/StateProvider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
export const Navbar = () => {
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

  const handleLogout = () => {
    dispatch(startLogout());
  };
  const carrito = () => {
    history.push("/checkout");
  };

  return (
<div>
    <div className="header-top theme1 bg-dark py-15  px-xl-90">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 order-last order-md-first">
                    <div className="static-info text-center text-md-left">
                        <p className="text-white">Join our showroom and get <span className="theme-color">50 % off</span> !
                            Coupon code : <span className="theme-color">Junno50</span></p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-5">
                    <nav className="navbar-top pb-2 pb-md-0 position-relative">
                        <ul className="d-flex justify-content-center justify-content-md-end align-items-center">
                            <li>
                                <a href="#" id="dropdown1" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">Setting <i className="ion ion-ios-arrow-down"></i></a>
                                <ul className="topnav-submenu dropdown-menu" aria-label="dropdown1">
                                    <li>My account</li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="login.html">Sign out</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" id="dropdown2" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">USD $ <i className="ion ion-ios-arrow-down"></i> </a>
                                <ul className="topnav-submenu dropdown-menu" aria-labelledby="dropdown2">
                                    <li className="active"><a href="#">EUR €</a></li>
                                    <li><a href="#">USD $</a></li>
                                </ul>
                            </li>
                            <li className="english">
                                <a href="#" id="dropdown3" className="pr-0" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <img src="assets/img/logo/us-flag.jpg" alt="us flag"/> English
                                    <i className="ion ion-ios-arrow-down"></i>
                                </a>
                                <ul className="topnav-submenu dropdown-menu" aria-labelledby="dropdown3">
                                    <li className="active">
                                        <a href="#"><img src="assets/img/logo/us-flag.jpg" alt="us flag"/>
                                            English</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="assets/img/logo/france.jpg" alt="france flag"/>
                                            Français</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div id="sticky" className="header-bottom custom-column custom-sticky theme1 py-30  px-xl-90">

    <div className="container-fluid">
        <div className="row align-items-center position-relative">
            <div className="col-xl-5 order-first position-lg-static position-relative">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                    <div className="logo mb-30 mb-sm-0 mr-50 pr-10 mr-pr-0">
                        <a href="index.html"><img src="assets/img/logo/logo-dark.jpg" alt="logo"/></a>
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
                                <Link className="search-toggle" onClick={handleLogout}>
                                    <span className="position-relative">
                                        <i className="icon-logout"></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="mr-0 cart-block position-relative">
                                <Link onClick={carrito}>
                                    <span className="position-relative">
                                        <i className="icon-bag"></i>
                                        <span className="badge cbdg1">{basket?.length}</span>
                                    </span>
                                    <span className="cart-total position-relative">$90.00</span>
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
