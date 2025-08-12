import { createSlice } from "@reduxjs/toolkit";

function getCheckoutItemsFromStorage() {
  try {
    const data = localStorage.getItem("checkoutItems");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse checkout items from localStorage", e);
    return [];
  }
}

const initialState = {
  checkoutItems: getCheckoutItemsFromStorage(),
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCheckout: (state, action) => {
      const item = action.payload;
      const exists = state.checkoutItems.find((i) => i.id === item.id);

      if (!exists) {
        state.checkoutItems.push({ ...item });
        localStorage.setItem(
          "checkoutItems",
          JSON.stringify(state.checkoutItems)
        );
      }
    },

    removeFromCheckout: (state, action) => {
      state.checkoutItems = state.checkoutItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "checkoutItems",
        JSON.stringify(state.checkoutItems)
      );
    },

    clearCheckout: (state) => {
      state.checkoutItems = [];
      localStorage.removeItem("checkoutItems");
    },
  },
});

export const { addToCheckout, removeFromCheckout, clearCheckout } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
