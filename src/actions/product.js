import { fetchSinToken, fetchConToken, consulta } from "../helpers/fetch"
import Swal from 'sweetalert2';

export const product = (id_producto,id_categoria,nombre_producto,estado,imagen,stock,precio,descripcion) => {
    return async () => {
        const resp = await fetchSinToken('user/producto',{id_producto,id_categoria,nombre_producto,estado,imagen,stock,precio,descripcion},'POST');
       
    }
}
export const visualizarP = () => {
    return async () => {
        const resp = await consulta('user/visualizarP');
       
    }
}