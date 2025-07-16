import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSweet } from '../redux/sweetSlice';

const AddSweetForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Nut-Based');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceValue = parseFloat(price);
    const quantityValue = parseInt(quantity, 10);

    if (!name || !category) {
      alert('Name and category are required.');
      return;
    }

    if (isNaN(priceValue) || priceValue <= 0) {
      alert('Price must be a positive number.');
      return;
    }

    if (isNaN(quantityValue) || quantityValue <= 0) {
      alert('Quantity must be a positive number.');
      return;
    }

    dispatch(addSweet({
      name,
      category,
      price: priceValue,
      quantity: quantityValue,
    }));

    // Reset form
    setName('');
    setCategory('Nut-Based');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Sweet</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="Nut-Based">Nut-Based</option>
        <option value="Milk-Based">Milk-Based</option>
        <option value="Vegetable-Based">Vegetable-Based</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Candy">Candy</option>
        <option value="Pastry">Pastry</option>
      </select>

      <input
        placeholder="Price"
        type="number"
        min="50"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <input
        placeholder="Quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button type="submit">Add Sweet</button>
    </form>
  );
};

export default AddSweetForm;
