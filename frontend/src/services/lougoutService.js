import { logout } from "../store/ducks/auth";


export default function logouService(dispatch){
    localStorage.removeItem('token');
    dispatch(logout());
}