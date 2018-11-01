import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuFilter extends Component {
  state = { activeItem: 'all' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='По популяроности' active={activeItem === 'popular'}
        onClick={this.handleItemClick} />
        <Menu.Item
          name='По автору'
          active={activeItem === 'author'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='По стоимости с дорогих'
          active={activeItem === 'price_high'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='По стоимости с дешевых'
          active={activeItem === 'price_low'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='Поиск'>
          <Menu.Item>
            <Input icon='find' placeholder='найти...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
