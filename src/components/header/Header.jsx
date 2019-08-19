import React, {Component, Fragment} from 'react'
import './Header.css'
import {Container} from "../container";


export class Header extends Component {
  render() {

    return (
      <Fragment>
        <div className="header">
          <Container/>
        </div>

      </Fragment>
    )
  }
}