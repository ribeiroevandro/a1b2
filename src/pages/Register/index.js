import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../helpers/ApiHelper';

export default function Login() {

  const history = useHistory();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if(!name || !email || !password || confirmPassword === null) {
      return alert('Preencha todos os campos');
    }

    if(password !== null && password.length < 6) {
      return alert('Senha deve ser maior que 6');
    }

    if(password !== confirmPassword) {
      return alert('As senhas devem ser iguais');
    }

    const response = await api.post('/register', { name, email, password, confirmPassword });

    if(response.status !== 201) {
      return alert('Houve um erro. Tente novamente');
    }

    alert('Registro feito! Acesse seu e-mail para ativar sua conta');
    return history.push('/login');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />

        <label>E-mail</label>
        <input
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <label>Confirme a senha</label>
        <input 
          type="password"
          placeholder="Repita a senha" 
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button>Registro</button>
      </form>
    </>
  );
}