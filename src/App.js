import React from 'react';
import Cuento from './components/Cuento.jsx';
import Historial from './components/Historial.jsx';
import Opciones from './components/Opciones.jsx';
import Data from './json/data.json';
import Swal from 'sweetalert2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      seleccion: '-',
      historial: [],
    };
  }

  componentDidMount() {
    Swal.fire('¡Bienvenido!');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contador <= Data.length - 1) {
      if (prevState.contador !== this.state.contador) {
        let historialPush = this.state.historial;
        historialPush.push(this.state.seleccion);
        this.setState({ historial: historialPush });
      }
    }
  }

  fin() {
    Swal.fire('FIN', '......¿o no?', 'question').then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }

  selectA = () => {
    if (this.state.contador >= Data.length - 2) {
      return this.fin();
    } else {
      if (this.state.seleccion === '-') {
        this.setState({ seleccion: 'A', contador: this.state.contador + 1 });
      } else {
        if (this.state.seleccion === 'A') {
          this.setState({ seleccion: 'A', contador: this.state.contador + 2 });
        } else if (this.state.seleccion === 'B') {
          this.setState({ seleccion: 'A', contador: this.state.contador + 1 });
        }
      }
    }
  };

  selectB = () => {
    if (this.state.contador >= Data.length - 2) {
      return this.fin();
    } else {
      if (this.state.seleccion === 'A') {
        this.setState({ seleccion: 'B', contador: this.state.contador + 3 });
      } else if (this.state.seleccion === 'B' || this.state.seleccion === '-') {
        this.setState({ seleccion: 'B', contador: this.state.contador + 2 });
      }
    }
  };

  render() {
    return (
      <div className="layout">
        <Cuento info={this.state.contador} />

        <Opciones
          info={this.state.contador}
          selectA={this.selectA}
          selectB={this.selectB}
        />

        <Historial
          historial={this.state.historial}
          seleccion={this.state.seleccion}
        />
      </div>
    );
  }
}

export default App;
