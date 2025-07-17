import { createSlice } from '@reduxjs/toolkit';

let nextId = 1;

export const sweetSlice = createSlice({
  name: 'sweetShop',
  initialState: {
    sweets: [],
    searchQuery: '',
  },
  reducers: {
    addSweet: (state, action) => {
      state.sweets.push({ id: nextId++, ...action.payload });
    },
    deleteSweet: (state, action) => {
      state.sweets = state.sweets.filter(s => s.id !== action.payload);
    },
    purchaseSweet: (state, action) => {
      const sweet = state.sweets.find(s => s.id === action.payload);
      if (sweet && sweet.quantity > 0) {
        sweet.quantity -= 1;
      }
    },
    restockSweet: (state, action) => {
      const sweet = state.sweets.find(s => s.id === action.payload);
      if (sweet) {
        sweet.quantity += 1;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    updateSweet: (state, action) => {
      const { id, updatedData } = action.payload;
      const sweet = state.sweets.find(s => s.id === id);
      if (sweet) {
        sweet.name = updatedData.name || sweet.name;
        sweet.category = updatedData.category || sweet.category;
        sweet.price = updatedData.price || sweet.price;
        sweet.quantity = updatedData.quantity || sweet.quantity;
      }
    },
  },
});

export const {
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
  setSearchQuery,
  updateSweet,
} = sweetSlice.actions;

export default sweetSlice.reducer;
