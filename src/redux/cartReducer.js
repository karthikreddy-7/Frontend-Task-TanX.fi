const initialState = {
  items: [], // Array to store cart items
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );

      if (existingIndex !== -1) {
        // Product already exists in the cart, update the quantity
        state.items[existingIndex].quantity += action.payload.quantity || 1;
      } else {
        // Product doesn't exist, add it to the cart
        state.items = [...state.items, action.payload];
      }
      return state;

    default:
      return state;
  }
};

export default cartReducer;
