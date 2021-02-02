import React from 'react';
import { useSelector } from 'react-redux';

export const Adresses = () => {

    const { usuario } = useSelector( state => 
        state.auth );

    return (
        <div className="myaccount-content">
                            <h3>Billing Address</h3>
                            <address>
                                <p><strong>{ usuario.nombre_usuario }</strong></p>
                                <p>{ usuario.direccion_principal }</p>
                            </address>
                            <address>
                                <p>{ usuario.direccion_secundaria }</p>
                            </address>
        </div>
    )
}