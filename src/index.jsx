import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Menu } from './components/menu'
import { Login } from './components/login'

import { Content } from './components/content'
import { Container } from "react-bootstrap";

const items = [
  {href: '/', title: 'Home'},
  {href: '/about', title: 'About'},
  {href: '/contacts', title: 'Contacts'}
]

class App extends Component {
  render() {
    return (
      <div className={Container}>
        <Menu items_prop = {items} title = { 'Main Menu' }> </Menu>

        <Login />

        <Content > </Content>
      </div>
    )
  }
}


ReactDom.render(<App />, document.querySelector('#root'))







