import React, {Component, Fragment} from 'react'
import './ContentLeft.css'
import {Post} from "./post";
import {ContentCaption} from "./contentCaption";
import {Pagination} from "./pagination";


export class ContentLeft extends Component {

  render() {
    return (
      <div className="contentRow">
        <ContentCaption/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Pagination/>
      </div>
    )
  }
}