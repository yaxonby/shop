import React from "react";

export default class Cart extends React.Component {
constructor (props) {
  super(props)
  this.state={popUp:false}
}

popUpCart() {
this.setState(prevState => ({
      popUp: !prevState.popUp
    }));
console.log(this.state.popUp)
}
render ()
{
return (
  <article  class="CartMenu"  onClick={this.popUpCart.bind(this)} >
  Корзина:
<div>
кол-во ()<span>{}</span>
 цена ()<span>{}</span> </div>
<div>    </div>

  </article>
)}

}
/*
<ul>
{.map((elem, index)=>(
<li key={index}>
{elem}
</li>
))}

</ul>
*/
