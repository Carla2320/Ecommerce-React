import { types } from "../types/types";

const initialState = {
    checking: true
}

export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                checking: false,
                ...action.payload
            }
        case types.authChekingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authLogout:
            return {
                checking: false
            }
        case types.numberVerify:
            return {
                ...state
            }
        case types.addCard:
            return {
                ...state,
                ...action.payload
            }
        default:
           return state;
    }
}