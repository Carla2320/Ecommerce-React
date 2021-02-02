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
    // <div className="col-sm-6">
    //   <div className="card mb-3">
    //     <img src={imagen} className="card-img-top " alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{nombre}</h5>
    //       <p className="card-text">{descripcion}</p>
    //       <p className="card-text">Cantidad: {cantidad}</p>
    //       <p className="card-text">${precio}</p>
    //       <button className="btn btn-primary" onClick={removeItem}>
    //         Eliminar del carrito
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
    <tr>
                                <th class="text-center" scope="row">
                                  <img src={imagen} className="card-img-top " alt="..." />
                                </th>
                                <td class="text-center">
                                    <span class="whish-title">{nombre}</span>
                                </td>
                                <td class="text-center">
                                    <span class="badge badge-danger position-static">In Stock</span>
                                </td>
                                <td class="text-center">
                                    <div class="product-count style">
                                        <div class="count d-flex justify-content-center">
                                            <input type="number" min="1" max="10" step="1" value={ cantidad }/>
                                            <div class="button-group">
                                                <button class="count-btn increment"><i
                                                        class="fas fa-chevron-up"></i></button>
                                                <button class="count-btn decrement"><i
                                                        class="fas fa-chevron-down"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span class="whish-list-price">
                                      ${precio}
                                    </span></td>

                                <td class="text-center">
                                    <a> <span class="trash"><i class="fas fa-trash-alt" onClick={ removeItem }></i> </span></a>
                                </td>
                                <td class="text-center">
                                    <a href="#" class="btn theme-btn--dark1 btn--lg">buy now</a>
                                </td>
      </tr>
    </>
  );
}
export default ProductCart;
