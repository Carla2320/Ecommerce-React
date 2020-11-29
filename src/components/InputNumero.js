import './ecuation.css';
import React, { useState } from 'react';


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
    const enviardatos =(event) =>{
        event.preventDefault();
        localStorage.setItem("UsuarioInput",datos.numeroInp)

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






