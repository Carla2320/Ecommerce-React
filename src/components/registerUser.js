import React from 'react';
import "../css/registerUser.css"
import { useForm } from '../hooks/useForm';
import { register} from '../actions/register';
import { useHistory } from 'react-router-dom';
import {validarform} from "../validation/validationForm"
import { useDispatch } from 'react-redux';
import {UserForMulOpe} from "../hooks/UseForMulOpe"

export const RegisterUser=()=>{
    const solonumeros=(e)=>{
        var key = window.event ? e.which : e.keyCode;
                        if(key < 48 || key > 57)
                            e.preventDefault();
    }

    const operaciones=["Suma","Resta","Multiplicación","División"], 
<<<<<<< HEAD
    multiplo=[3,5,7,8,11,33],
=======
    multiplo=[3,5,7,8,11,15],
>>>>>>> 3bd4bab0e3afebd491d2bf5af88175c234cc86d9
    genero=["Masculino","Femenino"],
    provincia=["Azuay","Bolívar","Cañar","Carchi","Chimborazo","Cotopaxi","El Oro","Esmeraldas"
,"Galápagos","Guayas","Imbabura","Loja","Los Ríos","Manabí","Morona Santiago","Napo","Orellana",
"Pastaza","Pichincha","Santa Elena","Santo Domingo de los Tsáchilas","Sucumbíos","Tungurahua","Zamora Chinchipe"]

    // const baseURL = 'http://localhost:3030/api/user';
    // const [valcheck,setValcheck]= useState([]);
    // const fetchApi=  async () =>{
    //     const responses =await fetch(baseURL)
    //     const responseJson=await responses.json()
    //     setValcheck(responseJson)
    // }
    // useEffect(()=>{
    //     fetchApi();
    // },[])

    // console.log("hola",valcheck[0].cedula)
     const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        cedula: '',
        nombre_usuario:'',
        apellido_usuario:'',
        contrasenia_usuario: '',
        username:'',
        celular_usuario:'',
        telefono_usuario:'',
        email_usuario:'',
        direccion_principal:'',
        direccion_secundaria:'',
        codigo_postal:''
    } );
    const { cedula,nombre_usuario,apellido_usuario, contrasenia_usuario,username,celular_usuario,telefono_usuario,email_usuario,direccion_principal,direccion_secundaria,codigo_postal} = formValues;

    const [formData,handleChange]=UserForMulOpe({
        operacion:"",
        multiplo:"",
        genero:"",
        provincia:""
    })
    console.log(formData)
    const entradas=(clase,name)=>{
        var cargar=(
            <div id="elegirOpe">
                <input class="form-check-input" type="radio" name={clase} value={name} onChange={handleChange} ></input>
                 <label class="form-check-label" for="exampleRadios1">{name}</label>
             </div>  
        )
        return cargar
    }
    const entradascombo=(name)=>{
        var cargar=(
        <option width="20px" id="op"class="form-check-input" value={name} >{name}</option>
        )
        return cargar
    }
    const entradascombo1=(name)=>{
        var cargar=(
        <option  width="20px" class="form-check-input" value={name} >{name}</option>
        )
        return cargar
    }
    const history = useHistory()
    const validatioF=()=>{
        const a=validarform(nombre_usuario,apellido_usuario,contrasenia_usuario,cedula,formData.operacion,formData.multiplo,formData.genero,username,celular_usuario,telefono_usuario,email_usuario,direccion_principal,direccion_secundaria,formData.provincia,codigo_postal)
        if(a===true){
            history.push("/login");
        }else{
            console.log("jaj",a)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(cedula,1,nombre_usuario,apellido_usuario,formData.genero,username, contrasenia_usuario,celular_usuario,telefono_usuario,email_usuario,direccion_principal,direccion_secundaria,formData.provincia,codigo_postal,formData.operacion,formData.multiplo) );
        validatioF()
    }

    
    return(
        <div className="container mt-5" id="contenedor">
        <div className="row" id="subcontenedor">
            <form className="col" onSubmit={handleSubmit}>
            <section id="general">
            <section>
            <h1 id="titulo">
                Ingresa tus datos
            </h1>
            <div class="form-group">
<<<<<<< HEAD
                    <label for="cedula">Ingresa tu cedula</label>
                    <input type="text" 
                    class="form-control" 
                    value={ cedula }
                    name="cedula"
                    onKeyPress = {solonumeros}
                    onChange={ handleInputChange }id="cedula" 
=======
                    <input type="number" 
                    id="cedula"
                    placeholder="Ingresa tu cedula"
                    class="form-control" 
                    value={ cedula }
                    name="cedula"
                    onChange={ handleInputChange }
>>>>>>> 3bd4bab0e3afebd491d2bf5af88175c234cc86d9
                    aria-describedby="cedula"
                    />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="nombre"
                     value={nombre_usuario}
                     placeholder="Ingresa tu nombre"
                     name="nombre_usuario"
                     onChange={ handleInputChange }
                    aria-describedby="nombre"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="apellido" 
                     value={ apellido_usuario }
                     name="apellido_usuario"
                     placeholder="Ingresa tu apellido"
                     onChange={ handleInputChange }
                    aria-describedby="apellido"/>
                </div>
                <div class="form-group" id="genero">
                <label for="inputState">Escoge tu Genero </label>
                {genero.map((item) => {
                         return entradas("genero",item)
                    })}
                {/* <p> gener : {formData.genero  }</p> */}
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="username" 
                     value={username}
                     name="username"
                     placeholder="Ingresa tu username"
                     onChange={ handleInputChange }
                    aria-describedby="username"/>
                </div>
                <div class="form-group">
                    <input type="password"
                    placeholder="Ingresa tu password"
                     value={ contrasenia_usuario } 
                     name="contrasenia_usuario"
                     onChange={ handleInputChange } class="form-control" id="password"/>
                </div>
                <div class="form-group">
                    <input type="number" 
                    placeholder="Ingresa tu celular"
                    class="form-control" 
                    value={ celular_usuario }
                    name="celular_usuario"
                    onChange={ handleInputChange }id="celular_usuario" 
                    aria-describedby="celular_usuario"
                    />
                </div>
                <div class="form-group">
                    <input type="number" 
                    class="form-control" 
                    placeholder="Ingresa tu teléfono convecional"
                    value={ telefono_usuario}
                    name="telefono_usuario"
                    onChange={ handleInputChange }id="telefono_usuario" 
                    aria-describedby="telefono_usuario"
                    />
                </div>
            </section>
            <section>
            <div class="form-group">
                    <input type="email" 
                    class="form-control" 
                    placeholder="Ingresa tu email"
                    value={ email_usuario}
                    name="email_usuario"
                    onChange={ handleInputChange }id="email_usuario" 
                    aria-describedby="email_usuario"
                    />
                </div>
                <div class="form-group">
                    <input type="text" 
                    placeholder="Ingresa tu dirección principal"
                    class="form-control" 
                    value={ direccion_principal}
                    name="direccion_principal"
                    onChange={ handleInputChange }id="direccion_principal" 
                    aria-describedby="direccion_principal"
                    />
                </div>
                <div class="form-group">
                    <input type="text" 
                    class="form-control" 
                    placeholder="Ingresa tu  dirección secundaria"
                    value={direccion_secundaria}
                    name="direccion_secundaria"
                    onChange={ handleInputChange }id="direccion_secundaria" 
                    aria-describedby="direccion_secundaria"
                    />
                </div>
                <div class="form-group">
                <label for="provincia" id="provi">Escoge tu provincia</label>
                    <select id="provincia" class="form-control" name="provincia" onChange={handleChange}>
                     {provincia.map((item) => {
                         return entradascombo(item.toString())
                    })}
                    </select>
                </div>
                <div class="form-group">
                    <input type="number" 
                    class="form-control" 
                    placeholder="Ingresa tu código postal"
                    value={ codigo_postal }
                    name="codigo_postal"
                    onChange={ handleInputChange }id="codigo_postal" 
                    aria-describedby="codigo_postal"
                    />
                </div>     
            <div class="form-group" id="operacion" >
                <label for="inputState" >Escoge una Operación</label>
                {operaciones.map((item) => {
                         return entradas("operacion",item)
                    })}
                {/* <p> gener : {formData.operacion}</p> */}
            </div>
                <div class="form-group">
                <label for="inputState" id="multi">Escoge un Multiplo</label>
                    <select  id="multipo"class="form-control" id="multiplo" name="multiplo" onChange={handleChange}>
                     {multiplo.map((item) => {
                         return entradascombo(item)
                    })}
                    </select>
                </div>
                <div >
                <button  id="boton" type="submit" onClick={handleSubmit} >Registrarse</button>
                </div>
            </section>
            </section>
            </form>
        </div>
    </div>
    )
}