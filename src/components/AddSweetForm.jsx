import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addSweet } from '../redux/sweetSlice';

const AddSweetForm = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(''); // 👈 new state for manual ID
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Nut-Based');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const idValue = parseInt(id, 10);
    const priceValue = parseFloat(price);
    const quantityValue = parseInt(quantity, 10);

    if (isNaN(idValue) || idValue <= 0) {
      alert('ID must be a positive number.');
      return;
    }

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
      id: idValue, // 👈 use manually entered ID
      name,
      category,
      price: priceValue,
      quantity: quantityValue,
    }));

    // Reset form
    setId('');
    setName('');
    setCategory('Nut-Based');
    setPrice('');
    setQuantity('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Add Sweet</h2>

      <input
        placeholder="ID"
        type="number"
        min="1"
        value={id}
        onChange={e => setId(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded"
      >
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
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <input
        placeholder="Quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Add Sweet
      </button>
    </form>
  );
};

export default AddSweetForm;
