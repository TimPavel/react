import React, {Component, Fragment} from 'react'
import './PostFooter.css'


export class PostFooter extends Component {

  render() {
    return (
      <Fragment>
        <div className="card-footer text-muted">
          Posted on January 1, 2017 by
          <a href="#">Start Bootstrap</a>
        </div>
      </Fragment>
    )
  }
}