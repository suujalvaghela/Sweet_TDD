import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchQuery,
  deleteSweet,
  purchaseSweet,
  restockSweet,
  updateSweet,
} from '../redux/sweetSlice';

const SweetList = () => {
  const dispatch = useDispatch();
  const sweets = useSelector((state) => state.sweetShop.sweets);
  const searchQuery = useSelector((state) =>
    state.sweetShop.searchQuery.toLowerCase()
  );

  const [sortField, setSortField] = useState('name');

  const filtered = sweets.filter(
    (s) =>
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
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Sweets List</h2>

      <input
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      <div className="mb-6 flex items-center">
        <label className="mr-2 font-medium">Sort by:</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="text-center text-gray-500">No sweets found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((sweet) => (
                <tr key={sweet.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{sweet.id}</td>
                  <td className="py-2 px-4 border-b">{sweet.name}</td>
                  <td className="py-2 px-4 border-b">{sweet.category}</td>
                  <td className="py-2 px-4 border-b">₹{sweet.price}</td>
                  <td className="py-2 px-4 border-b">{sweet.quantity}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => dispatch(purchaseSweet(sweet.id))}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Purchase
                      </button>
                      <button
                        onClick={() => dispatch(restockSweet(sweet.id))}
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Restock
                      </button>
                      <button
                        onClick={() => dispatch(deleteSweet(sweet.id))}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          const newId = parseInt(prompt('Enter new ID', sweet.id));
                          const newName = prompt('Enter new name', sweet.name);
                          const newCategory = prompt(
                            'Enter new category',
                            sweet.category
                          );
                          const newPrice = parseFloat(
                            prompt('Enter new price', sweet.price)
                          );
                          const newQuantity = parseInt(
                            prompt('Enter new quantity', sweet.quantity)
                          );

                          if (
                            !isNaN(newId) &&
                            newId > 0 &&
                            newName &&
                            newCategory &&
                            !isNaN(newPrice) &&
                            newPrice > 0 &&
                            !isNaN(newQuantity) &&
                            newQuantity >= 0
                          ) {
                            dispatch(
                              updateSweet({
                                id: sweet.id,
                                updatedData: {
                                  id: newId,
                                  name: newName,
                                  category: newCategory,
                                  price: newPrice,
                                  quantity: newQuantity,
                                },
                              })
                            );
                          } else {
                            alert('Invalid input.');
                          }
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SweetList;
