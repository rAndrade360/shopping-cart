import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/Card';
import { removeItem } from '../../store/ducks/cart';
import { addMessage } from '../../store/ducks/layout';

// import { Container } from './styles';

export default function Cart() {
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  function rmvItem(car){
    dispatch(removeItem(car));
    dispatch(addMessage(`${car.name} removido com sucesso do carrinho!`));
  }
  return (
    <>

    <div>
      {cart.map(item=>(<Card data={item} carModify={rmvItem} carAdd={false} />))}
    </div>
    </>
  );
}
