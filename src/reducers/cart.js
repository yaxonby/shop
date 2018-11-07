const InitialState={
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
};

export default function cart(state=InitialState, action) {
switch (action.payload) {
//case "ADD_ITEM_CART" : console.log({...state, ItemToCart: action.payload});  return {...state, ItemToCart: action.payload};
case "DELETE_ITEM_CART" : return {...state.ItemToCart.filter(
function(elem) {
return (
action.payload===elem.ItemToCart.id)
}
)};
default : return state
}
}
