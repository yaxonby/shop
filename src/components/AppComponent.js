import React, {Component} from "react";
import axios from "axios";
import CardExampleCard from "./BookCard"
import Menu from "./Menu"
import Filter from "../containers/Filter"

export default class AppComponent extends Component  {

//Загрузка книг с сервера из файла json/ Load books off server from file json.
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

//Извлечение данных книг из файла json/ Read off data books from file json.
render() {
const {testStore}=this.props;

  return (
<section>
<Menu />
<Filter />
<div>
{!testStore ? "Загрузка..."
: this.props.testStore.map((book, index)=>
<CardExampleCard AddItemCart={this.props.AddItemCart} book={book} key={index}/>
)}
</div>

</section>
)}
}
