import React from 'react'
import './register.css';
import {Link} from 'react-router-dom';
import Logo from '../login/Logo.png';
import Foto from '../login/Fotoprueba.png';
function register() {

  const handlesubmit=(event)=>{
    event.preventDefault();
  }
  
  return (

    <div className='registrate'> 

      <div className="imagen"> <img src={Logo} alt="" /> </div>

      <div className='contenido-registro'>

      <div className='ladoizq'>
        
        <h1 className='registro'> Bienvenido de vuelta <br/> </h1>

        <h3 className="ingrese"> Por favor ingrese sus datos <br/> </h3>

        <form onSubmit={handlesubmit}>

            <label for ="us1">Usuario</label>

            <input placeholder='Ingresa su nombre de usuario' type="text" id='us1'></input>

            <label for ="email1">Email</label>

            <input placeholder="Ingresa su email" type="email" id="email1"/>

            <label for="psw1">Contraseña</label>

            <input placeholder="Ingresa su contraseña" type="password" id="psw1"/>
            
            <button type="submit" id="ingreso">Ingresar</button>

            <button type='submit' id='google'> Ingresa con google</button>

        </form>

          <div className="footer">
            <h3 id='Registrolink'>¿Ya tenes cuenta? <Link to='/'>Inicia Sesion</Link></h3>
          </div>

        </div>

        <div className='ladoder'>

        <div className="Foto"> <img src={Foto} alt="" /> </div>

        </div>
      </div>
    </div>

  )
}

export default register