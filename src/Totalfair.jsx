// Totalfair.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Finalprice from './Finalprice';

const Totalfair = () => {
  const price = useSelector((state) => state.price);

  return (
    <div style={{ margin: '0 30px 0 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h6>Subtotal:</h6>
        <p style={{ fontWeight: 'bold' }}>{price}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h6>Shipping:</h6>
        <p style={{ fontWeight: 'bold' }}>FREE</p>
      </div>
      <hr />
      <Finalprice />
    </div>
  );
};

export default Totalfair;
