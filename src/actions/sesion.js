import { fetchSinToken } from "../helpers/fetch"
export const sesion = (token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores) => {
    return async () => {
        const resp = await fetchSinToken('sesion/ingreso',{token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores},'POST');
    }
}
export const updateDate = (token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores) => {
    return async () => {
        const resp = await fetchSinToken('sesion/actualizarFecha',{token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores},'POST');
    }
}