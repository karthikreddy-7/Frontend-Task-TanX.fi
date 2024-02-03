// favoritesReducer.js
const initialState = {
  items: [], // Array to store favorite items
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // Add more cases if needed

    default:
      return state;
  }
};

export default favoritesReducer;
