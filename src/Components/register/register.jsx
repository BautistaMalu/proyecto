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

      <div className='contenido-registro'>

      <div className='ladoizq'>

        <img src={Logo} alt=""  className='imagen'/>
        <h1 className='registro'> Bienvenido a GroupIT <br/> </h1>

        <h3 className="ingrese"> Por favor ingrese sus datos <br/> </h3>

        <form onSubmit={handlesubmit}>

            <div className="uss">
              <label for ="us1" className='labelus'>Usuario</label>

              <input placeholder='Ingresa su nombre de usuario' type="text" className='us1'></input>
            </div>

            <div className="emaill">
              <label for ="email1" className='labelemail'>Email</label>

              <input placeholder="Ingresa su email" type="email" className="email1"/>
            </div>

            <div className="pass">
            <label for="psw1" className='labelpsw'>Contraseña</label>

            <input placeholder="Ingresa su contraseña" type="password" className="psw1"/>
            </div>

            <button type="submit" className="registrarse">Registrarse</button>

            

        </form>

          <div className="links">
            <h3 className='Iniciolink'>¿Ya tenes cuenta? <Link to='/login' className='linkinicio'>Inicia Sesion</Link></h3>
          </div>

        </div>

        <div className='ladoder'>

        <img src={Foto} alt="" className='foto'/>

        </div>
      </div>
    </div>

  )
}

export default register