// reducers/priceReducer.js
const initialState = 0;

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRICE':
      return action.payload;
    default:
      return state;
  }
};

export default priceReducer;
