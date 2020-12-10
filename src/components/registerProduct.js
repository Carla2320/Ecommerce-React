import React, {Fragment,useState} from 'react';
import { product} from '../actions/product';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const RegisterProduct = () => {
    const dispatch = useDispatch();
    const categoria=["Juguetes","Electrónicos","Belleza", "Hogar", "Videojuegos"]
    const estado=["Nuevo","Usado"]
    const [datos,setDatos] = useState({
        nombre:'',
        categoria:'',
        estado:'',
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
    const history = useHistory()
    const enviardatos =(event) =>{
        event.preventDefault();
        if(datos.categoria==="Juguetes"){
            datos.categoria=1;
            console.log(datos.categoria)
        }else if(datos.categoria==="Electrónicos"){
            datos.categoria=2;
            console.log(datos.categoria)
        }else if(datos.categoria==="Belleza"){
            datos.categoria=3;
            console.log(datos.categoria)
        }else if(datos.categoria==="Hogar"){
            datos.categoria=4;
            console.log(datos.categoria)
        }else if(datos.categoria==="Videojuegos"){
            datos.categoria=5;
            console.log(datos.categoria)
        }
        if(datos.estado==="Nuevo"){

        }else if(datos.estado==="Usado"){

        }
        dispatch(product( "",datos.categoria,datos.nombre,1,datos.imagen,datos.stock,datos.precio,datos.descripcion))
        console.log(datos.nombre+' '+datos.categoria+' '+datos.estado+' '+datos.imagen+' '+datos.stock+' '+datos.precio+' '+datos.descripcion)
        history.push("/visualizar");
        
    }
    const entradascombo=(name)=>{
        var cargar=(
        <option width="20px" id="op"class="form-check-input" value={name} >{name}</option>
        )
        return cargar
    }
    const entradascombo2=(name)=>{
        var cargar=(
        <option width="20px" id="op"class="form-check-input" value={name} >{name}</option>
        )
        return cargar
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
                 <div class="form-group">
                    <select name="categoria"  class="form-control" onChange={handleInputChange}>
                    <option value="" selected disabled hidden>Elige una categoría</option>
                     {categoria.map((item) => {
                         return entradascombo(item.toString())
                    })}
                    </select>
                </div>
                <div class="form-group">
                    <select name="estado"  class="form-control" onChange={handleInputChange}>
                    <option value="" selected disabled hidden>Elige el estado</option>
                     {estado.map((item) => {
                         return entradascombo2(item.toString())
                    })}
                    </select>
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