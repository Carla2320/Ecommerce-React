import React from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { Link } from 'react-router-dom';
import "../css/ecuaciones.css"

import Button from '@material-ui/core/Button';

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
            <div className="cuadro cuad" id="cuadros">
                <section id="general">
                <section>
                <Button variant="contained" color="secondary" id="btn1"> <EcuationSquare number={ envio[0] }/> </Button>
                </section>
                <section>
               <Button variant="contained" color="primary" id="btn2" > <EcuationSquare number={ envio[1] }/> </Button>
                </section>
                <section>
                <Button variant="contained" color="primary" id="btn3"> <EcuationSquare id="hi" number={ envio[2] }/></Button>
                </section>   
                <section>
                <Button variant="contained" color="primary" id="btn4"> <EcuationSquare number={ envio[3] }/></Button>    
                </section>  
                </section>
            </div>
            <Link className="btn btn-danger btn-lg btn-block" to="/home" id="verifica"> Verifica </Link>
        </>
        )
}