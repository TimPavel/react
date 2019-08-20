import React, {Component, Fragment} from 'react'
import './ContentLeft.css'
import {Post} from "./post";


export class ContentLeft extends Component {

  render() {
    return (
      <Fragment>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Fragment>
    )
  }
}