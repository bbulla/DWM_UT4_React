import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from './Card';

function App() {
  return (
    <div className="container mt-6">
      <div className="columns">
        <div className="column">
          <Card
            titulo="Historias Fantásticas 1"
            descripcion="Cuenta la historia fantástica número 1"
            personaAsignada="Belu"
            fechaInicio="01-09-2024"
            fechaFin="15-10-2024"
          />
        </div>

        <div className='column'>
          <Card
            titulo="Historias Fantásticas 2"
            descripcion="Cuenta la historia fantástica número 2"
            personaAsignada="Enzo"
            fechaInicio="05-09-2024"
            fechaFin="20-10-2024"
          />
        </div>

        <div className='column'>
          <Card
            titulo="Historias Fantásticas 3"
            descripcion="Cuenta la historia fantástica número 3"
            personaAsignada="Mateo"
            fechaInicio="10-09-2024"
            fechaFin="25-10-2024"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
