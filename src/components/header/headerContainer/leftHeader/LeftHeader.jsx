import React, {Component, Fragment} from 'react'
import './leftHeader.css'


export class LeftHeader extends Component {
  render() {

    return (
      <Fragment>
       <div className="headerTitle">
         <a href="/">Start&nbsp;Bootstrap</a>
       </div>
      </Fragment>
    )
  }
}