import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card';

import './styles.css'
import { getAllCars } from '../../store/fetchActions';
import { addItem } from '../../store/ducks/cart';

export default function Main() {
  const cars = useSelector((state)=>state.car);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCars())
  }, [dispatch])

  function addItemCart(car){
    dispatch(addItem(car))
  }
 
  return (
    <>
   
    <div className="shop">
      {cars.map((item, index)=>(
        <Card key={index} data={item} carAdd={true} carModify={addItemCart} />
      ))}

    </div>
    </>
  );
}
