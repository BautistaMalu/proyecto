import React from 'react'
import './lista.css';
import Header3 from '../header3/header3';
import Tacho from '../infoeventos/Tacho.png';
import Confirmados from './Confirmados.png';
import Restantes from './Restantes.png';
import Totales from './Totales.png';
import Triangulo from './Trianguloazul.png';
import { useState } from 'react';
import Agregaritems from '../agregaritems/agregaritems';
function Lista() {

  
  const [buttonagregarcosas, setButtonAgregarcosas] = useState(false);

  const listaCosas = [{
    Cosa:"Coca",
    Cantidad:"6",
    Tipo: "Bebida",
    Restantes:12
  }]


  return (
    <div className="todolista">
      <div className="header">
        <Header3/>
      </div>
      <div className="lista">
        <div className="primeralinea">
          <h3 className="itemsatraer">Items a traer</h3>

          <button className="borrar"><img src={Tacho} alt="" className="tacho" /> Borrar</button>

          <button className="agregarcosas" onClick={() => setButtonAgregarcosas(true)}>+ Agregar</button>

        </div>
        <Agregaritems trigger={buttonagregarcosas} setTrigger={setButtonAgregarcosas}>
          </Agregaritems>
        <div className="segundalinea">
            <div className="totales">
              <img src={Totales} alt="" className="totalesimg" />
              <h3 className="totalestext">Concurren</h3>
              <h3 className="numtotales"> 7 </h3>
            </div>

            <div className="confirmados">
              <img src={Confirmados} alt="" className="confirmadosimg" />
              <h3 className="confirmadostext">Pendientes</h3>
              <h3 className="numconfirmados"> 3 </h3>
            </div>

            <div className="restantes">
              <img src={Restantes} alt="" className="restantesimg" />
              <h3 className="restantestext">No concurren</h3>
              <h3 className="numrestantes"> 4 </h3>
            </div>

          </div>

          <div className="terceralinea">
            <button className="todosbtn">Todos</button>
            <button className="confirmadosbtn">Confirmados</button>
            <button className="restantesbtn">Restantes</button>
          </div>

          <div className="lineaa"></div>

          <div className="cosas">
            {listaCosas.length > 0 ? listaCosas.map(({Cosa,Cantidad,Tipo,Restantes})=> {
                return (
                  
                    <div className="itemsa">
                      
                    <div className="tipoyrest">
                      <h3 className="tipo">{Tipo}</h3>
                      <h5 className="rest">{Restantes}</h5>
                    </div>
                    <div className="cosaycant">
                      <h3 className="cosa">{Cosa}</h3>
                      <h5 className="cant">Cantidad:{Cantidad}</h5>
                    </div>
                      <div className="btns">
                        <button className="anadir" >+ Añadir</button>
                        <button className="restar">- Restar</button>
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

export default Lista