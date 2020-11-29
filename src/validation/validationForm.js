import Swal from 'sweetalert2';

export const validarform=(nombre,apellido,contrasenia,cedula,combo,check,genero,username,celular,telefono,email,d_principal,d_secundaria,provincia,codigo_postal)=>{
    if (/[^a-zA-Z -]/.test(nombre)) {
        Swal.fire('El valor del nombre solo puede contener caracteres y espacios en blanco');
        return false
    }else if(!(nombre && apellido && contrasenia && cedula && combo && check && genero && username && celular && telefono && email && d_principal && d_secundaria && provincia && codigo_postal)){
        Swal.fire(`Debes LLenar todos los campos correctamente`);
    }else if (/[^a-zA-Z -]/.test(apellido)) {
        Swal.fire('El valor del apellido solo puede contener caracteres y espacios en blanco');
    }
    else if (/[^a-zA-Z1-9]/.test(username)) {
        Swal.fire('El valor del username solo puede contener caracteres y numeros');
    }
    else if (/[^a-zA-Z -]/.test(d_principal)) {
        Swal.fire('El valor de la direccción principal solo puede contener caracteres y espacios en blanco');
    }
    else if (!(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(email))) {
        Swal.fire('Email incorrecto');
    }
    else if (/[^a-zA-Z -]/.test(d_secundaria)) {
        Swal.fire('El valor de la direccción secundaria solo puede contener caracteres y espacios en blanco');
    }else if((contrasenia.length < 7)){
        Swal.fire('La contraseña debe ser mayor a 6 caracteres');
    }
    else if(!(cedula.length === 10)){
            Swal.fire('La cedula debe tener 10 Digitos');       
    }
    else if(!(celular.length === 10)){
        Swal.fire('tu numero de celular debe tener 10 Digitos');
    }
    else if(!(telefono.length === 7)){
        Swal.fire('tu numero convencional debe tener 7 Digitos');
    }
    else if(!(codigo_postal.length === 6)){
        Swal.fire('La código postal debe tener 6 Digitos');
    }
    else if (!combo) {
        Swal.fire('Debes escoger una operación');
    }
    else if (!check) {
        Swal.fire('Debes escoger un multiplo');
    }
    else if (!provincia) {
        Swal.fire('Debes escoger una provincia');
    }
    else if (!genero) {
        Swal.fire('Debes escoger un genero');
    }else{
        Swal.fire(`Bienvenido ${nombre} ${apellido} ya puedes ingresar` );
        return true
    }
    
}
