import Swal from 'sweetalert2';

export const validarform=(nombre,apellido,contrasenia,cedula,combo,check)=>{
    if((nombre && apellido && contrasenia && cedula && combo && check)){
        if (/[^a-zA-Z -]/.test(nombre)) {
            Swal.fire('El valor del nombre solo puede contener caracteres y espacios en blanco');
        }
        else if (/[^a-zA-Z -]/.test(apellido)) {
            Swal.fire('El valor del apellido solo puede contener caracteres y espacios en blanco');
        }
        else if((contrasenia.length < 7)){
            Swal.fire('La contraseña debe ser mayor a 6 caracteres');
        }
        else if(!(cedula.length === 10)){
            Swal.fire('La cedula debe tener 10 Digitos');
        }
        else if (!combo) {
            Swal.fire('Debes escoger una operación');
        }
        else if (!check) {
            Swal.fire('Debes escoger un multiplo');
        }
    }else{
        Swal.fire('Debes LLenar todos los campos');
    }
}
