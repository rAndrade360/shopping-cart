import React from 'react';
import {Link} from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';
import {useSelector} from 'react-redux';
import './styles.css';


export default function Login() {
  const length = useSelector(state=>state.cart.length)
  return (
    <header className="login">
        <h1><Link to='/'>Logo</Link></h1>
        <nav>
            <ul className="menu">
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/add'>Adicionar</Link></li>
            </ul>
            <span className="cart"><Link to='/cart'>
              <span>{length}</span>
              <MdShoppingCart size={25} style={{marginRight: 10, padding: 1}} /></Link></span>
        </nav>
    </header>
  );
}
