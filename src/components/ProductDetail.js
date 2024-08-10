// src/components/ProductDetail.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>{product.prd_nome}</h1>
      <p>{product.prd_descricao}</p>
      <p>R${product.prd_valor}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductDetail;
