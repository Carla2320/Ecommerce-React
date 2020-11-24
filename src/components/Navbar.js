import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Ecommerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tent">Shop</a>
                </li>
                </ul>
                <button className="btn btn-outline-warning" onClick={ handleLogout }> 
                    <span> Salir </span>
                </button>
            </div>
        </nav>
        )
}