import React, {Component, Fragment} from 'react'
import './HeaderContainer.css'
import {LeftHeader} from "./leftHeader";
import {RightHeader} from "./rightHeader";

export class HeaderContainer extends Component {

  render() {
    return (
      <Fragment>
        <div className="container flex headerContent">
          <LeftHeader/>
          <RightHeader/>
        </div>
      </Fragment>
    )
  }
}