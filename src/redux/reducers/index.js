// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// importe outros reducers se houver

const rootReducer = combineReducers({
  cart: cartReducer,
  // adicione outros reducers aqui
});

export default rootReducer;
