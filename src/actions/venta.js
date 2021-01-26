import { fetchSinToken } from "../helpers/fetch"
export const detalle_venta = ( id_detalle,cantidad,precio,id_producto) => {
    return async () => {
        const resp = await fetchSinToken('user/detalle_venta',{id_detalle,cantidad,precio,id_producto},'POST');
    }
}