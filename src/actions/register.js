
import { fetchSinToken } from "../helpers/fetch"


export const register = ( cedula,id_rol,nombre_usuario,apellido_usuario,genero_usuario,username,contrasenia_usuario,celular_usuario,telefono_usuario,email_usuario,direccion_principal,direccion_secundaria,provincia,codigo_postal,operacion,multiplo) => {
    return async () => {
        const resp = await fetchSinToken('user/registrar',{cedula,id_rol,nombre_usuario,apellido_usuario,genero_usuario,username,contrasenia_usuario,celular_usuario,telefono_usuario,email_usuario,direccion_principal,direccion_secundaria,provincia,codigo_postal,operacion,multiplo},'POST');
    }
}