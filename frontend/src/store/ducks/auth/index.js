import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isAuthenticate: localStorage.getItem('token')
}

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");

export default createReducer(INITIAL_STATE, {
    [login.type]: state=> ({...state, isAuthenticate: true}),
    [logout.type]: state=> ({...state, isAuthenticate: false})
})
