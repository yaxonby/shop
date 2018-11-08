const initialState={
ItemBook: null,
FilterBy:"all",
FilterWord:"",
//данные в  ItemToCart должны лежать не здесь, а в cart но от туда нет доступа в контейнере APP
ItemToCart: [{
  "id": 0,
  "title": "Происхождение",
  "author": "Дэн Браун",
  "image":
    "https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
"item": 1,
  "price": 710,
  "rating": 3
},
{
  "id": 1,
  "title": "1984",
  "author": "Джордж Оруэлл",
  "image":
    "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
"item": 1,
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

//Проверяем есть ли покупка в корзине, если не добавлялась, то
//свойство item(число покупок данного товара) у нее будент undefined
if (action.payload.item===undefined)  {action.payload.item=1}

//Если товар есть уже в корзине, то отфильтруем его по id
//чтобы он не отображался в корзине два раза
else
  {if (action.payload.item>0) action.payload.item=action.payload.item+1; return {
  ...state,
  ItemToCart: [...state.ItemToCart.filter(function(x) {
 return (x.id!==action.payload.id)}), action.payload]
}}

return {
  ...state,
  ItemToCart: [...state.ItemToCart, action.payload]
}
}
  return state
}
