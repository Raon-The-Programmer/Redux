import React from 'react';
import { useSelector } from 'react-redux';

const Finalprice = () => {
  const price = useSelector((state) => state.price);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h5>Total:</h5>
        <p style={{ fontWeight: 'bold', justifyContent: 'flex-end' }}>{price} $</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p style={{ color: 'red' }}>Get daily cash with JoVi cards</p>
      </div>
    </div>
  );
};

export default Finalprice;
