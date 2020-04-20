import React, {useEffect} from 'react';
import './styles.css';
import {useDispatch} from 'react-redux';
import { removeMessage } from '../../store/ducks/layout';

export default function Message({message}) {
  const dispatch = useDispatch();
   
  useEffect(()=>{
    setTimeout( ()=>( dispatch(removeMessage(message))) , 2500)
}, [message, dispatch])
  return (
    <div className="message">
        <p>{message}</p>
    </div>
  );
}
