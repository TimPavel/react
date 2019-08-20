import React, {Component, Fragment} from 'react'
import './Post.css'
import {PostFooter} from "./postFooter";



export class Post extends Component {

  render() {
    return (
      <Fragment>

        <div className="card" >
          <img src="../../../" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" className="btn btn-primary">Read More -></a>
          </div>
        </div>

        <PostFooter/>
      </Fragment>
    )
  }
}