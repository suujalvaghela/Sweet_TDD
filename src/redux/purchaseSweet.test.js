import sweetReducer, { purchaseSweet } from './sweetSlice.js';

describe('purchaseSweet reducer', () => {
  it('should decrease quantity by 1', () => {
    const state = {
      sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }],
      searchQuery: '',
    };
    const next = sweetReducer(state, purchaseSweet(1));
    expect(next.sweets[0].quantity).toBe(4);
  });
});
