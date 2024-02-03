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
        state.items[existingIndex].quantity += action.payload.quantity || 1;
      } else {
        state.items = [...state.items, action.payload];
      }
      return state;
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.productId === action.payload.productId &&
          cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
