import React from 'react';
import { useSelector } from 'react-redux';
import { AddCard } from './AddCard';

export const PaymentMethod = () => {

    const { usuario } = useSelector( state => 
        state.auth );

    var arr = [];

    usuario.tarjeta?Object.keys(usuario.tarjeta).forEach(function(key) {
        arr.push(usuario.tarjeta[key]);
    }) : arr=[];

    return (
        <div className="myaccount-content">
            <h3>Payment Method</h3>
            {
            arr.map((item) =>
             <p key={item.numero}>{ item.cvs } {item.numero} {item.date} {item.tipo}</p>
            )
            }
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#addCardModal">
            + Agregar tarjeta
            </button>
            <AddCard />
        </div>
    )
}