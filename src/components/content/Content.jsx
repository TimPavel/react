import React, {Component, Fragment} from 'react'
import './Content.css'
import {ContentLeft} from "./contentLeft";
import {ContentCaption} from "./contentLeft/contentCaption";


export class Content extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <ContentCaption/>

          <ContentLeft/>

        </div>


      </Fragment>
    )
  }
}