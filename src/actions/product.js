import { fetchSinToken } from "../helpers/fetch"

export const product = (id_producto,id_categoria,nombre_producto,estado,imagen,stock,precio,descripcion) => {
    return async () => {
        const resp = await fetchSinToken('user/producto',{id_producto,id_categoria,nombre_producto,estado,imagen,stock,precio,descripcion},'POST');
       
    }
}
