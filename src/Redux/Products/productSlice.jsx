import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalAmount += newItem.price;
      if (existingItem) {
        existingItem.amount++;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          title: newItem.title,
          name: newItem.name,
          image: newItem.image,
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalAmount -= existingItem.price;
      if (existingItem.amount === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.amount--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;




