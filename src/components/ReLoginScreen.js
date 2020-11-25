import React from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { Link } from 'react-router-dom';

export const ReLoginScreen = () => {

    const { number } = useSelector( state => state.auth);
    const orden = [
                    Math.floor((Math.random()*9)+1),
                    Math.floor((Math.random()*9)+1),
                    Math.floor((Math.random()*9)+1),
                    number
                ]
    console.log('orden',orden);
    const envio = orden.sort(()=>(Math.random()-0.5));
    console.log('envio',envio);

    return (
        <>
            <div className="cuadro cuad">
                <EcuationSquare number={ envio[0] }/>
                <EcuationSquare number={ envio[1] }/>
                <EcuationSquare number={ envio[2] }/>
                <EcuationSquare number={ envio[3] }/>
            </div>
            <Link className="btn btn-danger btn-lg btn-block" to="/home"> Verifica </Link>
        </>
        )
}