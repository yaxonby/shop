import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import CardExampleCard from "./components/BookCard"
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

componentWillMount() {
const {LoadBooks}=this.props;
axios.get("http://localhost:3000/books.json").then(response=> {
LoadBooks(response.data); console.log(response.data)}
)
}
/* добавить книгу вручную / Add book handle.  In development!
  addBook(){
  this.props.onAddBook(this.bookInput.value)  ;
  }

добавить книгу вручную / Add book handle.  In development!
<input type="text" ref={(input) => {this.bookInput=input}} />
<button onClick={
this.addBook.bind(this)}>Add Book </button>
*/
render() {
const {testStore}=this.props;

//Загрузка книг из файла json/ Load books from file json.
return (
<content>
{!testStore ? "Загрузка..."
: this.props.testStore.map((book, index)=>
<CardExampleCard book={book} key={index}/>
)}
</content>
);
}
}

export default connect (
state=> ({
  testStore: state.books.ItemBook
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
)(App)
