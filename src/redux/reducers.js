// reducers.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
