import React, { useState, useMemo } from 'react';
import {Link} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import '../styles/pages/register.css';
import RegisterHead from '../components/registerHead.js';


function Register() {

  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(
    () => {
      return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]
  )
  return (
    <div className="register__all">
      <RegisterHead />
      <div className="form">
        <div className="form__content">
          <form className="form__area">
            <div className="form__student">
            <label htmlFor="name">Nome completo</label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="nickname">Como gostaria de ser chamado ?</label>
            <input type="text" name="nickname" id="nickname" required/>

            <label htmlFor="email">E-mail válido</label>
            <input type="text" name="email" id="email" required />

            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" required />

            <label htmlFor="description">Breve descrição</label>
            <input type="text" id="description" name="description"/>

            <div className="form__flex">
              <label htmlFor="genre">Gênero
              <select id="genre" name="genre">
                  <option selected value="feminino">Feminino</option>
                  <option value="masculino">Masculino</option>
                  <option value="outro">Outro</option>
                </select>
              </label>

              <label htmlFor="birth">Data de nascimento
              <input type="date" id="birth" name="birth" required />
              </label>
            </div>

            <label htmlFor="cpf">CPF</label>
            <input type="number" id="cpf" name="cpf" required />

            <Link to="/" type="submit" id="prox">Proximo</Link>
            </div>
            <div className="form__photo">
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})`, backgroundSize: "contain", backgroundPosition: "top" }} className={thumbnail ? 'has-thumbnail' : ''}>
              <input type="file" onChange={event => setThumbnail(event.target.files[0])} id="photo" />
              <FaUserCircle className="icon" />
            </label>
              <p>Inserir foto</p>
            </div>
          </form>
        </div>



      </div>


    </div>
  )
}

export default Register;