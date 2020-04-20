import React from 'react';
import './styles.css';
import Message from '../Message';
import {useSelector} from 'react-redux';


export default function Messages() {
    const msg = useSelector(state=>state.message.messages)
  
  return (
    <div className="messages">
        {msg.map(message=>(
            <Message message={message} />
        ))}
    </div>
  );
}