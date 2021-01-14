import React, { Fragment, useState } from "react";
import { product } from "../actions/product";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
const RegisterProduct = () => {
  const [t] = useTranslation("common");
  const dispatch = useDispatch();
  const categoria = [
    "Juguetes",
    "Electrónicos",
    "Belleza",
    "Hogar",
    "Videojuegos",
  ];
  const estado = ["Nuevo", "Usado"];
  const [datos, setDatos] = useState({
    nombre: "",
    categoria: "",
    estado: "",
    imagen: "",
    stock: "",
    precio: "",
    descripcion: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();

  const enviardatos = (event) => {
    event.preventDefault();
    if (datos.categoria === "juguetes") {
      datos.categoria = 1;
      console.log(datos.categoria);
    } else if (datos.categoria === "electrónicos") {
      datos.categoria = 3;
      console.log(datos.categoria);
    } else if (datos.categoria === "carros") {
      datos.categoria = 2;
      console.log(datos.categoria);
    } else if (datos.categoria === "videojuegos") {
      datos.categoria = 4;
      console.log(datos.categoria);
    }
    if (datos.estado === "Nuevo") {
      datos.estado = 1;
    } else if (datos.estado === "Usado") {
      datos.estado = 0;
    }
    console.log(
      datos.nombre +
        " " +
        1 +
        " " +
        datos.estado +
        " " +
        datos.imagen +
        " " +
        datos.stock +
        " " +
        datos.precio +
        " " +
        datos.descripcion
    );
    dispatch(
      product(
        "",
        1,
        datos.nombre,
        datos.estado,
        datos.imagen,
        datos.stock,
        datos.precio,
        datos.descripcion
      )
    );
    Swal.fire("Datos Guardados Correctamente!", "", "success");
  };
  const visualizarP = (event) => {
    history.push("/visualizar");
  };
  const entradascombo = (name) => {
    let cargar = (
      <option width="20px" id="op" class="form-check-input" value={name}>
        {name}
      </option>
    );
    return cargar;
  };
  const entradascombo2 = (name) => {
    var cargar = (
      <option width="20px" id="op" class="form-check-input" value={name}>
        {name}
      </option>
    );
    return cargar;
  };
  const carrito = () => {
    history.push("/checkout");
  };
  const detalle= () => {
    history.push("/DetalleProducto");
  };


  return (
    <>
      <h1 className="titulo">{t("productos.titulo")}</h1>
      <form onSubmit={enviardatos}>
        <div className="form-group">
          <input
            placeholder={t("productos.nombre_producto")}
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <select
            name="categoria"
            class="form-control"
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>
              {t("productos.categoria")}
            </option>
            {categoria.map((item) => {
              return entradascombo(item.toString());
            })}
          </select>
        </div>
        <div class="form-group">
          <select
            name="estado"
            class="form-control"
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>
              {t("productos.estado")}
            </option>
            {estado.map((item) => {
              return entradascombo2(item.toString());
            })}
          </select>
        </div>
        <div className="form-group">
          <input
            placeholder={t("productos.imagen")}
            className="form-control"
            type="text"
            name="imagen"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-group">
          <input
            placeholder={t("productos.stock")}
            className="form-control"
            type="number"
            name="stock"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            placeholder={t("productos.precio")}
            className="form-control"
            type="number"
            step="0.01"
            name="precio"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder={t("productos.descripcion")}
            type="text"
            name="descripcion"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            name="enviar"
            onClick={handleInputChange}
          >
            {t("productos.boton")}
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            onClick={visualizarP}
          >
            Visualizar
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            onClick={carrito}
          >
            Carrito
          </button>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-light"
            type="submit"
            onClick={detalle}
          >
            Detalle Product
          </button>
        </div>
      </form>
    </>
  );
};
export default RegisterProduct;
