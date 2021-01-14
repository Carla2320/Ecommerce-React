import React, { Fragment } from "react";
import CardProduc from "./CardProduc"
import {Grid} from "@material-ui/core"
import logo from '../img/kevin.jpg';
function List({AllProductos}){
    console.log(AllProductos)

    return(
        <Fragment>
        <h1>Productos</h1>
            <Grid container spacing={24} justify="center">
            {AllProductos.map((producto,index)=>{
                //url imagen
                return <CardProduc precio={producto.precio}descripcion={producto.descripcion} name={producto.nombre_producto} imagen={logo}></CardProduc>
            })}          
         </Grid>
        </Fragment>
        
    )
}
export default List;
