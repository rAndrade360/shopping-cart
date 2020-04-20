import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card';
import { removeItem } from '../../store/ducks/cart';

// import { Container } from './styles';

export default function Cart() {
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  function rmvItem(car){
    dispatch(removeItem(car))
  }
  return (
    <>

    <div>
      {cart.map(item=>(<Card data={item} carModify={rmvItem} carAdd={false} />))}
    </div>
    </>
  );
}
