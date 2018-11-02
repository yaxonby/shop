
const initialState={
ItemBook: null,
filterbY:"all"
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
  return state
}
