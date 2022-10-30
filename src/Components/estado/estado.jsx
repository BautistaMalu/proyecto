import React from 'react'
import './estado.css';

function Estado(props4) {
  return (props4.trigger) ? (
    <div className="todoestado">
      <div className="estado"></div>
    </div>
  ):"";
}

export default Estado