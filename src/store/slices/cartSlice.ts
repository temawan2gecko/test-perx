import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, CartItem } from '../../types';

interface CartState {
  items: Record<string, CartItem>;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '{}'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const key = action.payload.name;
      if (state.items[key]) {
        state.items[key].quantity += 1;
      } else {
        state.items[key] = { ...action.payload, quantity: 1 };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ key: string; quantity: number }>
    ) => {
      const { key, quantity } = action.payload;
      if (state.items[key]) {
        state.items[key].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
