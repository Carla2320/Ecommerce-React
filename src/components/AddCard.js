import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addCard } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux";
import validator from 'validator';
import Swal from 'sweetalert2';

export const AddCard = () => {

    const { cedula } = useSelector( state => state.auth.usuario);

    const dispatch = useDispatch();
    const [ msg, setMsg ] = useState("");

    const [formValues, handleInputChange] = useForm({
        numero: "",
        tipo: "",
        date: "",
        cvs: ""
    });

    const { numero, tipo, date, cvs } = formValues;
    const ndate = '01/'+ date;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(addCard( cedula, numero, tipo, date, cvs ));
        }else{
            Swal.fire('No se asocio la tarjeta, hay un error en el formulario', msg,'error');
        }
    }
    const tipos = [
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "Diners Club"
    ]

    const isFormValid = () => {
        if ( !validator.isCreditCard(numero) ){
            setMsg("Tarjeta no válida");
            return false;
        }else if ( !validator.isDate(ndate,{
            format: 'DD/MM/YYYY',
            strictMode: true,
            delimiters: ['/']
        })){
            setMsg("Fecha invalida");
            return false;
        }else if ( !validator.isInt(cvs,{
            max: 999,
            min: 100
        }) ){
            setMsg("Código de seguridad inválido");
            return false;
        } 
        return true;
    }

    return (
        <div className="modal fade" id="addCardModal" 
        tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Asociar tarjeta</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                <div className="form-group">
                    <label for="recipient-name1" className="col-form-label">Número de tarjeta</label>
                    <input type="text" className="form-control" id="recipient-name1"
                            name="numero" value={ numero } onChange={ handleInputChange } />
                    <label for="recipient-name" className="col-form-label">Tipo</label>
                    <select className="form-control" name="tipo" value={tipo} onChange={handleInputChange}>
                        <option hidden selected>Seleccione su tipo de tarjeta</option>
                        {
                            tipos.map((item) =>
                             <option className="form-check-input" value={ item }>{ item }</option>
                            )
                        }
                    </select>
                    <label for="recipient-name2" className="col-form-label">Fecha de vencimiento</label>
                    <input type="text" className="form-control" id="recipient-name2" placeholder="mm/aaaa"
                            name="date" value={ date } onChange={ handleInputChange }/>
                    <label for="recipient-name3" className="col-form-label">Código de seguridad</label>
                    <input type="text" className="form-control" id="recipient-name3" 
                            placeholder="Código de tres digitos de tu tarjeta" 
                            name="cvs" value={ cvs } onChange={ handleInputChange }/>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={ handleSubmit } data-dismiss="modal">Asociar tarjeta</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}