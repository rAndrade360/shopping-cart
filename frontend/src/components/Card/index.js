import React from 'react';
import {MdShoppingCart, MdRemoveShoppingCart} from 'react-icons/md';


import './styles.css';


export default function Card({data, carModify, carAdd}) {
  return (
    <div className='card'>
        <img src={data.url} alt={data.name} />
        <div className='bottom'>
            <p>{data.name}</p>
            {carAdd?
            <button className="add" onClick={()=>{carModify(data)}}><MdShoppingCart size={25} style={{color:"#FFF"}} /></button>:
            <button className="remove" onClick={()=>{carModify(data)}}><MdRemoveShoppingCart size={25} style={{color:"#FFF"}} /></button>}
            
        </div>
    </div>
  );
}
