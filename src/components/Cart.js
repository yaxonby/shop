import React from "react";

export default class Cart extends React.Component {
constructor (props) {
  super(props)
  this.state={popUp:false}
}

popUpCart() {
this.setState(prevState => ({  popUp: !prevState.popUp  }));
console.log("Гюльчитай открой корзину",this.state.popUp)
}
render ()
{
const visibleCart=this.state.popUp ? "block": "none"
const {deleteItemToCart, itemsCart}=this.props

const Cart=itemsCart.itemsCart.itemsCart
console.log(Cart)
return (

  <article  class="CartMenu"  onClick={this.popUpCart.bind(this)} >
  Корзина:
<div>
кол-во
<span>{Cart.reduce(function(x, y) {return (x+(y.item))}, 0)}шт.</span>
 цена
 <span>{Cart.reduce(function(x, y) {return (x+(y.price*y.item))}, 0)}руб.</span>
  </div>

<div class="popUpCart"  style={ {display:visibleCart } }>

Покупки:
<br />
{console.log(this.state.popUp)}
<br />
<ul>


{
Cart.map(function(elem, index) {
return (
<li key={index}> {elem.title}  {elem.item}шт.  цена:{elem.price*elem.item}руб.

<div style={ {cursor:"pointer" } } onClick={deleteItemToCart.bind(this, elem.id)}> X </div>

</li>
)
}
)
}
</ul>
<div> Итого: {Cart.reduce(function(x, y) {return (x+(y.item))}, 0)}шт.
 {Cart.reduce(function(x, y) {return (x+(y.price*y.item))}, 0)}руб. </div>

 </div>

  </article>
)}
}

/*



*/



//{this.val? "none": "block"}

/*
<ul>
{.map((elem, index)=>(
<li key={index}>
{elem}
</li>
))}

</ul>
*/
