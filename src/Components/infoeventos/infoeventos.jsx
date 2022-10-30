import React from 'react';
import './infoeventos.css';
import Header3 from '../header3/header3';
import Tacho from './Tacho.png';
import Dots from './Dots.png';
import Noconcurren from './Noconcurren.png';
import Pendientes from './Pendientes.png';
import Concurren from './Confirmados.png';
import Circuloverde from './Circuloverde.png';
import Circuloamarillo from './Circuloamarillo.png';
import Circulorojo from './Circulorojo.png';
import Fotoej from '../header2/Ejemplo.png';
import {Link} from 'react-router-dom';
import Dotsline from './3dots.png';
import { useState } from 'react'
import Agregar from '../agreagarpersonas/agregar';


function Infoeventos() {

  const [buttoncompartir, setButtonCompartir] = useState(false);



  let estado="Disponible";

  const listaInvitados = [{
    nombreus:"Pepito",
    mail:"pepito@gmail.com",
    estado: "Disponible",
    imagene: estado === "Disponible" ? Circuloverde : estado === "Pendiente" ? Circuloamarillo : estado === "Ausente" ? Circulorojo : "",
    rango:"Admin"
  }]

  return (
                
    <div className="todoinfo">

      <div className="header">
        <Header3/>
      </div>
      <div className="info">
        <div className="primeralinea">

          <h3 className="lista">Lista de invitados</h3>

          <button className="borrar"><img src={Tacho} alt="" className="tacho" /> Borrar</button>

          <button className="compartir" onClick={() => setButtonCompartir(true)}><img src={Dots} alt="" className="dots" /> Compartir</button>
            
        </div>
          <Agregar trigger={buttoncompartir} setTrigger={setButtonCompartir}></Agregar>
        <div className="segundalinea">
          <div className="concurren">
            <img src={Concurren} alt="" className="concurrenimg" />
            <h3 className="concurrentext">Concurren</h3>
            <h3 className="numconfirmados"> 23 </h3>
          </div>

          <div className="pendientes">
            <img src={Pendientes} alt="" className="pendientesimg" />
            <h3 className="pendientestext">Pendientes</h3>
            <h3 className="numpendientes"> 23 </h3>
          </div>

          <div className="noconcurren">
            <img src={Noconcurren} alt="" className="noconcurrenimg" />
            <h3 className="noconcurrentext">No concurren</h3>
            <h3 className="numnoconfirmados"> 23 </h3>
          </div>

        </div>
        <div className="terceralinea">
          <button className="todosbtn">Todos</button>
          <button className="disponiblesbtn">Disponibles</button>
          <button className="pendientesbtn">Pendientes</button>
          <button className="ausentesbtn">Ausentes</button>
        </div>
        <div className="linea"></div>
        <div className="invitados">
          {listaInvitados.length > 0 ? listaInvitados.map(({nombreus,rango,estado,imagene,mail})=> {
              return (

                <div className="gente">
                  <div className="foto"><img src={Fotoej} alt="" className="fotoej" /></div>
                  <div className="usymail">
                    <h4 className="us">{nombreus}</h4>
                    <h5 className="mail">{mail}</h5>
                  </div>
                  <div className="estadoycirc">
                    <img src={imagene} alt="" className="circu" />
                    <h4 className="estadoo">{estado}</h4>
                  </div>
                  <div className="adm">
                    <h4 className="admin">{rango}</h4>
                  </div>
                  <div className="btns">
                    <button className="items"><Link to='/lista' className='itemslista'>Items</Link></button>
                    <button className="tresdots" ><img src={Dotsline} alt="" className="dotsline" /></button>
                  </div>
                </div>
              
            )
          }) : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Infoeventos