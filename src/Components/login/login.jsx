import React from 'react'
import './login.css';
import {Link} from 'react-router-dom';
function login() {
  return (
    <div className='Logueo'>
            
      Iniciar sesion<br/>
      <Link to='/register'>Registrarse</Link>

      <div className='contenido-login'>
        

      </div>

    </div>
  )
}

export default login