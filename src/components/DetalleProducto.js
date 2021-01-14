import React from "react";
import { useSelector } from "react-redux";
import logo from "../img/kevin.jpg";
import "../css/detalleproducto.css";
import { useParams } from "react-router-dom";
import ListaAllProductos from "../containers/ListaAllProductos";
import { UseFetch } from "../hooks/UseFetch";

function DetalleProducto() {
  const { id } = useParams();
  const { data } = UseFetch(`http://localhost:3030/api/user/visualizarP/${id}`);
  const { nombre_producto, imagen, precio } = !!data && data[0];
  console.log(data);
  return (
    <section className="general">
      <section>
        <div className="card-grid">
          <img alt="Logo" width="200px" height="300px" src={imagen} />
        </div>
      </section>
      <section className="detalles">
        <div>
          <h3>Nombres: {nombre_producto}</h3>
        </div>
        <div>
          <p> </p>
        </div>
        <div>
          <h3>Precio: {precio}</h3>
        </div>
      </section>
    </section>
  );
}
export default DetalleProducto;
