import React from 'react';
import { useSelector } from 'react-redux';
import { AddCard } from './AddCard';
export const Profile = () => {
    
    const { usuario } = useSelector( state => 
        state.auth );

    var arr = [];
    Object.keys(usuario.tarjeta).forEach(function(key) {
        arr.push(usuario.tarjeta[key]);
    });
    console.log(arr);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 class="card-title">Perfil</h5>
                            <h5 className="card-subtitle">{ usuario.nombre_usuario } { usuario.apellido_usuario }</h5>
                            <p>{ usuario.cedula }</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                        <h5 class="card-title">Direcciones</h5>
                            <p>{ usuario.direccion_principal }</p>
                            <p>{ usuario.direccion_secundaria }</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 class="card-title">Correo electrónico</h5>
                            <p>{ usuario.email_usuario }</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                        <h5 class="card-title">Números de teléfono</h5>
                            <p>{ usuario.celular_usuario }</p>
                            <p>{ usuario.telefono_usuario }</p>
                        </div>
                    </div>
                </div>
            </div>        
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 class="card-title">Tarjetas asociadas</h5>
                        {/* <p>{ usuario.tarjeta }</p> */}
                        {
                            arr.map((item) =>
                             <p key={item.numero}>{ item.cvs } {item.numero} {item.date} {item.tipo}</p>
                            )
                        }
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#addCardModal">
                        + Agregar tarjeta
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 class="card-title">Opciones de la cuenta</h5>
                            <p>Genero { usuario.genero_usuario }</p>
                            <p>Provincia { usuario.provincia }</p>
                            <p>Operación { usuario.operacion }</p>
                            <p>Multiplo { usuario.multiplo }</p>
                        </div>
                    </div>
                </div>
            </div>
            

<AddCard />
        </div>
    )
}