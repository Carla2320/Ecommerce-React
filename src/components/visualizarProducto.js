import React from 'react';
import  Visualizar  from '../components/Visualizar';
const VisualizarProducto = ({datos}) => {
    return(
        <div className="container mt-5" id="contenedor">
            <table class="table">
            <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">nombre</th>
      <th scope="col">imagen</th>
      <th scope="col">stock</th>
      <th scope="col">precio</th>
      <th scope="col">descripcion</th>
    </tr>
  </thead>
            {datos.map((datos,key)=>{
               return(<Visualizar id={datos.id_producto} nombre={datos.nombre_producto} 
               imagen={datos.imagen} stock={datos.stock} precio={datos.precio} descripcion={datos.descripcion}
           />)})}
           </table>
        </div>
        );
}
export default VisualizarProducto;