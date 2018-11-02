import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import orderBy from "lodash/orderBy";

export default class FilterMenu extends Component {
  //state = { activeItem: 'all' }

  //handleItemClick = (e, { name }) => { this.setState({ activeItem: name })}

  render() {
    console.log(this.props)
    const { Books, FilterSort} = this.props;
  
  //  const { activeItem } = this.state
  //  console.log( this.state)
 const { AddFilterSort } = this.props;
const { activeItem } = this.props.FilterSort;
//function AddFilterSort (a) {console.log(a)}
    return (
      <Menu secondary>

        <Menu.Item name='popular'
        // active={activeItem === 'popular'}
        onClick={AddFilterSort.bind(this, "popular")}>
        По популяроности
        </Menu.Item>

        <Menu.Item
          name='author'
        //  active={activeItem === 'author'}
          onClick={AddFilterSort.bind(this,"author")}>
          По автору
          </Menu.Item>

        <Menu.Item
          name='price_high'
      //    active={activeItem === 'price_high'}
          onClick={AddFilterSort.bind(this,"price_high")}>
          По стоимости с дорогих
          </Menu.Item>

        <Menu.Item
          name='price_low'
      //    active={activeItem === 'price_low'}
          onClick={AddFilterSort.bind(this,"price_low")}>
          По стоимости с дешевых
          </Menu.Item>

      </Menu>
    )
  }
}
