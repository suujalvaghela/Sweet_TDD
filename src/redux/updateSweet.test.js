import sweetReducer, { updateSweet } from './sweetSlice.js';

describe('updateSweet reducer', () => {
  it('should update sweet details', () => {
    const state = {
      sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }],
      searchQuery: '',
    };

    const next = sweetReducer(state, updateSweet({
      id: 1,
      updatedData: {
        name: 'Updated Kaju Katli',
        category: 'Milk-Based',
        price: 60,
        quantity: 10,
      },
    }));

    expect(next.sweets[0]).toEqual({
      id: 1,
      name: 'Updated Kaju Katli',
      category: 'Milk-Based',
      price: 60,
      quantity: 10,
    });
  });
});
