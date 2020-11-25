import React, {Fragment,useState} from 'react';
import { product} from '../actions/product';
import { useDispatch } from 'react-redux';
const RegisterProduct = () => {
    const dispatch = useDispatch();
    const [datos,setDatos] = useState({
        nombre:'',
        imagen:'',
        stock:'',
        precio:'',
        descripcion:''
    })
    const handleInputChange= (event) =>{

        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }
    const enviardatos =(event) =>{
        event.preventDefault();
        dispatch(product('',1,datos.nombre,1,datos.imagen,datos.stock,datos.precio,datos.descripcion))
        console.log(datos.nombre+' '+datos.imagen+' '+datos.stock+' '+datos.precio+' '+datos.descripcion)

    }
    const handleClick=(event)=>{
        event.preventDefault();
        console.log('presionando');
    
    }

    return ( 
        <Fragment>
             <h1 className='titulo'>Formulario del producto
             </h1>
             <form onSubmit={enviardatos}>
                 <div className="form-group">
                     <input
                     placeholder='Ingresar nombre del producto'
                     className="form-control"
                     type='text'
                     name='nombre'
                     onChange={handleInputChange}>
                    
                     </input>
                    
                 </div>
                 <div className="form-group">
                     <input
                     placeholder='Ingresar imagen del producto'
                     className="form-control"
                     type='text'
                     name='imagen'
                     onChange={handleInputChange}>
                     </input>
                 </div>
                
                 <div className="form-group">
                     <input
                     placeholder='Ingresar stock del producto'
                     className="form-control"
                     type='number'
                     name='stock'
                     onChange={handleInputChange} >
                     </input>
                 </div>
                 <div className="form-group">
                     <input
                     placeholder='Ingresar precio del producto'
                     className="form-control"
                     type = "number" step="0.01"
                     name='precio'
                     onChange={handleInputChange}>
                     </input>
                 </div>
                 <div className="form-group">
                    <textarea className="form-control"
                     rows="3"
                     placeholder='Descripción'
                     type='text'
                     name='descripcion'
                     onChange={handleInputChange}></textarea>
                 </div>

                 <div className="form-group">
                    <button type="button"  className="btn btn-light" type="submit" onClick={handleInputChange}>Enviar</button>
                 </div>

                 
             </form>
        </Fragment>
       
    );
}
export default RegisterProduct;