import React, { useContext } from "react";
import CardProduc from "./CardProduc";
import { Grid } from "@material-ui/core";
import { UserContext } from "../hooks/UseContext";
import "../css/prueba.css"
function List({ AllProductos }) {
  const { color,setColor } = useContext(UserContext);
  
  return (
    <section class={`${color?"valor":"product-tab bg-red pt-30 pb-80"}`}>
      <div class="container bg-red">
        <div class="row">
          {AllProductos.map(
            ({ precio, descripcion, nombre_producto, id_producto, imagen }) => {
              return (
                <div class="col-sm-6 col-lg-4 col-xl-3 mb-30">
                <CardProduc
                  key={id_producto}
                  precio={precio}
                  descripcion={descripcion}
                  name={nombre_producto}
                  imagen={imagen}
                  id={id_producto}
                />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
export default List;
