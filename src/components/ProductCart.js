import React from "react";

import "../css/carrito.css";
import { useStateValue } from "../reducers/StateProvider";

function ProductCart({
  id,
  nombre,
  imagen,
  stock,
  precio,
  descripcion,
  cantidad,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    console.log(basket);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="col-sm-6">
      <div className="card mb-3">
        <img src={imagen} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text">Cantidad: {cantidad}</p>
          <p className="card-text">${precio}</p>
          <button className="btn btn-primary" onClick={removeItem}>
            Eliminar del carrito
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
