import React from 'react'
import {Link} from 'react-router-dom';

function register() {
  return (
    <div className='registrate'> 
        <div className='contenido-registro'>
          <h1>Registrate :)</h1>

          <h3><Link to='/'>Iniciar Sesion</Link></h3>
        </div>
    </div>

  )
}

export default register