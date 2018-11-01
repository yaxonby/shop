import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import * as serviceWorker from './serviceWorker';
import './App.css';
import App from "./App";
import rootReducer from "./reducers/index";

const store =createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root"))









/*

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {connect} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import books from "./books.json";
import axios from "axios"

const InitialState=[
"Metallica", "Beatles"
]

function rootReducer (state=InitialState, action) {
  switch (action.type) {
    case "addTrack": console.log (action.payload); return [...state.track, action.payload];
    default: return state
  }
}

const store=createStore(rootReducer);


function ArraySearch() {
var book;
function func(elem) {
book=elem;
console.log("из функции", book);
}

axios.get("http://localhost:3000/hello.txt").then((response)=>{
console.log(response); func(response)});

console.log(book)

var request=new XMLHttpRequest();
request.open("GET", "http://localhost:3000/hello.txt");
request.send();
function OnReadyStateChange() {
var status=request.status;
if (request.readyState) {console.log(request.readyState); console.log(request.statusText);
console.log(request.responseText)}
}
request.onload=OnReadyStateChange
console.log(request.responseText)

return (
<div> ySearch {
books.map(function(elem, index) {return (<li key={index}> {elem.title} </li> )
}  )
}
</div>)
}



ReactDOM.render(
<Provider store={store}>
<ArraySearch />
</Provider>,
document.getElementById("root"))

*/







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
