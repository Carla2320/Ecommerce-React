import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { sesion } from '../actions/sesion';
export const startLogin = ( cedula, contrasenia_usuario ) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken('user/login',{ cedula, contrasenia_usuario },'POST');
        const body = await resp.json();
        let dia=new Date().getUTCHours();
        
        console.log('dia', dia);
        console.log('log',body);
        if (body.ok){
            
            const fecha_final=new Date().toLocaleString();
            //const token=localStorage.getItem('token');
           
            localStorage.setItem("cedula", cedula);
            console.log(cedula);
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().toLocaleString());
            const fecha_incial=localStorage.getItem('token-init-date');
            dispatch(sesion(body.token,cedula,fecha_incial,null,null,10));
            dispatch(login({
                usuario: body.usuario
            }))
        }else{
            Swal.fire('Error', body.msg,'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('user/renew');
        const body = await resp.json();
        console.log(body);
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().toLocaleString());
            dispatch(login({
                usuario: body.usuario
            }))
        }else{
            dispatch( checkinFinish() );
        }
    }
}

const checkinFinish = () => ({ type: types.authChekingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })

export const addCard = ( cedula, numero, tipo, date, cvs ) => {
    return async (dispatch) => {
        const resp = await fetchConToken('user/addCard', { cedula, numero, tipo, date, cvs }, 'POST');
        const body = await resp.json();
        console.log("we are on action",body);
        if (body.ok){
            dispatch(card({
                usuario: body.userCard
            }))
        }else{
            Swal.fire('Error', body.msg,'ocurrio un error al intentar agregar tu tarjeta');
        }
    }
}

const card = ( user ) => ({
    type: types.addCard,
    payload: user
});