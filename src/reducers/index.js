import books from "./books.js";
import cart from "./cart.js";
import { combineReducers } from 'redux';

export default combineReducers({
books,
cart
})
