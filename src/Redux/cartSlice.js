import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to store cart items
  totalAmount: 0, // Total price of items
  totalQuantity: 0, // Total quantity of items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload; // Product being added
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          title: newItem.title,
          price: newItem.Price, // Use the correct property
          quantity: 1,
          totalPrice: newItem.Price, // Use the correct property
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.Price; // Use the correct property
      }

      state.totalAmount += newItem.Price; // Use the correct property
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price;
        existingItem.quantity--;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }

        state.totalQuantity--;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
