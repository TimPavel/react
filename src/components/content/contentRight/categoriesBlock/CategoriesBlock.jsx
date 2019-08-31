import React, {Component} from 'react'
import './CategoriesBlock.css'


export class CategoriesBlock extends Component {

  render() {
    return (
      <div className="card">

        <h5 className ="cardHeader">Categories</h5>

        <div className ="cardBody">
          <div className="row">
            <div className="col-lg-6">
              <ul className="listUnstyled">
                <li><a href="">Web Design</a></li>
                <li><a href="">HTML</a></li>
                <li><a href="">Freebies</a></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="listUnstyled">
                <li><a href="">JavaScript</a></li>
                <li><a href="">CSS</a></li>
                <li><a href="">Tutorials</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}