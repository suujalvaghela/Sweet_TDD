import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SweetItem from './SweetItem';
import { setSearchQuery } from '../redux/sweetSlice';

const SweetList = () => {
  const dispatch = useDispatch();
  const sweets = useSelector(state => state.sweetShop.sweets);
  const searchQuery = useSelector(state => state.sweetShop.searchQuery.toLowerCase());

  const [sortField, setSortField] = useState('name');

  const filtered = sweets.filter(s =>
    s.name.toLowerCase().includes(searchQuery) ||
    s.category.toLowerCase().includes(searchQuery)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortField === 'name' || sortField === 'category') {
      return a[sortField].localeCompare(b[sortField]);
    } else {
      return a[sortField] - b[sortField];
    }
  });

  return (
    <div>
      <h2>Sweets List</h2>

      <input
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />

      <div>
        <label>Sort by: </label>
        <select value={sortField} onChange={e => setSortField(e.target.value)}>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p>No sweets found.</p>
      ) : (
        sorted.map(s => <SweetItem key={s.id} sweet={s} />)
      )}
    </div>
  );
};

export default SweetList;
