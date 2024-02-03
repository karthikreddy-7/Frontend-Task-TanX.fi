// actions.js
export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const addToFavorites = (item) => ({
  type: "ADD_TO_FAVORITES",
  payload: item,
});
// Add more actions if needed
