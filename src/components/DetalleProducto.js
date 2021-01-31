import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../img/kevin.jpg";
import "../css/detalleproducto.css";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { UseFetch } from "../hooks/UseFetch";
import { Button, Paper, Box, Container } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useStateValue } from "../reducers/StateProvider";
import ListaAllProductos from "../containers/ListaAllProductos";
import { Description } from "@material-ui/icons";

function DetalleProducto() {
  const { id } = useParams();
  const { data } = UseFetch(`http://localhost:3030/api/user/visualizarP/${id}`);
  const [{ basket }, dispatch] = useStateValue();
  const { nombre_producto, imagen, precio, descripcion } = data;
  const addToBasket = () => {
    if (cantidad <= 0) {
      alert("La cantidad debe ser mayor a 0");
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          nombre: nombre_producto,
          imagen: imagen,
          precio: precio * cantidad,
          descripcion: descripcion,
          cantidad: cantidad,
        },
      });
    }
  };
  if (basket.length === 0) {
    console.log("vacio");
  } else {
    console.log("lleno");
  }
  const suma = () => {
    setCantidad(cantidad + 1);
  };
  const resta = () => {
    if (cantidad <= 1) {
      setCantidad(1);
    } else {
      setCantidad(cantidad - 1);
    }
  };
  console.log(data);

  const [cantidad, setCantidad] = useState(1);
  return (
    <section class="product-single theme3 bg-white pt-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mb-2 mb-lg-0">
            <div class="product-sync-init mb-10">
              <div class="single-product">
                <div class="product-thumb">
                  <img
                    src={imagen}
                    alt="IMAGEN DEL PRODUCTO"
                    width="600"
                    height="500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mt-md-0">
            <div class="single-product-info">
              <div class="single-product-head">
                <h2 class="title mb-20">{nombre_producto}</h2>
                <div class="star-content mb-20">
                  <span class="star-on">
                    <i class="ion-ios-star"></i>{" "}
                  </span>
                  <span class="star-on">
                    <i class="ion-ios-star"></i>{" "}
                  </span>
                  <span class="star-on">
                    <i class="ion-ios-star"></i>{" "}
                  </span>
                  <span class="star-on">
                    <i class="ion-ios-star"></i>{" "}
                  </span>
                  <span class="star-on">
                    <i class="ion-ios-star"></i>{" "}
                  </span>
                </div>
              </div>
              <div class="product-body mb-40">
                <div class="d-flex align-items-center mb-30">
                  <h6>
                    <span class="onsale">{precio}</span>
                  </h6>
                </div>
                <p>{descripcion}</p>
              </div>
              <div class="product-footer">
                <div class="product-count style d-flex flex-column flex-sm-row mt-30 mb-30">
                  <div class="count d-flex">
                    <input type="number" min="1" max="10" step="1" value={cantidad} />
                    <div class="button-group">
                      <button onClick = {suma} class="count-btn increment">
                        <i class="fas fa-chevron-up"></i>
                      </button>
                      <button onClick = {resta}class="count-btn decrement">
                        <i class="fas fa-chevron-down"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button class="btn theme-btn--dark3 btn--xl mt-5 mt-sm-0 rounded-5" type="submit" onClick={addToBasket} >
                      <span class="mr-2">
                        <i class="ion-android-add"></i>
                      </span>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListaAllProductos />
    </section>
  );
}
export default DetalleProducto;
