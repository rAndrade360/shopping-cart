import React from 'react';
import './styles.css';
// import { Container } from './styles';
import {useSelector} from 'react-redux';

export default function Message() {
  const isShow = useSelector(state=>state.message.showMessage);
  return (
    <>
    {isShow?
    <div className="message">
        <p>Cadastrado com sucesso!</p>
    </div>
  :null}
    </>
  );
}
