import { fetchSinToken } from "../helpers/fetch"
export const sesion = (token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores) => {
    return async () => {
        console.log("sesion",fecha_fin);
        const resp = await fetchSinToken('sesion/ingreso',{token,id_usuario,fecha_inicio,fecha_fin,transaccion,num_errores},'POST');
    
    }
}
export const updateDate = (token,fecha_fin) => {
    return async () => {
        const resp = await fetchSinToken('sesion/actualizarFecha',{token,fecha_fin},'POST');
    }
}