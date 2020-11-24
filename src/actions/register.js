
import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import Swal from 'sweetalert2';


export const register = ( cedula,id_rol,nombre_usuario,apellido_usuario,contrasenia_usuario,operacion,multiplo) => {
    return async () => {
        const resp = await fetchSinToken('user/registrar',{cedula,id_rol,nombre_usuario,apellido_usuario,contrasenia_usuario,operacion,multiplo},'POST');
        const body = await resp.json();
        console.log(body)
        if (body.ok){
            Swal.fire('good');
        }else{
            Swal.fire('Error tus campos deben estar llenos',body.msg,'error');
        }
    }
}