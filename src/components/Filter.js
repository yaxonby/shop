import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Filter extends Component {
  state = { activeItem: 'all' }

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name })}

  render() {
    const { activeItem } = this.state
    console.log( this.state)

    return (
      <Menu secondary>

        <Menu.Item name='popular' active={activeItem === 'popular'}
        onClick={this.handleItemClick}>
        По популяроности
        </Menu.Item>

        <Menu.Item
          name='author'
          active={activeItem === 'author'}
          onClick={this.handleItemClick}>
          По автору
          </Menu.Item>

        <Menu.Item
          name='price_high'
          active={activeItem === 'price_high'}
          onClick={this.handleItemClick}>
          По стоимости с дорогих
          </Menu.Item>

        <Menu.Item
          name='price_low'
          active={activeItem === 'price_low'}
          onClick={this.handleItemClick}>
          По стоимости с дешевых
          </Menu.Item>

      </Menu>
    )
  }
}
