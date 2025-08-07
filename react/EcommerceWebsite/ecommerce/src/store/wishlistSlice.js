import { createSlice } from "@reduxjs/toolkit";

function getWishlistItemsFromStorage() {
  try {
    const data = localStorage.getItem("wishlistItems");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse wishlist items from localStorage", e);
    return [];
  }
}
const initialState = {
  wishlistItems: getWishlistItemsFromStorage(),
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlistItems.find((i) => i.id === item.id);

      if (!exists) {
        state.wishlistItems.push({ ...item });
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("wishlistItems");
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
