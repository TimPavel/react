import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { Header } from "./components/header";

const items = [
  {href: '/', title: 'Home'},
  {href: '/about', title: 'About'},
  {href: '/contacts', title: 'Contacts'}
]

class App extends Component {
  render() {
    return (
      <div>
        <Header />


      </div>
    )
  }
}


ReactDom.render(<App />, document.querySelector('#root'))







