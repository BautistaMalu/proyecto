import React from 'react'
import Fotoej from './Ejemplo.png';
import Logo from '../login/Logo.png';
import Lupita from './Lupita.png';
import './header2.css';
import { useState, useEffect } from 'react'
import Bajada from '../header3/bajada.png'
import LogOut from '../logout/logout';

function Header2() {

  const [buttonlogout, setButtonLogout] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);

  const getUserInfo = async () => {

    const ApiURL= "https://groupit-api.vercel.app/auth/getSession"

    const requestConfig = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(ApiURL, requestConfig);

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getUserInfo().then((data) => {
      setLoggedUserInfo(data.user.nombreUsuario);
    });
  }, []); 



  return (
    <div className="header2">
        <div className="ladoizqh">
            <img src={Logo} alt="" className="logo" />
        </div>

        <div className="ladoderh">
            <img src={Lupita} alt="" className="lupita" />
            <input type="text" placeholder='Buscar en mis eventos' className="buscar" />
            {/*ver de agarrar una foto*/}
            <img src={Fotoej} alt="" className="foto" />
            <h3 className="nombreus">{loggedUserInfo}</h3>
            <button className="desloguearse" onClick={() => setButtonLogout(true)}> <img src={Bajada} alt="" className="desloguearseimg" /></button>

            <LogOut trigger={buttonlogout} setTrigger={setButtonLogout}></LogOut>
        </div>


    </div>
  )
}

export default Header2