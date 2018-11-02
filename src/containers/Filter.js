import React, {Component} from "react";
import {connect} from "react-redux";
import FilterMenu from "../components/FilterMenu";


export default connect(
(state)=> ({
  FilterSort: state.books.FilterBy,
  Books: state.books.ItemBook}),
(dispatch) => ({
  AddFilterSort: (sort) =>{dispatch({type:"FILTER_SORT", payload: sort})}
}))(FilterMenu)
