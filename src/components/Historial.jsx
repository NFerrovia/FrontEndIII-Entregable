import React from 'react';

export default class Historial extends React.Component {
  mapHistorial() {
    return this.props.historial.map((opcion, i) => {
      return <li key={i}>{opcion}</li>;
    });
  }

  render() {
    return (
      <div className="recordatorio">
        <h3>Seleccion previa: {this.props.seleccion}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.mapHistorial()}</ul>
      </div>
    );
  }
}
