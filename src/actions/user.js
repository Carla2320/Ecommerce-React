// import { fetchConToken } from "../helpers/fetch"
// import { types } from "../types/types";
// import Swal from 'sweetalert2';

// export const addCard = ( cedula, numero, tipo, date, cvs ) => {
//     return async (dispatch) => {
//         const resp = await fetchConToken('user/addCard', { cedula, numero, tipo, date, cvs }, 'POST');
//         const body = await resp.json();
//         console.log("we are on action",body);
//         if (body.ok){
//             dispatch(card({
//                 usuario: body.userCard
//             }))
//         }else{
//             Swal.fire('Error', body.msg,'ocurrio un error al intentar agregar tu tarjeta');
//         }
//     }
// }

// const card = ( user ) => ({
//     type: types.addCard,
//     payload: user
// });