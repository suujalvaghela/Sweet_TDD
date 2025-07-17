import sweetReducer, { deleteSweet } from './sweetSlice.js';

describe('deleteSweet reducer', () => {
  it('should delete a sweet', () => {
    const state = {
      sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }],
      searchQuery: '',
    };
    const next = sweetReducer(state, deleteSweet(1));
    expect(next.sweets.length).toBe(0);
  });
});
