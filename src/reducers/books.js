const initialState={
ItemBook: null,
FilterBy:"all",
FilterWord:"",
ItemToCart:[{
  "id": 0,
  "title": "Происхождение",
  "author": "Дэн Браун",
  "image":
    "https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
  "price": 710,
  "rating": 3
},
{
  "id": 1,
  "title": "1984",
  "author": "Джордж Оруэлл",
  "image":
    "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
  "price": 415,
  "rating": 5
}]
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
  }
}

if (action.type==="ADD_ITEM_CART") {
console.log({...state, ItemToCart: action.payload})
return {
  ...state,
  ItemToCart: action.payload
}
}

  return state
}
