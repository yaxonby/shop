import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Cart from "../containers/CartsContainers"

export default class MenuRoot extends Component {
 state = {}
 handleItemClick = (e, { name }) => {  console.log( e); this.setState({ activeItem: name })}

  render() {
   const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}>
        Разделы
        </Menu.Item>

        <Menu.Item name='reviews'
        active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Войти
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
         active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}>
          Корзина
        </Menu.Item>

        <Cart itemsCart={this.props}/>
      </Menu>
    )
  }
}
