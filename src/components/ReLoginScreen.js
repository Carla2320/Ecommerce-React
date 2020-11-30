import React, { useState } from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { useDispatch } from 'react-redux';
//import {  useHistory} from 'react-router-dom';
import "../css/ecuaciones.css"
import { InputNumero } from './InputNumero';
import { verifyLogin } from '../actions/auth'
//import Swal from 'sweetalert2';
//import { InputNumero } from './InputNumero';



export const ReLoginScreen = () => {

    const { number } = useSelector( state => state.auth);
    
    const aleatorios = [
        Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        Math.floor((Math.random() * (9 - 2 + 1)) + 2),
        Math.floor((Math.random() * (9 - 2 + 1)) + 2)
    ]

    const orden = [
                    {"numero":aleatorios[0]%number===0?number+1: aleatorios[0] ,"prop":false},
                    {"numero":aleatorios[1]%number===0?number-1: aleatorios[1] ,"prop":false},
                    {"numero":aleatorios[2]%number===0?number+1: aleatorios[2] ,"prop":false},
                    {"numero":number,"prop":true},
                ]

    const envio = orden.sort(()=>(Math.random()-0.5));

    const [ enable, setEnable ] = useState(false);

    const handleClick = (e) => {
        setEnable(!enable);
        console.log("Lo hizo?");
    }

        return  (
            <>
            {/* <h1> {show?<InputNumero/>:<div>vacio</div>} </h1> */}
            <h1> <InputNumero/> </h1>
            <div className="cuadro cuad" id="cuadros" >
                <section id="general">
                <section>
                    <button  disabled={ enable } onClick = { handleClick }> 
                    <EcuationSquare number={ envio[0] }/> 
                    </button>
                </section>
                <section>
                    <button  disabled={ enable } onClick = { handleClick }> 
                    <EcuationSquare number={ envio[1] }/> 
                    </button>
                </section>
                <section>
                    <button  disabled={ enable } onClick = { handleClick }> 
                    <EcuationSquare number={ envio[2] }/> 
                    </button>
                </section>   
                <section>
                    <button  disabled={ enable } onClick = { handleClick }> 
                    <EcuationSquare number={ envio[3] }/> 
                    </button>
                </section>  
                </section>  
            </div>

            </>
        )
    
}
