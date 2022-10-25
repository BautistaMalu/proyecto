import React from 'react'

function creacion(props) {
  return (props.trigger) ? (
    <div className="todo">
        <div className="creacion">

            <button className="cerrar"></button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default creacion