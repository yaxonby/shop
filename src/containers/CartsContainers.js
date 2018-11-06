
import Cart from "../components/Cart"
import {connect} from "react-redux"


export default connect(
(state)=>({ItemToCart: state.cart.ItemToCart}),
(dispatch)=>({deleteItemToCart: (val)=> dispatch({type: "DELETE_ITEM_CART" ,payload:  val })})

)(Cart)
