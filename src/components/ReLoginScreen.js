import React, { useState } from 'react';

import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
import { useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import "../css/ecuaciones.css"
import { startLogout } from '../actions/auth'
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';



export const ReLoginScreen = () => {
    let resultado
    
    const history = useHistory()
    const state = {
        show: true
    }

    

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
  
    console.log('orden',orden);

    // const dispatch = useDispatch();
    const envio = orden.sort(()=>(Math.random()-0.5));
    console.log('envio',envio);

    // const Pulsar=(e)=>{
    //     if(!e){
    //         Swal.fire('Error','Inicia Sesion Para Volver a Intentarlo','error');
    //         dispatch( startLogout() );
            
    //     }
    //     else{
    //         Swal.fire('Correcto','Sesion Iniciada','success');
    //         history.push('/home')
            

    //     }

    // }

    const Enviar=(e)=>{
        e.preventDefault();
        if(e.key==="Enter"){
            console.log("aplastaste Enter")
        }
    }
    

    const [number2,setNumber2] = useState('');


    if(state.show){
        return  (
            <>

                <form onSubmit = {Enviar}>

                
                <div className="cuadro cuad" id="cuadros">
                    <section id="general">
                    <section>

                    <label> <EcuationSquare number={ envio[0] } /> <input onChange={event => setNumber2(event.target.value)} /> </label>
                    
                    </section>
                    <section>
                    <label> <EcuationSquare number={ envio[1] } /> <input/> </label>
            
                    </section>
                    <section>
                    <label> <EcuationSquare number={ envio[2] } /> <input/> </label>
                    </section>   
                    <section>
                    <label> <EcuationSquare number={ envio[3] } /> <input/> </label>
                     
                    </section>  
                    </section>
                </div>

                
                <button className="btn btn-danger btn-lg btn-block" id="verifica" type = "submit"> Verifica </button>

                </form>
            </>
        )
    }
}
