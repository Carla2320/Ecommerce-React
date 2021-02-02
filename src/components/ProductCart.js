import React ,{useState}from "react";
import {Button,Paper,Box,Container} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../css/carrito.css"
import { useStateValue } from '../reducers/StateProvider';

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
                                            <input disabled value={ cantidad }/>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span class="whish-list-price">
                                      ${precio}
                                    </span></td>
 
                                    <td class="text-center">
                                    <a href="#"> <span class="trash"><i class="fas fa-trash-alt" onClick={removeItem}></i> </span></a>
                                </td>
                            
      </tr>
    </>


   
  );
}
export default ProductCart;
