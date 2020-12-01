
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { useDispatch } from 'react-redux';


 export const InputNumero = ( ) => {   
    const [datos,setDatos] = useState({
        numeroInp:'',
    })
    const handleInputChange = (event) =>{
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }

    const history = useHistory();
    const dispatch = useDispatch();

    const enviardatos =(event) =>{
        event.preventDefault();
        localStorage.getItem('resultado')===datos.numeroInp?history.push("/home"):dispatch(startLogout());
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






