import React, {Component, Fragment} from 'react'
import './Content.css'
import { ContentLeft } from "./contentLeft";
import { ContentRight } from "./contentRight";


export class Content extends Component {

  render() {
    return (

      <div className="container flex">
        <div className="row">
          <div className="col-md-8">
            <ContentLeft/>
          </div>

          <div className="col-md-4">
            <ContentRight/>
          </div>
        </div>


      </div>


    )
  }
}