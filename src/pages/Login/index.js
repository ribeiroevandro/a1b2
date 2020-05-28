import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../helpers/ApiHelper';

export default function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if(!email || !password) {
      return alert('Preencha todos os campos');
    }

    try {
      const response = await api.post('/login', { email, password });
      console.log(response);
    } catch (err) {
      console.log(err);
    }


    // if(response.status !== 200) {
    //   console.log(response.data);
    // }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input 
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        
        <label >Senha</label>
        <input 
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        
        <button>Entrar</button>
      </form>
    </>
  );
}