import {connect} from "react-redux";
import AppComponent  from "../components/AppComponent"
import orderBy from "lodash/orderBy";

function SortBy(Books, filter, searchWord) {
//orderBy(Books, "price", "desc")
switch (filter) {
case "popular": {console.log("Filter=",filter,orderBy(Books, filter, "desc")); return (orderBy(Books, "rating", "asc"))};
case "author": console.log("Filter=",filter,orderBy(Books, filter, "desc")); return orderBy(Books, "author", "asc");
case "price_high": console.log("Filter=",filter, orderBy(Books, filter, "desc")); return orderBy(Books, "price", "desc");
case "price_low": console.log("Filter=",filter,orderBy(Books, filter, "asc")); return orderBy(Books, "price", "asc");

 default: console.log("Filter=",filter,orderBy(Books, filter, "asc")); return orderBy(Books, "price", "asc"); ;
}
}

function serch(Books, filter, searchWord){

const ArraySort=SortBy(Books, filter, searchWord)
searchWord=searchWord.toLowerCase()

return ArraySort.filter(function(x) {
  let aTitle, aAuthor
  aTitle=x.title.toLowerCase().indexOf(searchWord)
  aAuthor=x.author.toLowerCase().indexOf(searchWord)
  return ((aTitle>=0) || (aAuthor>=0))
})
}

export default connect(
state=> ({
  testStore: serch(state.books.ItemBook, state.books.FilterBy, state.books.FilterWord)
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
