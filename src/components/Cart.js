// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.prd_id}>
              <span>{item.prd_nome}</span>
              <span>Quantidade: {item.qtd}</span>
              <button onClick={() => dispatch(increaseQuantity(item.prd_id))}>
                +
              </button>
              <button onClick={() => dispatch(decreaseQuantity(item.prd_id))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(item.prd_id))}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
