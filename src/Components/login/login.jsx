import React from 'react'
import './login.css';
import {Link} from 'react-router-dom';
function login() {

  const handlesubmit=(event)=>{
    event.preventDefault();
  }

  return (
    <div className='Logueo'>
            
      Iniciar sesion<br/>
      <Link to='/register'>Registrarse</Link>

      <div className='contenido-login'>
        
        <div className='ladoizq'>
          <form onSubmit={handlesubmit}>
            <label for ="email1">Email</label>
              <input placeholder="Ingrese su email..." type="email" id="email1"/>
            <label for="psw1">Contraseña</label>
              <input placeholder="Ingrese su contraseña" type="password" id="psw1"/>
              <button type="submit" id="ingreso">Ingresar</button>
          </form>
        </div>

        <div className='ladoder'>
          <p>Chacu</p><br/>
        </div>

      </div>

    </div>
  )
}

export default login