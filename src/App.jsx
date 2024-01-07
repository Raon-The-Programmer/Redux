import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import Totalfair from './Totalfair';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => {
  const price = useSelector((state) => state.price);

  const handleValue = (event) => {
    const newPrice = 549 * event.target.value;
    // Dispatch an action to update the price in the Redux store
    store.dispatch({ type: 'SET_PRICE', payload: newPrice });
  };

  return (
    <Provider store={store}>
      <div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '50vh',
            marginTop: '50px',
            marginLeft: '50px',
            justifyContent: 'space-evenly',
          }}
        >
          <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="" style={{ width: '30%' }} />
          <div>
            <h2>I PHONE 9</h2>
            <h5>Description</h5>
            <p>An apple mobile which is nothing like apple</p>
          </div>
          <div>
            
            <form action="submit">
              <input type="number" onChange={handleValue} placeholder="0" style={{ width: '70px' }} />
            </form>
          </div>
         
        </div>
        <hr />
        <div>
          <Totalfair />
        </div>
      </div>
    </Provider>
  );
};

export { App as default };
