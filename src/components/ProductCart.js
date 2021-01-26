import React ,{useState}from "react";
import {Button,Paper,Box,Container} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../css/carrito.css"
import { useStateValue } from '../reducers/StateProvider';

function ProductCart ({id, nombre, imagen, stock, precio, descripcion,cantidad}){
    const [cantidades,setCantidad] = useState(1)
    const suma =()=>{
        setCantidad(cantidades+1)
     } 
     const resta =()=>{
       if(cantidad<=1){
         setCantidad(1)
       }else{
        setCantidad(cantidades-1)
       }
   }
    const [{basket}, dispatch]=useStateValue();
    const removeItem=()=>{
        console.log(basket)
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id
        })
    }
    return(
        <section className="generalsec">
            <table border="1px"  width="160%">
                <tr>
                <section>
                <img className="productcart__image" src={imagen} alt=''></img> 
            </section>
            <section>
            <p className="productcart__title">{nombre}</p>
                <p className="productocart__descrip">{descripcion}</p>
                <h6>Cantidad: {cantidades}</h6>
            </section>
            <section>
          <ButtonGroup variant="contained" className="btns" color="primary" aria-label="contained primary button group">
        <Button onClick={suma}>+</Button>
        <h6 className="count">{cantidad}</h6>
        <Button onClick={resta}>-</Button>
         </ButtonGroup>
          </section>
            <section>
            <p className="productcart__precio">${precio}</p>
            </section>
            <section>
            <button className="boton__cart" onClick={removeItem}>Eliminar del carrito</button>
            </section>
            </tr>
            </table>
        </section>
    )
}
export default ProductCart;