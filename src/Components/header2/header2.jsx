import React from 'react'
import Fotoej from './Ejemplo.png';
import Logo from '../login/Logo.png';
import Lupita from './Lupita.png';
import './header2.css';
function header2() {
  return (
    <div className="header2">
        <div className="ladoizqh">
            <img src={Logo} alt="" className="logo" />
        </div>

        <div className="ladoderh">
            <img src={Lupita} alt="" className="lupita" />
            <input type="text" placeholder='Buscar en mis eventos' className="buscar" />
            {/*ver de agarrar una foto */}
            <img src={Fotoej} alt="" className="foto" />
            <h3 className="nombreus">Nombre de Ejemplo</h3>
        </div>

    </div>
  )
}

export default header2