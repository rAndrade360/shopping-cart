import axios from 'axios';
import { addCars, addCar } from '../ducks/cars/cars';
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
