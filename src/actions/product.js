import { fetchSinToken } from "../helpers/fetch";

export const product = (
  id_producto,
  id_categoria,
  nombre_producto,
  estado,
  imagen,
  stock,
  precio,
  descripcion
) => {
  return async () => {
    console.log(
      "action",
      id_producto,
      id_categoria,
      nombre_producto,
      estado,
      imagen,
      stock,
      precio,
      descripcion
    );
    const resp = await fetchSinToken(
      "user/producto",
      {
        id_producto,
        id_categoria,
        nombre_producto,
        estado,
        imagen,
        stock,
        precio,
        descripcion,
      },
      "POST"
    );
  };
};
