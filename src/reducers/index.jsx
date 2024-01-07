// reducers/index.js
import { combineReducers } from 'redux';
import priceReducer from './priceReducer';

const rootReducer = combineReducers({
  price: priceReducer,
});

export default rootReducer;
