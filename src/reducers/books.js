const initialState={
ItemBook: null,
FilterBy:"all",
FilterWord:""
}

export default function booksReducer (state=initialState, action) {
console.log("action.payload", action.payload)
console.log("action.type", action.type)
  if (action.type==="SET_BOOKS") {
    return   {
    ...state,
    ItemBook: action.payload
  };
  }
  if (action.type==="FILTER_SORT") {
    return   {
    ...state,
    FilterBy: action.payload
  };
  }

  if (action.type==="FILTER_SORT_SEARCH_WORD") {
    return   {
    ...state,
    FilterWord: action.payload
  };
  }


  return state
}
