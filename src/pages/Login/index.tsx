import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/user';

import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

import logoGit from '../../assets/images/logo-github.svg';

import { Form, ScreenLogin } from './style'; 

function Login() {
  const history = useHistory()
  const [input, setInput] = useState('')
  const { handleLogin } = useContext<any>(UserContext);
  

  async function handleSubmitForm(e: any){
    e.preventDefault();

    const response = await api.get(`https://api.github.com/users/${input}`).then(response => response.data)

    const {   
      login,
      name,
      email,
      location,
      company,
      bio,
      avatar_url,
      followers_url,
      following_url,
      organizations_url,
      starred_url,
      public_repos,
      public_gists,
      followers,
      following, } = response;

      handleLogin({
        login,
        name,
        email,
        location,
        company,
        bio,
        avatar_url,
        followers_url,
        following_url,
        organizations_url,
        starred_url,
        public_repos,
        public_gists,
        followers,
        following
      });

      history.push('/dashboard')
  }
    function handleChangeInput(e: any){
      setInput(e.target.value)
    }

  return (
    <ScreenLogin>
      <img src={logoGit} alt="Logo Github"/>
      <Form onSubmit={handleSubmitForm}>
        <input 
          type="text" 
          placeholder="Usuário"
          value={input}
          onChange={e => handleChangeInput(e)}
        />
        <button type="submit">ENTRAR <FiArrowRight size="24px" /> </button>
      </Form>
    </ScreenLogin>
  );
}


export default Login;