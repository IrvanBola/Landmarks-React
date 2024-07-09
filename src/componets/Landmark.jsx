import React from "react";
import '../style-sheets/Landmark.css'

export function Landmark(props) {
  return(
    <div className="contenedor-landmark">
      <img className="imagen-landmark"
      src={require(`../img/landmark-${props.img}.png`)}
      alt="Foto de torre de pisa" />

    <div className="contenedor-texto-landmarks">
        <p className="nombre-landmark"><h2>{props.nombre}</h2></p>
        <p className="pais-landmark">{props.pais}</p>
        <p className="texto-landmark">{props.landmark}</p>
      </div>
      </div>
  );
}

