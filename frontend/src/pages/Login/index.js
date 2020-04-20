import React, { useState } from 'react';

 import  './styles.css';
 import {useDispatch} from 'react-redux';
import { loginFetch } from '../../store/fetchActions';

export default function Login() {
    const [form, setForm] = useState({username: '', password: ''});
    const dispatch = useDispatch();
    function chageForm(e){
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(loginFetch(form));
        setForm({username: '', password: ''})
    }
  return (
    <div className="user">
        <h2>SC- Login</h2>
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={chageForm} placeholder="Seu super username..." value={form.username} />
            <input
                name="password"
                onChange={chageForm}
                placeholder="Sua discrebilíssima senha..."
                type="password"
                value={form.password} />
            <button>Logar</button>
        </form>
    </div>
  );
}
