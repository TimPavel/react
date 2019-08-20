import React, { Component } from 'react'
import './Menu.css'


export class Menu extends Component {

  render() {
    const {items_prop, title} = this.props;
    return (
      <div>
        <ul className = 'menu'>
          {items_prop.map(el => <li><a href={ el.href }>{ el.title }</a></li>)}
        </ul>
      </div>
    )
  }
}

