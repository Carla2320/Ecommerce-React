import React from 'react';
import "../css/login.css"
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';
import { useForm } from '../hooks/useForm';



export const LoginScreen = () => {
    const solonumeros=(e)=>{
        var key = window.event ? e.which : e.keyCode;
                        if(key < 48 || key > 57)
                            e.preventDefault();
    }
    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        cedula: '',
        contrasenia_usuario: ''
    } );

    const { cedula, contrasenia_usuario } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( startLogin(cedula, contrasenia_usuario) );
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <form className="col form" onSubmit={ handleSubmit }>
                <h1>
                    Ingresos
                </h1>
                    <div className="form-group">
                        <label>Cédula</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={ cedula }
                            name="cedula"
                            onKeyPress = {solonumeros}
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control"
                            value={ contrasenia_usuario } 
                            name="contrasenia_usuario"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg btn-block">Ingresar</button>
                    <div className="form-group form-check">
                        <div className="row">
                            <div className="col">
                            <input type="checkbox" className="form-check-input"/>
                            <label className="form-check-label" >Recordarme</label>
                            </div>
                            <div className="col">
                                <Link id="enlace" to="/registro"><button type="submit" className="btn btn-danger btn-lg btn-block" id="registro" href="/home">Registrate</button></Link>      
                            </div>
                            
                        </div>
                    </div>
                </form>
                <div className="col">
                <img src="../../assets/chaqueta.jpg" className="d-block w-100" alt="product"/>
                </div>
            </div>
        </div>
        )
}