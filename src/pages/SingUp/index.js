import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/churrasqueira.png';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/"> Já sou cadastrado</Link>
      </form>
    </>
  );
}
