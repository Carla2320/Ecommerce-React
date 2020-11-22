import React from 'react';
import "../css/registerUser.css"

function hola(){
    let presentacion=(
        <h1>Hi</h1>
    )
    return presentacion
        
}
export const registerUser=()=>{
    return(
        <div className="container mt-5" id="contenedor">
        <div className="row" id="subcontenedor">
            <form className="col">
            <h1>
                Ingresa tus datos {hola()}
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
                    <input type="number" class="form-control" id="cedula" aria-describedby="cedula"/>
                </div>
                <div class="form-group">
                    <label for="nombre">Ingresa tu nombre</label>
                    <input type="text" class="form-control" id="nombre" aria-describedby="nombre"/>
                </div>
                <div class="form-group">
                    <label for="apellido">Ingresa tu Apellido</label>
                    <input type="text" class="form-control" id="apellido" aria-describedby="apellido"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
            </section>
            <section>
            <div class="form-group" >
                <label for="inputState">Escoge una Operación </label>
                <div id="elegirOpe">
                <input class="form-check-input" type="radio" name="exampleRadios" id="radiosuma" value="option1" checked></input>
                <label class="form-check-label" for="exampleRadios1">Suma</label>
             </div>
             <div>
                
             </div>
             <div>
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label" for="exampleRadios1"> Multiplicación </label>
             </div>
             <div>
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label" for="exampleRadios1"> División </label>
             </div>
                </div>
                <div class="form-group">
                <label for="inputState">Escoge un Multiplo</label>
                    <select  class="form-control" id="operacion">
                     <option selected >Choose...</option>
                     <option>1</option>
                     <option>2</option>
                    </select>
                </div>
            </section>
            </section>
            <section>
                <button type="submit" class="btn btn-danger btn-lg btn-block" id="boton">Registrase</button>
            </section>
            </form>
        </div>
    </div>
    )
}