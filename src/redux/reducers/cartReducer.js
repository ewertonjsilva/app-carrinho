// src/redux/reducers/cartReducer.js

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART,
  } from '../actions/cartActions';
  
  const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.prd_id === item.prd_id);
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.prd_id === existItem.prd_id ? { ...x, qtd: x.qtd + 1 } : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...item, qtd: 1 }],
          };
        }
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.prd_id !== action.payload),
        };
  
      case INCREASE_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.prd_id === action.payload ? { ...x, qtd: x.qtd + 1 } : x
          ),
        };
  
      case DECREASE_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.prd_id === action.payload && x.qtd > 1
              ? { ...x, qtd: x.qtd - 1 }
              : x
          ),
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  