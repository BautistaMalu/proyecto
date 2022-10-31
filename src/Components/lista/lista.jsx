import React from 'react'
import './lista.css';
import Header3 from '../header3/header3';
import Tacho from '../infoeventos/Tacho.png';
import Confirmados from './Confirmados.png';
import Restantes from './Restantes.png';
import Totales from './Totales.png';
import Triangulo from './Trianguloazul.png';
import { useState, useEffect } from 'react';
import Agregaritems from '../agregaritems/agregaritems';
import {useParams} from 'react-router-dom';

function Lista() {

  const [buttonagregarcosas, setButtonAgregarcosas] = useState(false);
  const [itemsToBring, setItemsToBring] = useState(null);
  const listaCosas = []
  const ApiBaseURL = "https://GroupIT-API.up.railway.app"

  const { id } = useParams();
  let totalItemsToBring = 0;
  let totalItemsBrought = 0;
  let totalItemsLeft = 0;

  const getItemsToBring = async () => {
    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idEvento: id })
    };

    const response = await fetch(`${ApiBaseURL}/itemList/toBring`, requestConfig);

    const data = await response.json();

    return data;
  }

  const setItemsBrought = async (Cosa) => {
    console.log("entre")
    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idEvento: id, nombreObjeto: Cosa, cantidadObjeto: 1})
    };

    console.log(requestConfig.body)
    const response = await fetch(`${ApiBaseURL}/itemList/setBrought`, requestConfig);

    const data = await response.json();

    window.location.reload()

    return data;
  }

  useEffect(() => {
    getItemsToBring().then((data) => {
      setItemsToBring(data);
    });
  }, []);

  
  itemsToBring?.forEach((item) => {
    const itemToBring = {
      Cosa: item.nombreObjeto,
      Cantidad: item.cantidadTotal,
      Restantes: item.cantidad
    }

    totalItemsToBring += item.cantidadTotal;
    totalItemsBrought += item.cantidadTotal - item.cantidad;
    totalItemsLeft += item.cantidad;
    
    listaCosas.push(itemToBring);

  })

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
              <h3 className="totalestext">Totales</h3>
              <h3 className="numtotales">{totalItemsToBring}</h3>
            </div>

            <div className="confirmados">
              <img src={Confirmados} alt="" className="confirmadosimg" />
              <h3 className="confirmadostext">Confimados</h3>
              <h3 className="numconfirmados">{totalItemsBrought}</h3>
            </div>

            <div className="restantes">
              <img src={Restantes} alt="" className="restantesimg" />
              <h3 className="restantestext">Restantes</h3>
              <h3 className="numrestantes">{totalItemsLeft}</h3>
            </div>

          </div>

          <div className="terceralinea">
            <button className="todosbtn">Todos</button>
            <button className="confirmadosbtn">Confirmados</button>
            <button className="restantesbtn">Restantes</button>
          </div>

          <div className="lineaa"></div>

          <div className="cosas">
            {listaCosas.length > 0 ? listaCosas.map(({Cosa,Cantidad,Restantes})=> {
                return (
                  
                    <div className="itemsa">
                      
                    <div className="tipoyrest">=
                      <h5 className="rest"> {Restantes}</h5>
                    </div>
                    <div className="cosaycant">
                      <h3 className="cosa"> {Cosa}</h3>
                      <h5 className="cant">Total:{Cantidad}</h5>
                    </div>
                      <div className="btns">
                        <button className="restar" onClick={() => setItemsBrought(Cosa)}>Traigo</button>
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