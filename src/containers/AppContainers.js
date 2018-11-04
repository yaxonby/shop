import {connect} from "react-redux";
import AppComponent  from "../components/AppComponent"
import orderBy from "lodash/orderBy";

function SortBy(Books, filter) {

orderBy(Books, "price", "desc")
switch (filter) {
case "popular": {console.log("Filter=",filter,orderBy(Books, filter, "desc")); return (orderBy(Books, "rating", "asc"))};
 case "author": console.log("Filter=",filter,orderBy(Books, filter, "desc")); return orderBy(Books, "author", "asc");
 case "price_high": console.log("Filter=",filter, orderBy(Books, filter, "desc")); return orderBy(Books, "price", "desc");
case "price_low": console.log("Filter=",filter,orderBy(Books, filter, "asc")); return orderBy(Books, "price", "asc");

 default: console.log("Filter=",filter,orderBy(Books, filter, "asc")); return orderBy(Books, "price", "asc"); ;
}
}

export default connect(
state=> ({
  testStore: SortBy(state.books.ItemBook, state.books.FilterBy)
}),
dispatch => ({
  AddBooks: (book)=> {
    dispatch({type: "ADD_BOOKS", payload: book});
  },
  LoadBooks: (books)=> {
    dispatch({type: "SET_BOOKS", payload: books});
  },
  AddItemCart: (cart) =>{
  dispatch({type:"ADD_ITEM_CART", payload: cart})
  }
})
)(AppComponent)
