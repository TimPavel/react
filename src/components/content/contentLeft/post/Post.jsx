import React, {Component, Fragment} from 'react'
import './Post.css'


export class Post extends Component {

  render() {
    return (
      <Fragment>

        <div className="card mb-4">
          <img src="/src/assets/750x300.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" className="btn btn-primary">Read More -></a>
          </div>


          <div className="postFooter text-muted">
            Posted on January 1, 2017 by&nbsp;
            <a href="#">Start Bootstrap</a>
          </div>
        </div>
      </Fragment>
    )
  }
}