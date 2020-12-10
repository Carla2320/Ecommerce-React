
import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import "../css/input.css"
import { startLogout } from '../actions/auth'
 export const InputNumero = ( ) => {   
    const [datos,setDatos] = useState({
        numeroInp:'',
            
    })
    const handleInputChange= (event) =>{


        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })

    
 
    }
    const solonumeros=(e)=>{
        var key = window.event ? e.which : e.keyCode;
                        if(key < 48 || key > 57)
                            e.preventDefault();
    }
    const dispatch = useDispatch();
    const history = useHistory()
    const enviardatos =(event) =>{
        event.preventDefault();
        localStorage.setItem("UsuarioInput",datos.numeroInp);
        let resultadoF,estado;
        resultadoF = localStorage.getItem("resultado");
        estado = localStorage.getItem("Estado");
        String(estado)
        if(estado==='true'){
        
            if(resultadoF===datos.numeroInp){
               
                Swal.fire('Correcto','Sesion Iniciada','success');
                history.push('/home')
            }else{
             
                Swal.fire('Error','Inicia Sesion Para Volver a Intentarlo','error');
                dispatch( startLogout() );
    
            }

        }else{
            Swal.fire('Error','Inicia Sesion Para Volver a Intentarlo','error');
            dispatch( startLogout() );
        }

    }
  
    return(
        <>
        <section id = "enviarDatos">
  
            <form onSubmit={enviardatos}>
                    <input type="number" placeholder="Ingrese el resultado " maxLength = "4" id="txtVerificar" type="text" className="form-control"name='numeroInp'onChange={handleInputChange}></input>
                    <button id="verificari" type="submit" onClick={handleInputChange}>VERIFICAR</button>
            </form>     
        </section>
        </>
    )
}






