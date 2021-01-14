import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../img/kevin.jpg';
import "../css/detalleproducto.css"

function DetalleProducto({nombre}){
    console.log("kevin",{nombre})
    // const { producto} = useSelector( state =>
    //     console.log(state) );

    return (
        <section className="general">
            <section>
            <div className="card-grid">
            <img src={logo} alt="Logo" width="200px" height="300px"/>
            </div>
            </section>
            <section className="detalles">
                <div>
                <h3>Nombres: {nombre}</h3>
                </div>
                <div>
                <p> asddddddddddddddddddddddddddddddd</p>
                </div>
                <div>
                <h3>Precio: </h3>
                <p> asddddddddddddddddddddddddddddddd</p>
                </div>
            </section>           
        </section>
        
    )
}
export default DetalleProducto;
