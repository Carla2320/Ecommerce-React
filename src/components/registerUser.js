import React, { useEffect, useState } from 'react';
import "../css/registerUser.css"
import { useForm } from '../hooks/useForm';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from "reactstrap"
import { register} from '../actions/register';

import { useDispatch } from 'react-redux';
import {UserForMulOpe} from "../hooks/UseForMulOpe"

export const RegisterUser=()=>{
    const operaciones=["Suma","Resta","Multiplicación","División"],
    multiplo=[1,2,3,4,5,6,7,8,9]
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
        operacion:''
    } );
    const { cedula,nombre_usuario,apellido_usuario, contrasenia_usuario} = formValues;

    const [formData,handleChange]=UserForMulOpe({
        operacion:"",
        multiplo:"",
    })
    const entradas=(name)=>{
        var cargar=(
            <div id="elegirOpe">
                <input class="form-check-input" type="radio" name="operacion" value={name} onChange={handleChange} ></input>
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
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(cedula,1,nombre_usuario,apellido_usuario, contrasenia_usuario,formData.operacion,formData.multiplo) );
    }
    return(
        <div className="container mt-5" id="contenedor">
        <div className="row" id="subcontenedor">
            <form className="col" onSubmit={handleSubmit}>
            <h1>
                Ingresa tus datos
            </h1>
            <section id="foto">
            <div className="col">
                <img src="../../assets/chaqueta.jpg" id="imgRegister"/>
                </div>
            </section>
            <section id="general">
            <section>
            <div class="form-group">
                    <label for="cedula">Ingresa tu cedula</label>
                    <input type="number" 
                    class="form-control" 
                    value={ cedula }
                    name="cedula"
                    onChange={ handleInputChange }id="cedula" 
                    aria-describedby="cedula"
                    />
                </div>
                <div class="form-group">
                    <label for="nombre">Ingresa tu nombre</label>
                    <input type="text" class="form-control" id="nombre"
                     value={nombre_usuario}
                     name="nombre_usuario"
                     onChange={ handleInputChange }
                    aria-describedby="nombre"/>
                </div>
                <div class="form-group">
                    <label for="apellido">Ingresa tu Apellido</label>
                    <input type="text" class="form-control" id="apellido" 
                     value={ apellido_usuario }
                     name="apellido_usuario"
                     onChange={ handleInputChange }
                    aria-describedby="apellido"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"
                     value={ contrasenia_usuario } 
                     name="contrasenia_usuario"
                     onChange={ handleInputChange } class="form-control" id="password"/>
                </div>
            </section>
            <section>
            <div class="form-group" >
                <label for="inputState">Escoge una Operación </label>
                {operaciones.map((item) => {
                         return entradas(item)
                    })}
                <p> gener : {formData.operacion}</p>
            </div>
                <div class="form-group">
                <label for="inputState">Escoge un Multiplo</label>
                    <select class="form-control" id="multiplo" name="multiplo" onChange={handleChange}>
                     {multiplo.map((item) => {
                         return entradascombo(item)
                    })}
                    </select>
                </div>
            </section>
            </section>
            <section id="boton">
                <button type="submit" class="btn btn-danger btn-lg btn-block" >Registrase</button>
            </section>
            </form>
        </div>
    </div>
    )
}