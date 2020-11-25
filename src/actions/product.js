import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import Swal from 'sweetalert2';

export const product = (id_producto,id_categoría,nombre_producto,estado,imagen,stock,precio,descripcion) => {
    return async () => {
        const resp = await fetchSinToken('user/product',{id_producto,id_categoría,nombre_producto,estado,imagen,stock,precio,descripcion},'POST');
        const body = await resp.json();
        console.log(body)
        if (body.ok){
            Swal.fire('good');
        }else{
            Swal.fire('Error tus campos deben estar llenos',body.msg,'error');
        }
    }
}