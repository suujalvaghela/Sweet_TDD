import sweetReducer, { addSweet } from './sweetSlice.js';

describe('addSweet reducer', () => {
  it('should add a sweet', () => {
    const state = { sweets: [], searchQuery: '' };
    const next = sweetReducer(state, addSweet({
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 5,
    }));
    expect(next.sweets.length).toBe(1);
    expect(next.sweets[0].name).toBe('Kaju Katli');
  });
});
