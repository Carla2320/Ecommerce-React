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
            <div className="row" >
                <form className="col form" onSubmit={ handleSubmit } >
                 <section id="fondo">
                 <h1>
                    Sign in
                </h1>
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="cedulas"
                            className="form-control"
                            value={ cedula }
                            name="cedula"
                            placeholder="Ingresa tu cedula"
                            onKeyPress = {solonumeros}
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            id="contrasenias"
                            placeholder="Ingresa tu contraseña"
                            className="form-control"
                            value={ contrasenia_usuario } 
                            name="contrasenia_usuario"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div id="btnlogin">
                    <button id="ingreso" type="submit" >Login</button>
                    </div>
                    <div className="form-group form-check" id="divingre">
                        <div className="row">
                            <div className="col">
                            <input type="checkbox" className="form-check-input" id="ingre"/>
                            <label className="form-check-label" id="recorda">Recordarme</label>
                            </div>
                            <div className="col" id="btnregister">
                                <Link id="enlace" to="/registro"><button type="submit"  id="registro" href="/home">Registrate</button></Link>      
                            </div>
                            
                        </div>
                    </div>
                    </section>

                </form>
            </div>
        </div>
        )
}