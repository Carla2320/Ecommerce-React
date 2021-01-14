import React, {Fragment,useState} from 'react';
import "../css/pago.css"
import Subtotal from './Subtotal';
function Pago(){

    const handleInputChange= (event) =>{

        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }
    const [datos,setDatos] = useState({
        tarjeta:'',
        expiracion:'',
        vencimiento:'',
        codigo:'',
        titular:'',
    })
    const enviardatos =(event) =>{
        event.preventDefault();
        console.log(datos.tarjeta+' '+datos.expiracion+' '+datos.vencimiento+' '+datos.codigo+' '+datos.titular+' '+ cedula);
        }
    const cedula = localStorage.getItem("cedula");
    const entradascombo=(name)=>{
        var cargar=(
        <option width="20px" id="op"class="form-check-input" value={name} >{name}</option>
        )
        return cargar
    }

    var mes=[]
        for (let i = 2021; i <= 2050; i++) {
            mes.push(i.toString());
            
    }
    const anio=["01","02","03", "04", "05","06","07","08","09","10","11","12"]
    const entradascombo2=(name)=>{
        var cargar=(
        <option width="20px" id="op"class="form-check-input" value={name} >{name}</option>
        )
        return cargar
    }
    return(
        <div  >
            
            <div>

            <form className='payment' onSubmit={enviardatos}>
            <h2>Método de pago</h2>
                 <div className="form-group">
                     <input
                     placeholder='Número  de tarjeta'
                     className="form-control"
                     type='text'
                     name='tarjeta'
                     onChange={handleInputChange}>
                    
                     </input>
                    
                 </div>
                 <div class="form-group">
                    <select name="expiracion"  class="form-control" onChange={handleInputChange}>
                    <option value="" selected disabled hidden>Año de expiración</option>
                     {mes.map((item) => {
                         return entradascombo(item.toString())
                    })}
                    </select>
                </div>
                <div class="form-group">
                    <select name="vencimiento"  class="form-control" onChange={handleInputChange}>
                    <option value="" selected disabled hidden>Mes de vencimiento</option>
                     {anio.map((item) => {
                         return entradascombo2(item.toString())
                    })}
                    </select>
                </div>
                
                 <div className="form-group">
                     <input
                     placeholder='Código de seguridad'
                     className="form-control"
                     type='text'
                     name='codigo'
                     onChange={handleInputChange} >
                     </input>
                 </div>
                 <div className="form-group">
                     <input
                     placeholder='Titular de la tarjeta'
                     className="form-control"
                     type = "text" 
                     name='titular'
                     onChange={handleInputChange}>
                     </input>
                 </div>
                
                 <div className="form-group">
                    <button type="button"  className="btn btn-light" type="submit" onClick={handleInputChange}>Pagar ahora</button>
                 </div>
                
                 
             </form>

             
            </div>
               
        </div>
        
    )
}
export default Pago;