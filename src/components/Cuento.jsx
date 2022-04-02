import React from 'react';
import Data from '../json/data.json';

export default class Cuento extends React.Component {
  render() {
    return <h1 className="historia">{Data[this.props.info].historia}</h1>;
  }
}
