import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CardExampleCard = (props) =>{
const {book}=props;
const {AddItemCart}=props

 return (
  <Card>
    <Image src={book.image} alt="Книга" width="250px" height="330px"/>
    <Card.Content>
      <Card.Header>{book.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Автор: {book.author}</span>
      </Card.Meta>
      <Card.Description>Цена: {book.price} руб.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="">
        <Icon name='chart line' /> Рейтинг: {book.rating}
      </a>
    </Card.Content>
    <div class="ButtonAddCart" onClick={AddItemCart.bind(this, book)}>  Добавить в корзину </div>
  </Card>
)}

export default CardExampleCard

//onClick={AddFilterSort.bind(this,"author")}
