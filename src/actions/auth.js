import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2';


export const startLogin = ( cedula, contrasenia_usuario ) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken('user/login',{ cedula, contrasenia_usuario },'POST');
        const body = await resp.json();
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                name: body.name,
                lastname: body.lastname,
                number: body.number,
                operacion: body.operacion
            }))
        }else{
            Swal.fire('Error',body.msg,'error');
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('user/renew');
        const body = await resp.json();
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                name: body.name,
                lastname: body.lastname
            }))
        }else{
            Swal.fire('Error',body.msg,'error');
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

export const verifyLogin = (value) => {
    return (dispatch) => {
        dispatch( cosa({
            show: value
        }));
    }
}

const cosa = ( mostrar) => ({
    type: types.numberVerify,
    payload: mostrar
})