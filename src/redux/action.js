// actions.js
// action.js
// action.js
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const addToFavorites = (item) => ({
  type: "ADD_TO_FAVORITES",
  payload: item,
});

export const addtotalproducts = (item) => ({
  type: "Total_Products",
  payload: item,
});
