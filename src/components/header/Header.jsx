import React, {Component, Fragment} from 'react'
import './Header.css'
import {HeaderContainer} from "./headerContainer";


export class Header extends Component {
  render() {

    return (
      <Fragment>
        <div className="header">

          <HeaderContainer/>


        </div>

      </Fragment>
    )
  }
}