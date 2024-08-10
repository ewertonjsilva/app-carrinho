// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Loja de Lanches</h1>
        <Cart />
        {/* Renderize o componente de detalhe do produto onde necessário */}
      </div>
    </Provider>
  );
}

export default App;
