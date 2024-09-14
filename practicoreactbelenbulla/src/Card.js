import React from 'react';
import 'bulma/css/bulma.min.css';

function Card({ titulo, descripcion, personaAsignada, fechaInicio, fechaFin }) {
    return (
        <div className="card has-background-info-light">
            <header className="card-header">
                <p className="card-header-title is-centered has-text-black">
                    {titulo}
                </p>
            </header>
            <div className="card-content">
                <div className="content has-text-black">
                    <p className="is-size-5">{descripcion}</p>
                    <p><strong className="has-text-black">Asignado a:</strong> {personaAsignada}</p>
                    <p><strong className="has-text-black">Fecha de inicio:</strong> {fechaInicio}</p>
                    <p><strong className="has-text-danger">Fecha de fin:</strong> {fechaFin}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
