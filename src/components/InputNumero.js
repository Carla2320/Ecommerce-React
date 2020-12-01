
import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
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
    <div>
        <form onSubmit={enviardatos}>
                    <input placeholder="Ingrese la suma" type="text" className="form-control"name='numeroInp'onChange={handleInputChange}></input>
                    <button  type="submit" onClick={handleInputChange}>VERIFICAR</button>
        </form>     
    </div>
    )
}






