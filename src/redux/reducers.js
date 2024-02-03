// reducers.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favReducer";
import prodReducer from "./prodReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  totalProducts: prodReducer,
});

export default rootReducer;
