import React from 'react'
import {Link} from 'react-router-dom';

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