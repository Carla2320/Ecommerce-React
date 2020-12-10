import React from 'react';
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
const Visualizar=({id,nombre, imagen, stock, precio, descripcion})=>{
    return( 
        <>
  <tbody>
  <tr>
    <td>{id}</td>
    <td>{nombre}</td>
    <td><img src={imagen} width='80'/></td>
    <td>{stock}</td>
    <td>{precio}</td>
    <td>{descripcion}</td>
    </tr>
   
  </tbody>
        </>
    )
}
export default Visualizar;