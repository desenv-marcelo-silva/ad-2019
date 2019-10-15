import React from 'react';
import BotaoSorteio from './frontend/botaoSorteio.js';

import './App.css';
import ListaAmigo from './frontend/listaAmigo';

function App() {
  return (
    <div className="App">
      <header className="App-header"><h2>Amigo secreto</h2>
      <BotaoSorteio />
      </header>

      <div className="App-container">
        <ListaAmigo />
      </div>
    </div>
  );
}

export default App;