import React from 'react';
import "../css/registerUser.css"
import { useForm } from '../hooks/useForm';
import { register} from '../actions/register';
import { useHistory } from 'react-router-dom';
import {validarform} from "../validation/validationForm"
import { useDispatch } from 'react-redux';
import {UserForMulOpe} from "../hooks/UseForMulOpe"

export const RegisterUser=()=>{
    const operaciones=["Suma","Resta","Multiplicación","División"], 
    multiplo=[1,2,3,4,5,6,7,8,9],
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
        <option  width="20px" class="form-check-input" value={name} >{name}</option>
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
            <h1>
                Ingresa tus datos
            </h1>
            <section id="general">
            <section>
            <div class="form-group">
                    <label for="cedula">Ingresa tu cedula</label>
                    <input type="number" 
                    id="cedula"
                    placeholder="Ingresa tu cedula"
                    class="form-control" 
                    value={ cedula }
                    name="cedula"
                    onChange={ handleInputChange }
                    aria-describedby="cedula"
                    />
                </div>
                <div class="form-group">
                    <label for="nombre">Ingresa tu nombre</label>
                    <input type="text" class="form-control" id="nombre"
                     value={nombre_usuario}
                     placeholder="Ingresa tu nombre"
                     name="nombre_usuario"
                     onChange={ handleInputChange }
                    aria-describedby="nombre"/>
                </div>
                <div class="form-group">
                    <label for="apellido">Ingresa tu Apellido</label>
                    <input type="text" class="form-control" id="apellido" 
                     value={ apellido_usuario }
                     name="apellido_usuario"
                     placeholder="Ingresa tu apellido"
                     onChange={ handleInputChange }
                    aria-describedby="apellido"/>
                </div>
                <div class="form-group" >
                <label for="inputState">Escoge tu Genero </label>
                {genero.map((item) => {
                         return entradas("genero",item)
                    })}
                {/* <p> gener : {formData.genero  }</p> */}
                </div>
                <div class="form-group">
                    <label for="username">Ingresa tu Username</label>
                    <input type="text" class="form-control" id="username" 
                     value={username}
                     name="username"
                     placeholder="Ingresa tu username"
                     onChange={ handleInputChange }
                    aria-describedby="username"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"
                    placeholder="Ingresa tu password"
                     value={ contrasenia_usuario } 
                     name="contrasenia_usuario"
                     onChange={ handleInputChange } class="form-control" id="password"/>
                </div>
                <div class="form-group">
                    <label for="celular_usuario">Ingresa Teléfono Celular</label>
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
                    <label for="telefono_usuario">Ingresa Teléfono Convencional</label>
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
                    <label for="email_usuario">Ingresa Email</label>
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
                    <label for="direccion_principal">Ingresa tu dirección principal</label>
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
                    <label for="direccion_secundaria">Ingresa tu dirección secundaria</label>
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
                <label for="provincia">Escoge tu provincia</label>
                    <select id="provincia" class="form-control" name="provincia" onChange={handleChange}>
                     {provincia.map((item) => {
                         return entradascombo(item.toString())
                    })}
                    </select>
                </div>
                <div class="form-group">
                    <label for="codigo_postal">Ingresa tu código postal</label>
                    <input type="number" 
                    class="form-control" 
                    placeholder="Ingresa tu código postal"
                    value={ codigo_postal }
                    name="codigo_postal"
                    onChange={ handleInputChange }id="codigo_postal" 
                    aria-describedby="codigo_postal"
                    />
                </div>     
            <div class="form-group" >
                <label for="inputState">Escoge una Operación</label>
                {operaciones.map((item) => {
                         return entradas("operacion",item)
                    })}
                {/* <p> gener : {formData.operacion}</p> */}
            </div>
                <div class="form-group">
                <label for="inputState">Escoge un Multiplo</label>
                    <select  class="form-control" id="multiplo" name="multiplo" onChange={handleChange}>
                     {multiplo.map((item) => {
                         return entradascombo(item)
                    })}
                    </select>
                </div>
                <div id="boton">
                <button type="submit" class="btn btn-danger btn-lg btn-block" onClick={handleSubmit} >Registrarse</button>
                </div>
            </section>
            </section>
            </form>
        </div>
    </div>
    )
}