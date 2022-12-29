import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [test, setTest ] = useState(0)
  const teste ='Victor Gomes'
  document.title = 'Karrinho.com | Home'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
