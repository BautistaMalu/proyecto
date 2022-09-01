import React from 'react'
import './register.css';
import {Link} from 'react-router-dom';
import Logo from '../login/Logo.png';
import Foto from '../login/Fotoprueba.png';
function register() {
  return (
    <div className='registrate'> 
        <div className='contenido-registro'>
          Registrate<br/> 

          <Link to='/'>Iniciar Sesion</Link>
        </div>
    </div>

  )
}

export default register