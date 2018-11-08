import Cart from "../components/Cart"
import {connect} from "react-redux"

export default connect(
(state)=>({ItemToCart: state.cart.ItemToCart}),

(dispatch)=>({
deleteItemToCart: (id)=> {
dispatch({type: "DELETE_ITEM_CART", payload: id})
}
})
)(Cart)




//,AddItemCart: (book) => dispatch({type:"ADD_ITEM_CART", payload: book})
