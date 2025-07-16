import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSweet, purchaseSweet, restockSweet } from '../redux/sweetSlice';

const SweetItem = ({ sweet }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{sweet.name}</h4>
      <p>Category: {sweet.category}</p>
      <p>Price: {sweet.price}</p>
      <p>Quantity: {sweet.quantity}</p>
      <button onClick={() => dispatch(purchaseSweet(sweet.id))}>Purchase</button>
      <button onClick={() => dispatch(restockSweet(sweet.id))}>Restock</button>
      <button onClick={() => dispatch(deleteSweet(sweet.id))}>Delete</button>
    </div>
  );
};

export default SweetItem;
