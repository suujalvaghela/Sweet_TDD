import sweetReducer, {
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
} from './sweetSlice';

describe('sweetSlice reducer', () => {
  it('should return initial state', () => {
    expect(sweetReducer(undefined, { type: undefined })).toEqual({
      sweets: [],
      searchQuery: '',
    });
  });

  it('should handle addSweet', () => {
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

  it('should handle deleteSweet', () => {
    const state = { sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }], searchQuery: '' };
    const next = sweetReducer(state, deleteSweet(1));
    expect(next.sweets.length).toBe(0);
  });

  it('should handle purchaseSweet', () => {
    const state = { sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }], searchQuery: '' };
    const next = sweetReducer(state, purchaseSweet(1));
    expect(next.sweets[0].quantity).toBe(4);
  });

  it('should handle restockSweet', () => {
    const state = { sweets: [{ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 }], searchQuery: '' };
    const next = sweetReducer(state, restockSweet(1));
    expect(next.sweets[0].quantity).toBe(6);
  });
});
