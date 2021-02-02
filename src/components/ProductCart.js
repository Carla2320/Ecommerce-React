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
    
    <div class="row">
        <div class="col-20">
            <div class="table-responsive">
                <table class="table">
                <thead class="thead-light">
                            <tr>
                                <th class="text-center" scope="col">Product Image</th>
                                <th class="text-center" scope="col">Product Name</th>
                                <th class="text-center" scope="col">Product descripcion</th>
                                <th class="text-center" scope="col">Price</th>
                                <th class="text-center" scope="col">action</th>
                                <th class="text-center" scope="col">Checkout</th>
                            </tr>
                        </thead>
                    <tbody>
                    <tr>
                                <th class="text-center" scope="row">
                                    <img className="imagen"src={imagen} alt="img"/>
                                </th>
                                <td class="text-center">
                                <span class="whish-title">{nombre}</span>
                                </td>
                                <td class="text-center">
                                <span class="whish-title">{descripcion}</span>
                                
                                </td>


                                <td class="text-center" >
                                    <span class="whish-list-price">
                                        ${precio}
                                    </span></td>

                                <td class="text-center">
                                    <a href="#"> <span class="trash"><i class="fas fa-trash-alt" onClick={removeItem}></i> </span></a>
                                </td>
                                <td class="text-center">
                                    <a href="#" class="btn theme-btn--dark1 btn--lg">buy now</a>
                                </td>
                      </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
   
  );
}
export default ProductCart;
