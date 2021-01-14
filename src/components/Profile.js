import React from 'react';
import { useSelector } from 'react-redux';
//import "../css/profile.css"
export const Profile = () => {
    
    const { usuario } = useSelector( state => state.auth );

    return (
        <div className="card-grid">
            <div className="card">
                <h3 className="card-title">Perfil</h3>
                <h3 className="card-subtitle">{ usuario.nombre_usuario } { usuario.apellido_usuario }</h3>
                <p>{ usuario.cedula }</p>
            </div>
            <div className="card">
                <h3>Direcciones</h3>
                <p>{ usuario.direccion_principal }</p>
                <p>{ usuario.direccion_secundaria }</p>
            </div>
            <div className="card">
                <h3>Correo electrónico</h3>
                <p>{ usuario.email_usuario }</p>
            </div>
            <div className="card">
                <h3>Números de teléfono</h3>
                <p>{ usuario.celular_usuario }</p>
                <p>{ usuario.telefono_usuario }</p>
            </div>
            <div className="card">
                <h3>Tarjetas Asociadas</h3>
                <p>{ usuario.celular_usuario }</p>
                <p>{ usuario.telefono_usuario }</p>
            </div>
            <div className="card">
                <h3>Opciones de cuenta</h3>
                <p>Genero { usuario.genero_usuario }</p>
                <p>Provincia { usuario.provincia }</p>
                <p>Operación { usuario.operacion }</p>
                <p>Multiplo { usuario.multiplo }</p>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Opciones de cuenta</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="card-link">Card link</a>
                    <a className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}