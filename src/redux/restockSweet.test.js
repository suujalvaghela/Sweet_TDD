import sweetReducer, { restockSweet } from './sweetSlice.js';

describe('restockSweet reducer', () => {
  it('should increase quantity by 1', () => {
    const state = {
      sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }],
      searchQuery: '',
    };
    const next = sweetReducer(state, restockSweet(1));
    expect(next.sweets[0].quantity).toBe(6);
  });
});
