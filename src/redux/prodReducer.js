const initialState = {
  items: [], // Array to store favorite items
};

const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Total_Products":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // Add more cases if needed

    default:
      return state;
  }
};

export default prodReducer;
