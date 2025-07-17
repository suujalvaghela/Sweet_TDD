import { useDispatch } from 'react-redux';
import { deleteSweet, purchaseSweet, restockSweet } from '../redux/sweetSlice';

const SweetItem = ({ sweet }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow rounded p-4 mb-4 flex justify-between items-center flex-wrap">
      <div className="mb-4 md:mb-0">
        <h4 className="text-lg font-semibold mb-1">{sweet.name}</h4>
        <p className="text-gray-700">Category: {sweet.category}</p>
        <p className="text-gray-700">Price: ₹{sweet.price}</p>
        <p className="text-gray-700">Quantity: {sweet.quantity}</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => dispatch(purchaseSweet(sweet.id))}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Purchase
        </button>

        <button
          onClick={() => dispatch(restockSweet(sweet.id))}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          Restock
        </button>

        <button
          onClick={() => dispatch(deleteSweet(sweet.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SweetItem;
