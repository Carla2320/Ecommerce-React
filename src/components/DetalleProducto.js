import React ,{useState}from "react";
import { useSelector } from "react-redux";
import logo from "../img/kevin.jpg";
import "../css/detalleproducto.css";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { UseFetch } from "../hooks/UseFetch";
import {Button,Paper,Box,Container} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useStateValue } from "../reducers/StateProvider";
import ListaAllProductos from "../containers/ListaAllProductos";

function DetalleProducto() {
  const { id } = useParams();
  const { data } = UseFetch(`http://localhost:3030/api/user/visualizarP/${id}`);
  const [{ basket }, dispatch] = useStateValue();
  const { nombre_producto, imagen, precio, descripcion } = data;
  const addToBasket = () => {
     if(cantidad<=0){
       alert("La cantidad debe ser mayor a 0")
     }else{
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          nombre: nombre_producto,
          imagen: imagen,
          precio: precio*cantidad,
          descripcion: descripcion,
          cantidad:cantidad
        },
     });
     }      
   };
   if (basket.length===0) {
    console.log("vacio");
          
  }else{
    console.log("lleno")
  }
   const suma =()=>{
      setCantidad(cantidad+1)
   } 
   const resta =()=>{
     if(cantidad<=1){
       setCantidad(1)
     }else{
      setCantidad(cantidad-1)
     }
 }
  console.log(data);

  const [cantidad,setCantidad] = useState(1)
  return (
    <section className="productos">
  <section className="general">
      <section>
        <div className="card-grid">
          <TransformWrapper defaultScale={1} defaultPositionX={10} defaultPositionY={10}>
            <TransformComponent>
            <img alt="Logo" width="350px" height="400px" src={imagen} /> 
            </TransformComponent>
          </TransformWrapper>
        </div>
      </section>
      <section className="detalles">
        <div>
          <h3>{nombre_producto}</h3> 
        </div>
        <div>
        <p>{descripcion}</p>
        </div>
        <div>
          <h5 className="precio">Precio: <label>${precio}</label></h5> 
        </div>
        <div className="botones">
          <section>
          <h5>Cantidad:</h5>
          </section>
          <section>
          <ButtonGroup variant="contained" className="btns" color="primary" aria-label="contained primary button group">
        <Button onClick={suma}>+</Button>
        <h6 className="count">{cantidad}</h6>
        <Button onClick={resta}>-</Button>
         </ButtonGroup>
          </section>
        </div>
        <div>
        <button class="btn btn-primary" type="submit" onClick={addToBasket}>
              Add to Cart
            </button>
        </div>
      </section>
    </section>
    <ListaAllProductos />
    </section>
   
   
  );
}
export default DetalleProducto;
