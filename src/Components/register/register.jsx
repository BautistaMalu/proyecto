import React from 'react'
import './register.css';
import {Link} from 'react-router-dom';
import Logo from '../login/Logo.png';
import Foto from '../login/Fotoprueba.png';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [registerData, setRegisterData] = React.useState({});
  const navigate = useNavigate();
  const ApiBaseURL = "https://GroupIT-API.up.railway.app"

  const handleInputChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const RegisterUser = async () => {
      const requestConfig = {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombreUsuario: registerData.nombreUsuario, mail: registerData.mail, password: registerData.password, nombre: "Juan", apellido: "Perez", edad: 18})
      };

      const response = await fetch(ApiBaseURL + "/user", requestConfig);

      const data = await response.json();
      
      if (response.status === 200) {
        navigate('/eventos');
        return data;
      } else {
        alert("Register failed");
      }
  };

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

              <input placeholder='Ingresa su nombre de usuario' onChange={handleInputChange} name="nombreUsuario"type="text" className='us1'></input>
            </div>

            <div className="emaill">
              <label for ="email1" className='labelemail'>Email</label>

              <input placeholder="Ingresa su email" onChange={handleInputChange} name="mail" type="email" className="email1"/>
            </div>

            <div className="pass">
            <label for="psw1" className='labelpsw'>Contraseña</label>

            <input placeholder="Ingresa su contraseña" onChange={handleInputChange} name="password" type="password" className="psw1"/>
            </div>

            <button type="submit" onClick={() => RegisterUser()} className="registrarse">Registrarse</button>

            

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

export default Register