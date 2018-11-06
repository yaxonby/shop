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
return (
  <article  class="CartMenu"  onClick={this.popUpCart.bind(this)} >
  Корзина:
<div>
кол-во ()<span>{}</span>
 цена ()<span>{}</span> </div>
<div>    </div>

<div class="popUpCart"  style={ {display:visibleCart, position:"absolute" } }>



Cart
<br />
{console.log(this.state.popUp)}
list <br />
.....
 </div>
  </article>
)}
}

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
