import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 className="navbar-brand">Ecommerce</h2>
            <div className="collapse navbar-collapse" id="navbarText">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/product"
                    >
                        Shop
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/relog"
                    >
                        Relog
                    </NavLink>

                <button className="btn btn-outline-warning" onClick={ handleLogout }> 
                    <span> Salir </span>
                </button>
            </div>
        </nav>
        )
}