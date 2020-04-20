import React from 'react';
import {Link} from 'react-router-dom';
import {MdShoppingCart, MdPerson} from 'react-icons/md';
import {useSelector, useDispatch} from 'react-redux';
import lougoutService from '../../services/lougoutService';
import './styles.css';


export default function Navbar() {
  const length = useSelector(state=>state.cart.length)
  const {isAuthenticate} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    if(isAuthenticate){
      lougoutService(dispatch)
    }
  }
  

  return (
    <header className="login">
        <h1><Link to='/'>Loja de Carros</Link></h1>
        <nav>
            <ul className="menu">
                <li><Link to='/'>Início</Link></li>
               { isAuthenticate?<li><Link to='/add'>Adicionar</Link></li>:null}
            </ul>
            <span className='login' onClick={handleLogout}><Link to='/login'> <MdPerson size={25} /> </Link></span>
            <span className="cart"><Link to='/cart'>
              <span>{length}</span>
              <MdShoppingCart size={25} style={{marginRight: 10, padding: 1}} /></Link></span>
        </nav>
    </header>
  );
}
