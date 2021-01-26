import React, { Fragment } from "react";
import CardProduc from "./CardProduc";
import { Grid } from "@material-ui/core";
function List({ AllProductos }) {
  return (
    <>
      <Grid container spacing={24} justify="center">
        {AllProductos.map(
          ({ precio, descripcion, nombre_producto, id_producto, imagen }) => {
            //url imagen
            return (
              <CardProduc
                key={id_producto}
                precio={precio}
                descripcion={descripcion}
                name={nombre_producto}
                imagen={imagen}
                id={id_producto}
              />
            );
          }
        )}
      </Grid>
    </>
  );
}
export default List;
