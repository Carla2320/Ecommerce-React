import React from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';

export const ReLoginScreen = () => {

    const { number } = useSelector( state => state.auth);
    const orden = [
                    Math.floor((Math.random()+1)*4),
                    Math.floor((Math.random()+1)*3),
                    Math.floor((Math.random()+1)*2),
                    number
                ]

    const envio = orden.sort(()=>(Math.random()-0.5));

    return (
        <div className="cuadro cuad">
            <EcuationSquare number={ envio[0] }/>
            <EcuationSquare number={ envio[1] }/>
            <EcuationSquare number={ envio[2] }/>
            <EcuationSquare number={ envio[3] }/>
        </div>
        )
}