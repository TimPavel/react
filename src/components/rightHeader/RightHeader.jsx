import React, {Component, Fragment} from 'react'
import './rightHeader.css'
import {Menu} from "../menu";

const items = [
  {href: '/', title: 'Home'},
  {href: '/about', title: 'About'},
  {href: '/service', title: 'Services'},
  {href: '/contacts', title: 'Contacts'}
]

export class RightHeader extends Component {
  render() {

    return (
      <Fragment>
        <Menu items_prop = {items} title = { 'Main Menu' }> </Menu>
      </Fragment>
    )
  }
}