import logo from './logo.svg';
import './App.css';
//import Nosotros from './nosotros' //importación DEFAULT
import {Nosotros} from './nosotros'
import {listadoTutores} from './listadoTutores'

const App = () => {

  const titulo = "Hola mundo, como andan?"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {titulo}
        </p>
        <hr/>
        <a
          className="App-link"
          href="https://www.coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos a coder
        </a>
      </header>

      <Nosotros />
      <listadoTutores />
    </div>
  );
}

export default App;
