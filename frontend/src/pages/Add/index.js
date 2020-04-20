import React, {useState} from 'react';
import {addMessage} from '../../store/ducks/layout';
import './styles.css';
import {useDispatch} from 'react-redux';
import { addCarFetch } from '../../store/fetchActions';

export default function Add() {
  const [form, setForm] = useState({name:'', url:''});
  const dispatch = useDispatch();
  
  function formChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(form)
   dispatch(addCarFetch(form))

   setForm({name:'', url:''})
   dispatch(addMessage(`${form.name} adicionado com sucesso!`));
  }
  return (
    <> 
    <div className="form">
      <form>
        <input placeholder="Nome" name="name" value={form.name} onChange={formChange} />
        <input placeholder="Url" name="url" value={form.url} onChange={formChange} />
        <input type='submit' onClick={handleSubmit} />
      </form>
    </div>
    </>

  );
}
