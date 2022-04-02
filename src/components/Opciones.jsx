import React from 'react';
import Data from '../json/data.json';

export default class Opciones extends React.Component {
  render() {
    return (
      <div className="containerOpciones">
        <div className="opcion">
          <button className="botones" onClick={this.props.selectA}>
            A
          </button>
          <div className="detalle">{Data[this.props.info].opciones.a}</div>
        </div>

        <div className="opcion">
          <button className="botones" onClick={this.props.selectB}>
            B
          </button>
          <div className="detalle">{Data[this.props.info].opciones.b}</div>
        </div>
      </div>
    );
  }
}

/*¨
          <div className="opcion">{Data[this.state.contador].opciones.a}</div>
        */
