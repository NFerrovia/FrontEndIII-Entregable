import React from 'react';
import Cuento from './components/Cuento.jsx';
import Historial from './components/Historial.jsx';
import Opciones from './components/Opciones.jsx';
import Data from './json/data.json';
import Swal from 'sweetalert2';

class App extends React.Component {
  constructor() {
    super();

    // Inicialización de variables
    this.state = {
      contador: 0,
      seleccion: '-',
      historial: [],
    };
  }

  // Utilización de ciclo de vida de Montaje para darle la bienvenida al usuario.
  componentDidMount() {
    Swal.fire('¡Bienvenido!');
  }

  // Utilización de ciclo de vida de Actualización para crear un historial de selecciones en un array y actualizar el State correspondiente.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contador <= Data.length - 1) {
      if (prevState.contador !== this.state.contador) {
        let historialPush = this.state.historial;
        historialPush.push(this.state.seleccion);
        this.setState({ historial: historialPush });
      }
    }
  }

  // La función fin se utiliza para reiniciar la pantalla al terminar la historia
  fin() {
    Swal.fire('FIN', '......¿o no?', 'question').then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }

  // Funciones llamadas al elegir una de las dos opciones respectivamente de la historia.
  // Avanza y actualiza el estado del contador que es el índice de lo que se muestra del json dependiendo
  // de la selección. Si detecta el final del json, llama a la función fin.
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

  // idem SelectA pero con la opción B.
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
      // Se divide las diferentes partes de lo que se muestra en pantalla en componentes
      // a los que se les pasan por props los datos respectivos a su funcionamiento.
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
