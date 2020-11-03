import React from 'react';

import '../styles/pages/register.css';
import RegisterHead from '../components/registerHead.js';
import photo_student from '../images/perfilP.jpg';

function Register() {
  return (
    <div className="register__all">
      <RegisterHead />
      <div className="form">
      <div className="form__content">
      <form className="form__student">
        <label htmlFor="name">Nome completo</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="nickname">Como gostaria de ser chamado ?</label>
        <input type="text" name="nickname" id="nickname" />

        <label htmlFor="email">E-mail válido</label>
        <input type="text" name="email" id="email" required />

        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" required />

        <label htmlFor="">Breve descrição</label>
        <input type="text" id="description" />

        <label htmlFor="">Data de nascimento</label>
        <input type="date" id="nascimento" required />

        <label htmlFor="">CPF</label>
        <input type="number" id="cpf" required />

        <label htmlFor="">Gênero</label>
        <select>
          <option value="laranja">Feminino</option>
          <option value="limao">Masculino</option>
          <option selected value="coco">Outro</option>
        </select>
      </form>
      </div>
      <div className="student__photo">  
        <label htmlFor="">Inserir foto</label>
        <input type="file" id="photo" required />
        <div className="photo">
          <img src={photo_student} alt="foto de perfil"/>
        </div>
      </div>
      </div>
     

    </div>
  )
}

export default Register;