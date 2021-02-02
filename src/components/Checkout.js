import React from "react";
import { useStateValue } from "../reducers/StateProvider";
import ProductCart from "./ProductCart";
import "../css/carrito.css";
import Subtotal from "./Subtotal";
import { useTranslation } from "react-i18next";
function Checkout() {
  
  const [t] = useTranslation("common");
  const [{ basket }] = useStateValue();
  console.log({basket})
  return (
    <div class="whish-list-section theme1 pt-80 pb-80">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="title mb-30 pb-25 text-capitalize">Your cart items</h3>
                <div class="table-responsive">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th class="text-center" scope="col">Product Image</th>
                                <th class="text-center" scope="col">Product Name</th>
                                <th class="text-center" scope="col">Stock Status</th>
                                <th class="text-center" scope="col">Qty</th>
                                <th class="text-center" scope="col">Price</th>
                                <th class="text-center" scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {basket.map((item) => (
                        <ProductCart
                          id={item.id}
                          nombre={item.nombre}
                          imagen={item.imagen}
                          stock={item.stock}
                          precio={item.precio}
                          descripcion={item.descripcion}
                          cantidad={item.cantidad}
                        />
                      ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

  );
  
}
export default Checkout;
