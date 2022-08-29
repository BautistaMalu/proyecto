import React from 'react'
import './login.css';
import {Link} from 'react-router-dom';
function login() {
  return (
    <div className='Logueo'>
            
      Iniciar sesion<br/>
      <Link to='/register'>Registrarse</Link>

      <div className='contenido-login'>
        
        <div className='ladoizq'>
          hola<br/>
        </div>

        <div className='ladoder'>
          chau<br/>
        </div>

      </div>

    </div>
  )
}

export default login