// src/App.js

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

function App() {

  const [prod, setProd] = useState([
    {
      prd_id: 1,
      prd_nome: "Caneta",
      prd_descricao: "Transparente cor azul",
      prd_valor: 6.30
    },
    {
      prd_id: 2,
      prd_nome: "Caderno",
      prd_descricao: "8 matérias capa dura",
      prd_valor: 16.30
    },
    {
      prd_id: 3,
      prd_nome: "Lápis de cor",
      prd_descricao: "18 cores",
      prd_valor: 36.30
    },
    {
      prd_id: 4,
      prd_nome: "Bolsa",
      prd_descricao: "2 divisórias e 1 cor",
      prd_valor: 116.30
    }
  ]);

  return (
    <Provider store={store}>
      <div>
        <h1>Loja de Lanches</h1>
        <Cart />
        {/* Renderize o componente de detalhe do produto onde necessário */}
        {/* {
          prod.map( product => ProductDetail(product= product))
        } */}


        {
          prod.map(product => <h1>{product.prd_nome}</h1>)
        }

      </div>
    </Provider>
  );
}

export default App;
