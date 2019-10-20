import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/churrasqueira.png';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
        <Link to="/register"> Criar conta gratuita </Link>
      </Form>
    </>
  );
}
