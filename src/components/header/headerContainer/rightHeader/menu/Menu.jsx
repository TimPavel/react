import React, { Component } from 'react'
import './Menu.css'


export class Menu extends Component {

  render() {
    const {items_prop, title} = this.props;
    return (
      <div className="menuWrap">
        <ul className = 'menu'>
          {items_prop.map(el => <li key={ el.title } ><a href={ el.href } >{ el.title }</a></li>)}
        </ul>
      </div>
    )
  }
}

