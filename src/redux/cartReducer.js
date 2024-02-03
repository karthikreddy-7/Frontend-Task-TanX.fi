// cartReducer.js
const initialState = {
  items: [], // Array to store cart items
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // Add more cases if needed

    default:
      return state;
  }
};

export default cartReducer;
