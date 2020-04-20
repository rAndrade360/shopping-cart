import axios from 'axios';
import { addCars, addCar } from '../ducks/cars/cars';
import { login } from '../ducks/auth';
export const getAllCars =  ()=>{
   return (dispatch)=>{
    axios.get('http://localhost:3333/cars').then((res)=>{
        dispatch(addCars(res.data))
    }).catch((err)=>{console.log(err)})
   } 
  
}

export const addCarFetch = (car)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3333/cars', car).then((res)=>{
            dispatch(addCar(car))
        }).catch(console.log)
    }
}

export const loginFetch = (user)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3333/login', user).then((res)=>{
            localStorage.setItem('token', res.data.token)
            dispatch(login());
            window.location.pathname = '/'
        }).catch(console.log)
    }
}
