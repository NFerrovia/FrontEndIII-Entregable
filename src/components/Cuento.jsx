import React from 'react';
import Data from '../json/data.json';

export default class Cuento extends React.Component {
  render() {
    // Utiliza el estado de contador en forma de props para saber que parte del json mostrar
    return <h1 className="historia">{Data[this.props.info].historia}</h1>;
  }
}
