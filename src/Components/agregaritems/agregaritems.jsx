import React from 'react'
import './agregaritems.css';
import { useState } from 'react'
import Cerrar from '../creacion/cruz.png';
import {useParams} from 'react-router-dom';

function Agregaritems(props5) {

    const { id } = useParams();
    const [itemsData, setItemsData] = React.useState({});
    
    const ApiBaseURL = "https://GroupIT-API.up.railway.app"

    const handleInputChange = (event) => {
        setItemsData({
          ...itemsData,
          [event.target.name]: event.target.value,
        });
      };

    const setItemsToBring = async () => {

        const requestConfig = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({idEvento: id, nombreObjeto: itemsData.nombreObjeto, cantidadObjeto: parseInt(itemsData.cantidadObjeto)})
        };

        const response = await fetch(ApiBaseURL + "/itemList/setToBring", requestConfig);

        const data = await response.json();
        
        window.location.reload()

        return data;
        
    };

  return (props5.trigger) ? (
    <div className="todoagregaritems">
        
        <div className="agregaritems">

            <button className="cerrar" onClick={() => props5.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props5.children}

            <div className="anadiritem">
                <h4 className="titulo">Añadir item a la lista</h4>
                <div className="anadirii">
                    <label for="nombreitem" className="nombre">Nombre del item</label>
                    <input type="text" onChange={handleInputChange} className="escribiitem" name="nombreObjeto" placeholder='Escribí el nombre del item'/>
                </div>
                <div className="tipoycant">
                    <div className="cantitem">
                        <label for="cant" className="cantt">Cantidad</label>
                        <input type="number" onChange={handleInputChange} name="cantidadObjeto" className="cant" />
                    </div>
                </div>
                <button className="anadir" onClick={() => setItemsToBring()}>+ Añadir</button>
            </div>


        </div>
    </div>
  ) :"";
}
export default Agregaritems