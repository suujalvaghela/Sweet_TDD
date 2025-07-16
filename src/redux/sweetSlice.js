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
  },
});

export const {
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
  setSearchQuery,
} = sweetSlice.actions;

export default sweetSlice.reducer;
