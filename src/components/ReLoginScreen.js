import React from 'react';
import { EcuationSquare } from './EcuationSquare';
import { useSelector } from 'react-redux';
import './relogin.css';
//import { useDispatch } from 'react-redux';
//import {  useHistory} from 'react-router-dom';
import "../css/ecuaciones.css"
import { InputNumero } from './InputNumero';
//import { startLogout } from '../actions/auth'
//import Swal from 'sweetalert2';
//import { InputNumero } from './InputNumero';



export const ReLoginScreen = () => {
    
    //const history = useHistory()
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

    //const dispatch = useDispatch();
    const envio = orden.sort(()=>(Math.random()-0.5));
    console.log('envio',envio);

    // const Pulsar=(e)=>{
    //     if(!e){
    //         return(
    //             <div>
    //             <InputNumero/>
    //         </div>
    //         )
            
    //         //Swal.fire('Error','Inicia Sesion Para Volver a Intentarlo','error');
    //         //dispatch( startLogout() );
            
    //     }
    //     else{
    //         console.log("entrooo 2")
    //         return(
    //         <div>
    //             <label> holaaaaaaaaa </label>
    //         </div>
    //         )
    //         //Swal.fire('Correcto','Sesion Iniciada','success');
    //         //history.push('/home')
            

    //     }

    // }



    // const handleInputChange= (event) =>{

    //     setDatos({
    //         ...datos,
    //         [event.target.name]:event.target.value
    //     })
    // }



    let resultadoF,resultadoInput;
    const Res= (event) =>{
        if(event){
            resultadoInput = localStorage.getItem("UsuarioInput");
            resultadoF = localStorage.getItem("resultado");
            console.log(resultadoF,resultadoInput);



        }
        else console.log(event)
    }


    if(state.show){
        return  (
            <>
            <div className="cuadro cuad" id="cuadros" >
        <section id="general">
        <section>
        <button variant="contained" color="secondary" id="btn1" onClick = {()=>{Res(envio[0].prop)}}> <EcuationSquare number={ envio[0] }/> </button>
        
        </section>
        
        <section>
        <button variant="contained" color="secondary" id="btn1"onClick = {()=>{Res(envio[1].prop)}}> <EcuationSquare number={ envio[1] }/> </button>
        </section>
        <section>
        <button variant="contained" color="secondary" id="btn1" onClick = {()=>{Res(envio[2].prop)}}> <EcuationSquare number={ envio[2] }/> </button>
        </section>   
        <section>
        <button variant="contained" color="secondary" id="btn1" onClick = {()=>{Res(envio[3].prop)}}> <EcuationSquare number={ envio[3] }/> </button>
        </section>  
        <section>
            <InputNumero/>
        </section>
        </section>
 
                    
            </div>

            </>
        )
    }
}
