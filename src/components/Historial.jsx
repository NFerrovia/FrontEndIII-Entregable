import React from 'react';

export default class Historial extends React.Component {
  // Se utiliza la función map para el historial de arrays, cada entrada creada su respectiva key
  // de identificación.
  mapHistorial() {
    return this.props.historial.map((opcion, i) => {
      return <li key={i}>{opcion}</li>;
    });
  }

  render() {
    return (
      // Utiliza el estado de seleccion en forma de props para saber que parte del json mostrar
      // Se crea una lista ordenada con el historial
      <div className="recordatorio">
        <h3>Seleccion previa: {this.props.seleccion}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.mapHistorial()}</ul>
      </div>
    );
  }
}
