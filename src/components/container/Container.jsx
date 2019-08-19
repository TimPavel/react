import React, {Component, Fragment} from 'react'
import './Container.css'
import {LeftHeader} from "../leftHeader";
import {RightHeader} from "../rightHeader";


export class Container extends Component {

  render() {
    return (
      <Fragment>
        <div className="container flex">
          <LeftHeader/>
          <RightHeader/>
        </div>
      </Fragment>
    )
  }
}