import React from "react";
import ListaAllProductos from "../containers/ListaAllProductos";
export const HomeScreen = () => {
  //const {name} = useSelector( state => state.auth);

  return (
    <div>
      <h1>Hola !</h1>
      <ListaAllProductos />
    </div>
  );
};
