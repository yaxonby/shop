
const InitialState=[];

export default function cart(state=InitialState, action) {
switch (action.payload) {
case "ADD_ITEM_CART" : return [...state, action.payload];
case "DELETE_ITEM_CART" : return [...state.filter((id)=>
  (id==state.id)
)];
default : return state
}
}