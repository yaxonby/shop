import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class FilterMenu extends Component {

Add() {
  console.log(this.textInput.value)
//  this.AddFilterSort(this.textInput.value);
}

  render() {
    console.log(this.props)

 const { AddFilterSort,   FilterSort, setSearchQuery } = this.props;

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


          <input type="text" icon="search"
            name='search' placeholder='Найти книгу...'
            ref={(input)=>{this.textInput=input}}
          onChange={e=> setSearchQuery(e.target.value)}

          />
      </Menu>
    )
  }
}

//value={FilterSort}
